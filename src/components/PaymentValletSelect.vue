<template>
    <div class="col-container gap-[15px]">
        <div class="row-container items-center gap-[10px]">
            <span class="subheader">Выберите валюту оплаты</span>
            <Image fileName="info"/>
        </div>

        <div class="row-container items-center gap-[24px]">
            <PaymentValletItem v-for="item in items" :key="item.name" v-bind="item"/>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import Image from './Image.vue';
import PaymentValletItem from './PaymentValletItem.vue';

//const vallet = defineModel();

const items = [{
        logoName: 'btc',
        name: 'Криптовалюты'
    },
    {
        logoName: 'exchange',
        name: 'Другие валюты'
    },
];
</script>
  
<style scoped>

</style>
