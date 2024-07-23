<template>
    <div class="col-container gap-[15px]">
        <div class="row-container items-center gap-[10px]">
            <span class="subheader">Укажите сумму платежа</span>
        </div>

        <div class="col-container gap-[10px]">
            <input
                class="h-[51px] py-[16px] pr-[24px] pl-[20px] outline-none text-[16px] font-normal border-[1px] focus:border-[2px] border-solid border-[#e5e5e5] hover:border-[#b2b2b2] focus:border-transparent rounded-[12px] cursor-pointer ease-in hover:ease-out focus:ease-out duration-100 focus:border-[2px] focus:border-transparent border-box gradientborder"
                v-model="formattedValue"
                :placeholder="`Минимальная сумма платежа: ${minValue}${currencySymbol}`"
                @change="onChange"
            />

            <div class="row-container gap-[10px]">
                <div
                    v-for="item in sumItems"
                    :key="item.value"
                    class="row-container cursor-pointer items-center h-[32px] px-[12px] py-[8px] bg-[#f6f6f6] rounded-[10px] text-[#76797b] text-[14px] leading-[16px] hover:text-[#212529] ease-out duration-100 !border-[1px] border-[#f6f6f6]"
                    :class="{gradientborder: selectedSum === item.value, selected: selectedSum === item.value}"
                    @click="onSelectSum(item.value)"
                >
                    <span>{{ item.text }}{{ currencySymbol }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { CURRENCY_SYMBOLS } from '../consts';
const props = defineProps<{
    modelValue: number;
    minValue: number;
    currency: string;
}>();

const getCurrencySymbol = () => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: props.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  return formatter.format(0).replace(/\d/g, '').trim();
}

const currencySymbol = computed(() => CURRENCY_SYMBOLS[props.currency] || getCurrencySymbol());

const emit = defineEmits<{
    'update:modelValue': [value?: number];
}>();

const toCurrency = (value: number, curr: string, LanguageFormat = undefined) => 
    Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr, minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(value);

const setFormattedValue = (value: number) => {
    let curr = toCurrency(value, props.currency);
    if (value >= 1000) {
        curr = curr.replace(" ", ".");
    }
    formattedValue.value =  curr.replace(" ", "");
};

const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const numberValue = Number(target.value.replace(/\D/g, ''));
    setFormattedValue(numberValue);
    emit('update:modelValue', numberValue);
};

const sum = ref<number>(props.modelValue);
const formattedValue = ref<string>();
const selectedSum = ref<number>(0);

const sumItems = [{
    text: "1.000",
    value: 1000,
},
{
    text: "2.000",
    value: 2000,
},
{
    text: "5.000",
    value: 5000,
},
{
    text: "10.000",
    value: 10000,
},
{
    text: "20.000",
    value: 20000,
},
{
    text: "50.000",
    value: 50000,
}];

const onSelectSum = (value: number) => {
    setFormattedValue(value);
    selectedSum.value = selectedSum.value === value ? 0 : value;
    sum.value = value;
    emit('update:modelValue', value);
};

watch(() => props.currency, () => {
    setFormattedValue(props.modelValue);
}, { immediate: true });
</script>
  
<style scoped>
.selected{
    @apply text-[#212529];
}
</style>
