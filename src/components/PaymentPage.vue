<script setup lang="ts">
import PaymentValletSelect from './PaymentValletSelect.vue';
import PaymentMethodSelect from './PaymentMethodSelect.vue';
import PaymentSumInput from './PaymentSumInput.vue';
import { computed, ref } from 'vue';
import { PaymentInfo } from '../types/paymentInfo';
import { RESPONSE_MOCK } from '../consts';
import { PaymentMethod } from '../types/pamentMethod';

const paymentInfo = ref<PaymentInfo>();

const paymentVallet = ref<string>("");
const paymentMethod = ref<PaymentMethod>({} as PaymentMethod);
const paymentSum = ref<number>(0);

const loadPaymentInfo = async () => {
    const IS_MOCKED = true;

    if (IS_MOCKED) {
        paymentInfo.value = RESPONSE_MOCK.data as unknown as PaymentInfo;
    }
    else {
        const resp: Response = await fetch(`https://testTask.com/api/ui/payments/info/`, {
            method: "GET",
        });

        paymentInfo.value = await resp.json();
    }

    paymentVallet.value = paymentInfo.value!.default_currency;
    paymentMethod.value = paymentInfo.value!.currencies[paymentVallet.value][0];
    paymentSum.value = paymentMethod.value.min_amount;
};

const paymentVallets = computed(() => paymentInfo.value &&
    Object.keys(paymentInfo.value.currencies).filter(x => x !== "CRYPTO"));

const paymentMethods = computed(() => paymentVallet.value &&
    paymentInfo.value?.currencies[paymentVallet.value]);

const doPayment = () => {
    console.log(doPayment);
}

loadPaymentInfo();
</script>

<template>
    <div class="col-container w-[1160px] gap-[30px] mx-auto py-[40px]">
        <p class="text-[36px] leading-[42px]">
            <b>Пополните баланс, </b>
            <span class="opacity-60">чтобы получить номер для приема смс</span>
        </p>

        <PaymentValletSelect
            :vallets="paymentVallets || []"
            v-model="paymentVallet"
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

</style>
