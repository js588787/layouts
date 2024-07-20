<template>
    <div class="row-container payment-method-item w-custom shadow-block">
        <Image :fileName="logoName"/>
        <div class="col-container gap-[3px]">
            <span class="text-[16px] leading-[16px]">{{ name }}</span>
            <p class="text-[13px] leading-[16px]"><span class="opacity-60">Комиссия: </span><span>{{ comission }}%</span></p>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import Image from './Image.vue';

defineProps<{
    logoName: String;
    name: String;
    comission: Number;
}>();
</script>
  
<style scoped>
.payment-method-item {
    @apply items-center h-[68px] m-[8px] gap-[12px] rounded-[12px] py-[15px] pl-[20px] pr-[24px];
}
</style>
