<template>
    <SelectItemBlock class="responsive-block h-[44px] md:h-[58px] justify-center" :isSelected="isSelected">
        <div class="row-container gap-[8px] md:gap-[12px] items-center">
            <Image
                class="h-[24px] w-[24px] md:h-[28px] md:w-[28px]"
                :fileName="valletName.toLowerCase()"
            />

            <span class="text-[12px] md:text-[14px] leading-[16px]">{{ valletName }}</span>
        </div>
    </SelectItemBlock>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import Image from '../common/Image.vue';
import SelectItemBlock from '../common/SelectItemBlock.vue';

defineProps<{
    valletName: string;
    isSelected: boolean;
}>();
</script>
  
<style scoped>
.responsive-block {
    @apply w-payment-currency-xs min-[485px]:w-payment-currency-s min-[636px]:w-payment-currency-m min-[768px]:w-payment-currency-l min-[867px]:w-payment-currency-xl min-[1040px]:w-payment-currency-2xl;
}
</style>
