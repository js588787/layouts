<template>
    <div class="relative"
        :class="{ tooltip: tooltipIsVisible }"
        @mouseenter="tooltipIsVisible = true"
        @mouseleave="tooltipIsVisible = false"
    >
      <component :is="SvgImage" class="icon-hover" />
      <div v-if="tooltipText" class="tooltip-content">{{ tooltipText }}</div>
    </div>
</template>
  
<script setup lang="ts">
import { defineAsyncComponent, defineProps, ref } from 'vue';

const props = defineProps<{
    fileName?: string;
    tooltipText?: string;
}>();

const SvgImage = defineAsyncComponent(() =>
  import(`../assets/images/${props.fileName}.svg`)
);

const tooltipIsVisible = ref<boolean>(false);
</script>
  
<style scoped>
.tooltip-content{
    @apply h-[0px] w-[247px] mt-0 px-[12px] py-[8px] absolute z-10 invisible opacity-0 bg-white text-[14px] rounded-[10px] ease-in duration-100;
    @apply shadow-[0_0px_15px_-0px_rgba(0,0,0,0.06)];
}

.tooltip img 

.tooltip .tooltip-content {
    @apply h-[56px] mt-[16px] visible opacity-100 ease-out duration-100;
}
</style>