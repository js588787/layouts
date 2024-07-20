<template>
    <div class="col-container gap-[15px]">
        <div class="row-container items-center gap-[10px]">
            <span class="subheader">Выберите способ оплаты</span>
        </div>

        <div class="row-container flex-wrap h-[214px] overflow-y-scroll">
            <PaymentMethodItem v-for="item in items" :key="item.name" v-bind="item"/>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import PaymentMethodItem from './PaymentMethodItem.vue';

//const method = defineModel();

const items = [{
        logoName: 'visa-mastercard',
        name: 'Картой РФ',
        comission: 8,
    },
    {
        logoName: 'mir',
        name: 'Картой МИР',
        comission: 8,
    },
    {
        logoName: 'sbp',
        name: 'СБП',
        comission: 8,
    },
    {
        logoName: 'payeer',
        name: 'Payeer',
        comission: 8,
    },
    {
        logoName: 'steampay',
        name: 'SteamPay',
        comission: 8,
    },
    {
        logoName: 'megafon',
        name: 'Мегафон',
        comission: 8,
    },
    {
        logoName: 'beeline',
        name: 'Билайн',
        comission: 8,
    },
    {
        logoName: 'tele2',
        name: 'Теле2',
        comission: 8,
    },
    {
        logoName: 'paypal',
        name: 'PayPal',
        comission: 8,
    },
    {
        logoName: 'stripe',
        name: 'Stripe',
        comission: 8,
    },
    {
        logoName: 'fkwallet',
        name: 'FKWallet',
        comission: 8,
    },
    {
        logoName: 'lava',
        name: 'Lava',
        comission: 8,
    },
    {
        logoName: 'volet',
        name: 'Volet',
        comission: 8,
    },
    {
        logoName: 'perfectmoney',
        name: 'PerfectMoney',
        comission: 8,
    },
    {
        logoName: 'card',
        name: 'Другой',
        comission: 8,
    },
];
</script>
  
<style scoped>

</style>
