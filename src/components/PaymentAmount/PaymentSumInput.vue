<template>
    <div class="col-container gap-[10px] md:gap-[15px]">
        <span class="subheader">Укажите сумму платежа</span>

        <div class="col-container gap-[10px]">
            <div class="col-container gap-[3px] relative">
                <input
                    class="gradientborder"
                    :class="{ error: hasError }"
                    v-model="formattedValue"
                    :placeholder="`Минимальная сумма платежа: ${formatCurrency(minValue)}`"
                    @focusin="onClearFormat"
                    @focusout="onChange"
                    @change="onChange"
                />

                <Image
                    v-if="modelValue"
                    class="h-[16px] w-[16px] absolute top-[14px] md:top-[16px] right-[18px] md:right-[22px] cursor-pointer"
                    fileName="remove"
                    @click="onClearValue"
                />

                <span
                    class="text-[12px] leading-[14px] md:text-[14px] md:leading-[16px] text-[#E86068] font-normal"
                    v-if="hasError"
                >
                    Внимание, минимальная сумма {{ formatCurrency(minValue) }}
                </span>
            </div>

            <div class="row-container w-full gap-[8px] md:gap-[10px] overflow-scroll">
                <div
                    v-for="item in sumItems"
                    :key="item"
                    class="row-container cursor-pointer items-center h-[32px] px-[12px] py-[8px] bg-[#f6f6f6] rounded-[8px] md:rounded-[10px] text-[#76797b] text-[14px] leading-[16px] hover:text-[#212529] ease-out duration-100 !border-[1px] border-[#f6f6f6]"
                    :class="{ gradientborder: modelValue === item, selected: modelValue === item }"
                    @click="onSelectSum(item)"
                >
                    <span>{{ formatCurrency(item) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, watch } from 'vue';
import { toCurrency } from '../../utils';
import Image from '../common/Image.vue';

const props = defineProps<{
    modelValue?: number;
    minValue: number;
    currency: string;
}>();

const emit = defineEmits<{
    'update:modelValue': [value?: number];
}>();

const sum = ref<number | undefined>(props.modelValue);
const formattedValue = ref<string>();
const selectedSum = ref<number>(0);
const hasError = ref<boolean>(false);

const formatCurrency = (value?: number) => {
    let curr = toCurrency(value, props.currency === "CRYPTO" ? "RUB" : props.currency);
    if (value && (value >= 1000)) {
        curr = curr?.replace(" ", ".");
    }
    return curr?.replace(" ", "");
}

const setFormattedValue = (value?: number) => {
    formattedValue.value = formatCurrency(value);
};

const getNumberValue = (value?: string) => {
    return Number(value?.replace(/\D/g, '')) || props.minValue;
};

const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const numberValue = getNumberValue(target.value);
    setFormattedValue(numberValue);
    hasError.value = numberValue < props.minValue;

    emit('update:modelValue', numberValue);
};

const onClearFormat = (e: Event) => {
    const target = e.target as HTMLInputElement;
    formattedValue.value = getNumberValue(target.value).toString();
};

const sumItems = [ 1000, 2000, 5000, 10000, 20000, 50000 ];

const onSelectSum = (value: number) => {
    setFormattedValue(value);
    selectedSum.value = selectedSum.value === value ? 0 : value;
    sum.value = value;
    hasError.value = false;
    emit('update:modelValue', value);
};

const onClearValue = () => {
    setFormattedValue(undefined);
    emit('update:modelValue', undefined);
};

watch(() => props.modelValue, () => {
    setFormattedValue(props.modelValue);
}, { immediate: true });

watch(() => props.currency, () => {
    setFormattedValue(props.modelValue);
}, { immediate: true });
</script>
  
<style scoped>
input {
    @apply h-[48px] md:h-[51px] py-[16px] pr-[24px] pl-[16px] md:pr-[20px] md:pl-[20px] outline-none cursor-pointer ease-in duration-100;
    @apply text-[14px] leading-[16px] md:text-[16px] md:leading-[19px] placeholder:text-[#7a7c7f] placeholder:font-normal placeholder:hover:text-[#212529];
    @apply border-[1px] border-solid border-[#e5e5e5] rounded-[12px];
    @apply hover:border-[#b2b2b2] hover:ease-out;
    @apply focus:border-[2px] focus:border-transparent focus:ease-out focus:border-[2px] focus:border-transparent;
}

input.error {
    @apply border-[2px] border-[#E86068];
}

.selected {
    @apply text-[#212529];
}
</style>
