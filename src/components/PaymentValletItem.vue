<template>
    <SelectItemBlock class="w-[111px] justify-center" :isSelected="isSelected">
        <div class="row-container gap-[10px] items-center">
            <Image :fileName="valletName.toLowerCase()"/>
            <span class="text-[16px]">{{ valletName }}</span>
        </div>
    </SelectItemBlock>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import Image from './Image.vue';
import SelectItemBlock from './SelectItemBlock.vue';

defineProps<{
    valletName: string;
    isSelected: boolean;
}>();
</script>
  
<style scoped>

</style>
