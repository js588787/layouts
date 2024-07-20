<template>
    <div>
      <img :src="getImagePath()" alt="Icon" />
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    fileName: String;
}>();

const getImagePath = (): string => {
    return new URL(`../assets/images/${props.fileName}.svg`, import.meta.url).href;
}
</script>
  
<style scoped>

</style>