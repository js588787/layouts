<template>
    <div class="col-container gap-[15px]">
        <div class="row-container items-center gap-[10px]">
            <span class="subheader">Выберите способ оплаты</span>
        </div>

        <div class="row-container flex-wrap max-h-[214px] md:gap-[16px] gap-[8px] -mr-[16px] py-[10px] -my-[10px] overflow-y-scroll custom-scroll">
            <PaymentMethodItem
                v-for="item in methods"
                :key="item.code"
                :item="item"
                :isSelected="modelValue.code === item.code"
                @click="onSelectMethod(item)"
            />
        </div>

        <div class="col-container gap-[10px]">
            <div class="row-container items-center gap-[10px] cursor-pointer" @click="onToggleDescription">
                <Image fileName="attension"/>
                <span class="text-[14px]">Внимание, при нажатии раскрывается информация про страны</span>
                <Image class="chevron" :class="{ opened: isDescriptionVisible }" fileName="arrow-m"/>
            </div>

            <div class="row-container" v-if="isDescriptionVisible">
                <span class="text-[14px] font-normal">{{ method.description }}</span>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { PaymentMethod } from '../types/PaymentMethod';
import PaymentMethodItem from './PaymentMethodItem.vue';
import Image from './Image.vue';

const props = defineProps<{
    methods: PaymentMethod[];
    modelValue: PaymentMethod;
}>();

const emit = defineEmits<{
    'update:modelValue': [value?: PaymentMethod];
}>();

const method = ref<PaymentMethod>(props.modelValue);

const onSelectMethod = (value: PaymentMethod) => {
    method.value = value;
    emit('update:modelValue', value);
};

const isDescriptionVisible = ref<boolean>();

const onToggleDescription = () => {
    isDescriptionVisible.value = !isDescriptionVisible.value;
};
</script>
  
<style scoped>

</style>
