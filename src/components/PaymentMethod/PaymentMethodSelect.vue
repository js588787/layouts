<template>
    <div class="col-container gap-[15px]">
        <div class="row-container items-center gap-[10px]">
            <span class="subheader">Выберите способ оплаты</span>
        </div>

        <CustomScrollbar class="max-h-[209px] md:max-h-[214px] -mx-[15px] -mt-[15px] col-container">
            <div class="row-container flex-wrap gap-[8px] md:gap-[16px] -mr-[8px] md:-mr-[16px] px-[15px] py-[15px]">
                <PaymentMethodItem
                    v-for="item in methods"
                    :key="item.code"
                    :item="item"
                    :isSelected="modelValue?.code === item.code"
                    @click="onSelectMethod(item)"
                />
            </div>
        </CustomScrollbar>

        <div class="col-container gap-[10px]">
            <div class="row-container items-center gap-[10px] cursor-pointer" @click="onToggleDescription">
                <Image fileName="attension"/>

                <span class="text-[12px] leading-[14px] md:text-[14px] md:leading-[16px]">Внимание, при нажатии раскрывается информация про страны</span>
                
                <Image class="chevron w-[14px] h-[14px]" :class="{ opened: isDescriptionVisible }" fileName="arrow"/>
            </div>

            <div class="row-container" v-if="isDescriptionVisible">
                <span class="text-[12px] leading-[16px] md:text-[14px] md:leading-[20px] font-normal">{{ method?.description }}</span>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { PaymentMethod } from '../../types/PaymentMethod';
import PaymentMethodItem from './PaymentMethodItem.vue';
import Image from '../common/Image.vue';
import CustomScrollbar from '../common/CustomScrollbar.vue';

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
