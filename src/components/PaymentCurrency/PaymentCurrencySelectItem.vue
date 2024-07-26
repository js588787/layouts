<template>
    <SelectItemBlock class="h-[48px] md:h-[68px]">
        <div class="row-container gap-[10px]">
            <slot name="before"></slot>

            <div class="row-container gap-[8px] md:gap-[10px] items-center">
                <Image :fileName="imageName"/>

                <span class="text-[13px] leading-[16px] md:text-[14px] md:leading-[16px]">{{ text }}</span>
                
                <div
                    v-if="hasDropdown"
                    class="row-container items-center mr-[12px] md:mr-[16px]"
                >
                    <Image
                        class="chevron h-[14px] w-[14px] md:h-[16px] md:w-[16px]"
                        fileName="arrow"
                    />
                </div>
            </div>
        </div>

        <div
            v-if="tagText"
            class="tag row-container"
        >
            {{ tagText }}
        </div>
    </SelectItemBlock>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import Image from '../common/Image.vue';
import SelectItemBlock from '../common/SelectItemBlock.vue';

defineProps<{
    imageName: string;
    text: string;
    tagText?: string;
    hasDropdown?: boolean;
    isOpened?: boolean;
}>();
</script>
  
<style scoped>
.tag {
    @apply items-center h-[14.5px] absolute top-[2px] right-[2px] pt-[1.5px] pr-[4px] pb-[2px] pl-[5px] rounded-full;
    @apply md:h-[16px] md:top-[3px] md:right-[3px] md:px-[6px] md:py-[2px];
    @apply text-[9px] leading-[11px] md:text-[10px] md:leading-[12px] font-normal text-white;
    @apply bg-gradient-to-l from-[#E2C299] to-[#C5A67C];
}

.opened .chevron {
    @apply rotate-180;
}
</style>
