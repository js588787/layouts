<script setup lang="ts">
import PaymentValletSelect from './PaymentValletSelect.vue';
import PaymentMethodSelect from './PaymentMethodSelect.vue';
import PaymentSumInput from './PaymentSumInput.vue';
import { computed, ref, watch } from 'vue';
import { PaymentInfo } from '../types/paymentInfo';
import { RESPONSE_MOCK } from '../consts';
import { PaymentMethod } from '../types/pamentMethod';

const paymentInfo = ref<PaymentInfo>();

const paymentVallet = ref<string>("");
const paymentMethod = ref<PaymentMethod>({} as PaymentMethod);
const paymentSum = ref<number>(0);
const errorMessage = ref<string>("");

const loadPaymentInfo = async () => {
    const IS_MOCKED = true;

    if (IS_MOCKED) {
        paymentInfo.value = RESPONSE_MOCK.data as unknown as PaymentInfo;
    }
    else {
        const resp: Response = await fetch(`https://testTask.com/api/ui/payments/info/`, {
            method: "GET",
        });

        paymentInfo.value = JSON.parse(await resp.json());
    }

    paymentVallet.value = paymentInfo.value!.default_currency;
};

const paymentVallets = computed(() => paymentInfo.value &&
    Object.keys(paymentInfo.value.currencies).filter(x => x !== "CRYPTO"));

const paymentMethods = computed(() => paymentVallet.value &&
    paymentInfo.value?.currencies[paymentVallet.value]);

const doPayment = async () => {
    errorMessage.value = "";

    try {
        let params = new URLSearchParams();
        params.append('currency', paymentVallet.value);
        params.append('method', paymentMethod.value.code);
        params.append('amount', paymentSum.value.toString());

        const url = "https://testTask.com/api/ui/payments/invoice/create/"
        const resp: Response = await fetch(url + params.toString(), {
            method: "POST",
        });

        const result = JSON.parse(await resp.json());

        if (!result.success) {
            throw new Error(result.message);
        }

        window.location.href = result.data.url;
    }
    catch (e) {
        errorMessage.value = e.toString();
    }
};

watch(() => paymentVallet.value, (value: string) => {
    paymentMethod.value = paymentInfo.value?.currencies[value]?.[0];
    paymentSum.value = paymentMethod.value?.min_amount;
}, { immediate: true });

loadPaymentInfo();
</script>

<template>
    <div class="wrapper col-container">
        <p class="text-[36px] leading-[42px]">
            <b>Пополните баланс, </b>
            <span class="text-secondary">чтобы получить номер для приема смс</span>
        </p>

        <span v-if="errorMessage" class="text-[14px] text-[#E86068]">{{ errorMessage }}</span>

        <PaymentValletSelect
            :vallets="paymentVallets || []"
            v-model="paymentVallet"
            :defaultValue="paymentInfo?.default_currency"
        />

        <PaymentMethodSelect
            :methods="paymentMethods || []"
            v-model="paymentMethod"
        />

        <PaymentSumInput
            v-model="paymentSum"
            :min-value="paymentMethod.min_amount"
            :currency="paymentVallet"
        />

        <button
            class="h-[63px] cursor-hover rounded-[12px] p-[20px] text-[20px] text-white bg-gradient-to-l from-[#E2C299] to-[#C5A67C] hover:to-[#d1b896] hover:from-[#E2C299] ease-out duration-100"
            @click="doPayment"
        >
            Оплатить
        </button>
    </div>
</template>

<style scoped>
.wrapper {
    @apply w-full max-w-[1160px] gap-[30px] px-[10px] py-[40px];
}
</style>
