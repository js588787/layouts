<script setup lang="ts">
import PaymentCurrencySelect from './PaymentCurrency/PaymentCurrencySelect.vue';
import PaymentMethodSelect from './PaymentMethod/PaymentMethodSelect.vue';
import PaymentSumInput from './PaymentAmount/PaymentSumInput.vue';
import { computed, ref, watch } from 'vue';
import { PaymentInfo } from '../types/PaymentInfo';
import { RESPONSE_MOCK } from '../consts';
import { PaymentMethod } from '../types/PaymentMethod';
import Button from './common/Button.vue';

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
    catch (e: any) {
        errorMessage.value = e.toString();
    }
};

watch(() => paymentVallet.value, (value: string) => {
    paymentMethod.value = paymentInfo.value?.currencies[value]?.[0] as PaymentMethod;
    paymentSum.value = paymentMethod.value?.min_amount;
}, { immediate: true });

loadPaymentInfo();
</script>

<template>
    <div class="col-container w-full items-center px-[15px]">
        <div class="col-container w-full max-w-[1160px] gap-[15px] md:gap-[30px] py-[25px] md:pt-[40px] pb-[25px] md:pb-[10px]">
            <p class="text-[18px] leading-[19.8px] md:text-[36px] md:leading-[42px]">
                <b>Пополните баланс, </b>
                <span class="text-[#7a7c7f]">чтобы получить номер для приема смс</span>
            </p>

            <PaymentCurrencySelect
                :vallets="paymentVallets || []"
                v-model="paymentVallet"
                :defaultValue="paymentInfo?.default_currency"
            />

            <PaymentCurrencySelect
                :vallets="paymentVallets || []"
                v-model="paymentVallet"
                :defaultValue="paymentInfo?.default_currency"
            />

            <PaymentMethodSelect
                :methods="paymentMethods || []"
                :minAmount="paymentMethod?.min_amount"
                :currency="paymentVallet"
                v-model="paymentMethod"
            />

            <PaymentSumInput
                v-model="paymentSum"
                :min-value="paymentMethod?.min_amount"
                :currency="paymentVallet"
            />

            <Button
                text="Оплатить"
                @click="doPayment"
            />
                
            <span
                v-if="errorMessage"
                class="text-[14px] text-[#E86068]"
            >
                {{ errorMessage }}
            </span>

            <div class="row-container">
                <span class="text-[12px] leading-[16px] md:text-[14px] md:leading-[20px] font-normal block md:hidden">{{ paymentMethod?.description }}</span>
            </div>
        </div>
    </div>
</template>
