<template>
    <button>{{ text }}</button>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
    text: string;
}>();
</script>
  
<style scoped>
button {
    @apply h-[49px] md:h-[63px] rounded-[12px] px-[20px] py-[14px] md:p-[20px] cursor-pointer ease-out duration-100;
    @apply text-[18px] md:text-[20px] leading-[21px] text-white;
    @apply bg-gradient-to-l from-[#E2C299] to-[#C5A67C];
    @apply hover:from-[#E2C299] hover:to-[#D1B896];
}
</style>