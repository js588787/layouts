<template>
    <div class="col-container gap-[15px]">
        <div class="row-container items-center gap-[10px]">
            <span class="subheader">Укажите сумму платежа</span>
        </div>

        <div class="col-container gap-[10px]">
            <div class="col-container gap-[3px]">
                <input
                    class="gradientborder"
                    :class="{ error: hasError }"
                    v-model="formattedValue"
                    :placeholder="`Минимальная сумма платежа: ${formatCurrency(minValue)}`"
                    @change="onChange"
                />

                <span
                    class="text-[14px] text-[#E86068] font-normal"
                    v-if="hasError"
                >
                    Внимание, минимальная сумма {{ formatCurrency(minValue) }}
                </span>
            </div>

            <div class="row-container gap-[10px]">
                <div
                    v-for="item in sumItems"
                    :key="item"
                    class="row-container cursor-pointer items-center h-[32px] px-[12px] py-[8px] bg-[#f6f6f6] rounded-[10px] text-[#76797b] text-[14px] leading-[16px] hover:text-[#212529] ease-out duration-100 !border-[1px] border-[#f6f6f6]"
                    :class="{ gradientborder: selectedSum === item, selected: selectedSum === item }"
                    @click="onSelectSum(item)"
                >
                    <span>{{ formatCurrency(item) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { computed, ref, watch } from 'vue';
const props = defineProps<{
    modelValue: number;
    minValue: number;
    currency: string;
}>();

const emit = defineEmits<{
    'update:modelValue': [value?: number];
}>();

const sum = ref<number>(props.modelValue);
const formattedValue = ref<string>();
const selectedSum = ref<number>(0);
const hasError = ref<boolean>(false);

const toCurrency = (value: number, curr: string, LanguageFormat = undefined) => 
    Intl.NumberFormat(LanguageFormat, {
        style: 'currency',
        currency: curr,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(value);

const formatCurrency = (value: number) => {
    let curr = toCurrency(value, props.currency === "CRYPTO" ? "RUB" : props.currency);
    if (value >= 1000) {
        curr = curr.replace(" ", ".");
    }
    return curr.replace(" ", "");
}

const setFormattedValue = (value: number) => {
    formattedValue.value = formatCurrency(value);
};

const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const numberValue = Number(target.value.replace(/\D/g, '')) || props.minValue;
    setFormattedValue(numberValue);
    hasError.value = numberValue < props.minValue;

    emit('update:modelValue', numberValue);
};

const sumItems = [ 1000, 2000, 5000, 10000, 20000, 50000 ];

const onSelectSum = (value: number) => {
    setFormattedValue(value);
    selectedSum.value = selectedSum.value === value ? 0 : value;
    sum.value = value;
    hasError.value = false;
    emit('update:modelValue', value);
};

watch(() => props.currency, () => {
    setFormattedValue(props.modelValue);
}, { immediate: true });
</script>
  
<style scoped>
input {
    @apply h-[51px] py-[16px] pr-[24px] pl-[20px] outline-none cursor-pointer ease-in duration-100;
    @apply text-[16px] font-normal;
    @apply border-[1px] border-solid border-[#e5e5e5] rounded-[12px];
    @apply hover:border-[#b2b2b2] hover:ease-out;
    @apply focus:border-[2px] focus:border-transparent focus:ease-out focus:py-[14px] focus:pr-[22px] focus:border-[2px] focus:border-transparent;
}

input.error {
    @apply border-[2px] border-[#E86068];
}

.selected {
    @apply text-[#212529];
}
</style>
