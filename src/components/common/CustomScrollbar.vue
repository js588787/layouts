<template>
  <div class="scroll-container" ref="container">
    <div id="content" ref="content" @scroll="updateScrollbarPosition">
      <slot></slot>
    </div>
    <div
      v-if="isScrollVisible"
      class="scrollbar"
      ref="scrollbar"
    >
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue';

const container = ref({} as HTMLElement);
const content = ref({} as HTMLElement);
const scrollbar = ref({} as HTMLElement);
const isScrollVisible = ref(false);

const updateScrollbarPosition = () => {
  if (content.value && scrollbar.value) {
    const scrollPercentage = content.value.scrollTop / (content.value.firstElementChild!.clientHeight - container.value.clientHeight);
    scrollbar.value.style.top = `${((container.value.clientHeight - 130) * scrollPercentage)}px`;
  }
};

const observerOptions = { childList: true, subtree: true };

const observer = new MutationObserver(() => {
  isScrollVisible.value = content.value.firstElementChild!.clientHeight > content.value.clientHeight;
});

onMounted(() => {
  const targetNode = document.getElementById('content');
  isScrollVisible.value = content.value.firstElementChild!.clientHeight > content.value.clientHeight;

  if (targetNode !== null) {
    observer.observe(targetNode, observerOptions);
  } else {
    console.error('Target node is null');
  }
});

onUnmounted(() => {
  observer.disconnect();
});
</script>
  
<style scoped>
.scroll-container {
  @apply relative;
}

#content {
  @apply h-auto overflow-x-hidden overflow-y-scroll;
}

.scrollbar {
  @apply w-[4px] h-[100px] absolute top-0 right-[6px] md:right-[6px] rounded-[50px] my-[15px] bg-[#D8D8D8];
}
</style>