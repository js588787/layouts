<template>
    <div class="row-container payment-vallet-item shadow-block">
      <Image :fileName="logoName"/>
      <span class="text-[14px]">{{ name }}</span>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import Image from './Image.vue';

defineProps<{
    logoName: String;
    name: String;
}>();
</script>
  
<style scoped>
.payment-vallet-item {
    @apply items-center gap-[10px] h-[68px] w-[179px] rounded-[12px] py-[15px] pl-[20px] pr-[24px];
}
</style>
