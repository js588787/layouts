<template>
    <div class="row-container items-center select-block gradientborder" :class="{ selected: isSelected }">
            <slot></slot>
        </div>
</template>

<script setup lang="ts">
defineProps<{
    isSelected?: boolean;
}>();
</script>
  
<style scoped>
.select-block {
    @apply items-center relative md:h-[68px] h-[51px] rounded-[12px] cursor-pointer;
    @apply shadow-[0_0px_15px_-0px_rgba(0,0,0,0.06)];
}
</style>
