<template>
    <SelectItemBlock>
        <div class="row-container gap-[10px]">
            <slot name="before"></slot>

            <div class="row-container gap-[10px] items-center">
                <Image :fileName="imageName"/>
                <span class="text-[14px]">{{ text }}</span>
            </div>

            <slot name="after"></slot>
        </div>

        <div
            v-if="tagText"
            class="row-container absolute top-[3px] right-[3px] items-center h-[16px] px-[6px] py-[2px] rounded-full text-[10px] leading-[12px] font-normal text-white bg-gradient-to-l from-[#E2C299] to-[#C5A67C]"
        >
            {{ tagText }}
        </div>
    </SelectItemBlock>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import Image from './Image.vue';
import SelectItemBlock from './SelectItemBlock.vue';

defineProps<{
    imageName: string;
    text: string;
    tagText?: string;
}>();
</script>
  
<style scoped>

</style>
