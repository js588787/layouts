<template>
    <div class="col-container gap-[12px] md:gap-[24px]">
        <div class="col-container gap-[15px]">
            <div class="row-container items-center gap-[10px]">
                <span class="subheader">Выберите валюту оплаты</span>

                <InfoIcon
                    class="hidden md:block"
                    type="info"
                    tooltipText="Тут выбирается способ которым вы будете оплачивать"
                    :width="247"
                />
            </div>

            <div class="row-container items-center gap-[8px] md:gap-[16px] flex-wrap">
                <PaymentCurrencySelectItem
                    class="min-w-[160px] py-[12px] pr-[18px] pl-[16px] md:py-[15px] md:pr-[24px] md:pl-[20px]"
                    imageName="crypto"
                    text="Криптовалюты"
                    tagText="Рекомендуем"
                    @click="onSelectCrypto()"
                />

                <PaymentCurrencySelectItem
                    class="min-w-[275px] px-[2px] py-[4px] md:px-[4px] md:py-[8px]"
                    :class="{ opened: isExchangeValletsShowed }"
                    imageName="exchange"
                    text="Другие валюты"
                    hasDropdown
                    @click="onShowExchangeVallets"
                >
                    <template #before>
                        <div class="row-container justify-center items-center gap-[12px] h-[40px] w-[91px] md:h-[52px] md:w-[107px] mr-[8px] md:mr-[12px] border-r-[1px] border-solid border-black/10">
                            <Image
                                class="h-[24px] w-[24px] md:h-[28px] md:w-[28px]"
                                :fileName="selectedValue?.toLowerCase()"
                            />

                            <span class="text-[14px] md:text-[16px] leading-[16px]">{{ selectedValue }}</span>
                        </div>
                    </template>
                </PaymentCurrencySelectItem>
            </div>
        </div>

        <div
            v-show="isExchangeValletsShowed"
            ref="cryptoVallets"
            class="row-container flex-wrap gap-[8px] md:gap-[16px] -mr-[8px] md:-mr-[16px]"
        >
            <PaymentCurrencyItem
                v-for="vallet in vallets"
                :key="vallet"
                :isSelected="vallet === modelValue"
                :valletName="vallet"
                @click="onSelectVallet(vallet)"
            />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { computed, ref } from 'vue';
import PaymentCurrencySelectItem from './PaymentCurrencySelectItem.vue';
import PaymentCurrencyItem from './PaymentCurrencyItem.vue';
import Image from '../common/Image.vue';
import InfoIcon from '../common/InfoIcon.vue';

const props = defineProps<{
    vallets: string[];
    modelValue?: string;
    defaultValue?: string;
}>();

const emit = defineEmits<{
    'update:modelValue': [value?: string];
}>();

const isExchangeValletsShowed = ref<boolean>(false);

const onShowExchangeVallets = () => {
    isExchangeValletsShowed.value = !isExchangeValletsShowed.value;
    if (props.modelValue === 'CRYPTO'){
        emit('update:modelValue', props.defaultValue);
    }
};

const onSelectCrypto = () => {
    isExchangeValletsShowed.value = false;
    emit('update:modelValue', 'CRYPTO');
};

const onSelectVallet = (value: string) => {
    emit('update:modelValue', value);
};

const selectedValue = computed(() => props.modelValue === 'CRYPTO' ? props.defaultValue : props.modelValue);
</script>
