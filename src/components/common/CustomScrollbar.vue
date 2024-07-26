<template>
  <div class="scroll-container" ref="container">
    <div class="content overflow-y-scroll" ref="content" @scroll="updateScrollbarPosition">
      <slot></slot>
    </div>
    <div class="scrollbar" ref="scrollbar"></div>
  </div>
</template>
  
<script setup ts>
import { ref } from 'vue';

const container = ref(null);
const content = ref(null);
const scrollbar = ref(null);

const updateScrollbarPosition = () => {
    if (content.value && scrollbar.value) {
      const scrollPercentage = content.value.scrollTop / (content.value.firstElementChild.clientHeight - container.value.clientHeight);
      scrollbar.value.style.top = `${((container.value.clientHeight - 130) * scrollPercentage)}px`;
    }
  };




// document.addEventListener("DOMContentLoaded", function() {
//   let isDragging = false;

//   scrollbar?.addEventListener('mousedown', function(e) {
//     isDragging = true;
//     let startY = e.pageY;
//     let scrollY = content.scrollTop;

//     const mouseMoveHandler = function(e) {
//       if (!isDragging) return;
//       const deltaY = e.pageY - startY;
//       const scrollHeight = container.offsetHeight * (scrollbar.offsetHeight / 100);
//       const maxScrollTop = content.scrollHeight - container.offsetHeight;
//       const newScrollTop = scrollY + deltaY * (maxScrollTop / (container.offsetHeight - scrollHeight));
      
//       content.scrollTop = Math.min(Math.max(newScrollTop, 0), maxScrollTop);
//       startY = e.pageY;
//     };

//     const mouseUpHandler = function() {
//       isDragging = false;
//       document.removeEventListener('mousemove', mouseMoveHandler);
//       document.removeEventListener('mouseup', mouseUpHandler);
//     };

//     document.addEventListener('mousemove', mouseMoveHandler);
//     document.addEventListener('mouseup', mouseUpHandler);
//   });
// });
</script>
  
<style scoped>
.scroll-container {
  position: relative;
}

.content {
  height: auto;
}

.scrollbar {
  @apply right-[6px] md:-right-[4px];
  position: absolute;
  top: 0;
  width: 4px;
  height: 100px;
  border-radius: 50px;
  background-color: #D8D8D8;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>