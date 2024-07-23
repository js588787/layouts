<template>
    <SelectItemBlock class="payment-method-item md:w-payment-method-l w-payment-method-m md:px-[20px] md:py-[14px] md:gap-[12px] border-[2px] border-white px-[12px] py-[10px] gap-[6px]" :isSelected="isSelected">
        <Image :fileName="item.code"/>

        <div class="col-container gap-[3px]">
            <span class="md:text-[16px] text-[13px] md:leading-[16px] leading-[15px]">{{ item.title }}</span>

            <p class="md:text-[13px] text-[11px] leading-[16px]">
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

</style>
