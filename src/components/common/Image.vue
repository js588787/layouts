<template>
    <img :src="getImagePath()"/>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    fileName?: string;
}>();

const getImagePath = (): string => {
    return new URL(`../../assets/images/${props.fileName}.svg`, import.meta.url).href;
};
</script>