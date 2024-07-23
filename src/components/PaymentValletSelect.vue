<template>
    <div class="col-container gap-[24px]">
        <div class="col-container gap-[15px]">
            <div class="row-container items-center gap-[10px]">
                <span class="subheader">Выберите валюту оплаты</span>

                <Image fileName="info" tooltipText="Тут выбирается способ которым вы будете оплачивать"/>
            </div>

            <div class="row-container items-center gap-[16px]">
                <PaymentValletSelectItem
                    class="py-[15px] pr-[24px] pl-[20px]"
                    imageName="crypto"
                    text="Криптовалюты"
                    tagText="Рекомендуем"
                    @click="onSelectVallet('CRYPTO')"
                />

                <PaymentValletSelectItem
                    imageName="exchange"
                    text="Другие валюты"
                    @click="onShowExchangeVallets"
                >
                    <template #before>
                        <div class="row-container justify-center items-center gap-[12px] h-[52px] w-[107px] mr-[12px] border-r-[1px] border-solid border-black/10">
                            <Image :fileName="modelValue?.toLowerCase()"/>

                            <span class="text-[16px]">{{ modelValue }}</span>
                        </div>
                    </template>

                    <template #after>
                        <div class="row-container items-center mr-[20px]" :class="{ opened: isOpened }">
                            <Image fileName="arrow-l"/>
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

defineProps<{
    vallets: string[];
    modelValue?: string;
}>();

const emit = defineEmits<{
    'update:modelValue': [value?: string];
}>();

const isOpened = computed(() => isExchangeValletsShowed.value);

const isExchangeValletsShowed = ref<boolean>(false);

const onShowExchangeVallets = () => {
    isExchangeValletsShowed.value = !isExchangeValletsShowed.value;
};

const onSelectVallet = (value: string) => {
    emit('update:modelValue', value);
};
</script>
  
<style scoped>
.opened{
    @apply rotate-180;
}
</style>
