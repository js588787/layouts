<template>
    <div class="col-container gap-[24px]">
        <div class="col-container gap-[15px]">
            <div class="row-container items-center gap-[10px]">
                <span class="subheader">Выберите валюту оплаты</span>

                <InfoIcon tooltipText="Тут выбирается способ которым вы будете оплачивать"/>
            </div>

            <div class="row-container items-center gap-[16px]">
                <PaymentValletSelectItem
                    class="py-[15px] pr-[24px] pl-[20px]"
                    imageName="crypto"
                    text="Криптовалюты"
                    tagText="Рекомендуем"
                    @click="onSelectCrypto()"
                />

                <PaymentValletSelectItem
                    imageName="exchange"
                    text="Другие валюты"
                    @click="onShowExchangeVallets"
                >
                    <template #before>
                        <div class="row-container justify-center items-center gap-[12px] h-[52px] w-[107px] mr-[12px] border-r-[1px] border-solid border-black/10">
                            <Image :fileName="selectedValue.toLowerCase()"/>

                            <span class="text-[16px]">{{ selectedValue }}</span>
                        </div>
                    </template>

                    <template #after>
                        <div class="row-container items-center mr-[20px]">
                            <Image class="chevron" :class="{ opened: isOpened }" fileName="arrow-l" />
                        </div>
                    </template>
                </PaymentValletSelectItem>
            </div>
        </div>

        <div
            v-show="isExchangeValletsShowed"
            ref="cryptoVallets"
            class="row-container flex-wrap gap-[16px] -mr-[16px]"
        >
            <PaymentValletItem
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
import PaymentValletSelectItem from './PaymentValletSelectItem.vue';
import PaymentValletItem from './PaymentValletItem.vue';
import Image from './Image.vue';
import InfoIcon from './InfoIcon.vue';

const props = defineProps<{
    vallets: string[];
    modelValue?: string;
    defaultValue?: string;
}>();

const emit = defineEmits<{
    'update:modelValue': [value?: string];
}>();

const isOpened = computed(() => isExchangeValletsShowed.value);

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
  
<style scoped>

</style>
