<template>
    <SelectItemBlock class="payment-method-item responsive-block h-[51px] md:h-[68px] px-[12px] py-[10px] md:px-[20px] md:py-[14px] gap-[6px] md:gap-[12px] border-[2px] border-white" :isSelected="isSelected">
        <Image class="w-[36px] md:w-[48px]" :fileName="item.code"/>

        <div class="col-container gap-[2px] md:gap-[3px]">
            <span class="text-[13px] leading-[15px] md:text-[16px] md:leading-[16px]">{{ item.title }}</span>

            <p class="text-[11px] leading-[13px] md:text-[13px] md:leading-[15px]">
                <span class="font-normal opacity-60">
                    Комиссия: 
                </span>
                
                <span>
                    {{ item.commission }}
                </span>
            </p>
        </div>
    </SelectItemBlock>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import { PaymentMethod } from '../types/PaymentMethod';
import Image from '../common/Image.vue';
import SelectItemBlock from '../common/SelectItemBlock.vue';

defineProps<{
    item: PaymentMethod;
    isSelected: boolean;
}>();
</script>
  
<style scoped>
.responsive-block {
    @apply w-payment-method-xs min-[485px]:w-payment-method-s min-[636px]:w-payment-method-m min-[768px]:w-payment-method-l min-[867px]:w-payment-method-xl min-[1040px]:w-payment-method-2xl;
}
</style>
