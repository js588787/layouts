<template>
    <div class="relative"
        :class="{ tooltip: tooltipIsVisible }"
        @mouseenter="tooltipIsVisible = true"
        @mouseleave="tooltipIsVisible = false"
    >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 13C10.0899 13 13 10.0899 13 6.5C13 2.91015 10.0899 0 6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13ZM4.05 4.66003C4.05 3.32586 5.12572 2.25 6.45997 2.25C7.79422 2.25 8.86995 3.32586 8.86995 4.66003C8.86995 5.71293 8.17772 6.26861 7.72466 6.57822C7.53024 6.71256 7.40493 6.81821 7.32376 6.92708C7.25632 7.01753 7.20997 7.12213 7.20997 7.29004V7.5C7.20997 7.91421 6.87419 8.25 6.45997 8.25C6.04576 8.25 5.70997 7.91421 5.70997 7.5V7.29004C5.70997 6.21317 6.41865 5.65716 6.87386 5.34285L6.87702 5.34066L6.87703 5.34067C7.0622 5.21421 7.18336 5.11098 7.2611 5.00604C7.3262 4.91818 7.36995 4.81776 7.36995 4.66003C7.36995 4.15421 6.96572 3.75 6.45997 3.75C5.95422 3.75 5.55 4.15421 5.55 4.66003C5.55 5.07425 5.21421 5.41003 4.8 5.41003C4.38579 5.41003 4.05 5.07425 4.05 4.66003ZM6.45546 9.14062C6.04125 9.14062 5.70546 9.47641 5.70546 9.89062C5.70546 10.3048 6.04125 10.6406 6.45546 10.6406H6.46446C6.87867 10.6406 7.21446 10.3048 7.21446 9.89062C7.21446 9.47641 6.87867 9.14062 6.46446 9.14062H6.45546Z"/>
        </svg>
        <div v-if="tooltipText" class="tooltip-content">{{ tooltipText }}</div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps, ref } from 'vue';

const props = defineProps<{
    tooltipText?: string
}>();
  
  const tooltipIsVisible = ref<boolean>(false);
  </script>

<style scoped>
.tooltip-content{
    @apply h-[0px] w-[247px] mt-0 px-[12px] py-[8px] absolute z-10 invisible opacity-0 bg-white text-[14px] rounded-[10px] ease-in duration-100;
    @apply shadow-[0_0px_15px_-0px_rgba(0,0,0,0.06)];
}

.tooltip .tooltip-content {
    @apply h-[56px] mt-[16px] visible opacity-100 ease-out duration-100;
}

svg{
    @apply fill-[#CACACA] ease-in duration-100;
}

svg:hover{
    @apply fill-[#212529] ease-out duration-100;
}
</style>