<template>
    <SelectItemBlock class="w-payment-method justify-center" :isSelected="isSelected">
        <Image :fileName="item.code"/>
        <div class="col-container gap-[3px]">
            <span class="text-[16px] leading-[16px]">{{ item.title }}</span>
            <p class="text-[13px] leading-[16px]">
                <span class="opacity-60">
                    Комиссия: </span><span>{{ item.commission }}
                </span>
            </p>
        </div>
    </SelectItemBlock>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import { PaymentMethod } from '../types/PaymentMethod';
import Image from './Image.vue';
import SelectItemBlock from './SelectItemBlock.vue';

defineProps<{
    item: PaymentMethod;
    isSelected: boolean;
}>();
</script>
  
<style scoped>
.payment-method-item {
    @apply items-center h-[68px] m-[8px] gap-[12px] rounded-[12px] py-[15px] pl-[20px] pr-[24px];
}
</style>
