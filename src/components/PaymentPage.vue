<script setup lang="ts">
import PaymentValletSelect from './PaymentValletSelect.vue';
import PaymentMethodSelect from './PaymentMethodSelect.vue';
</script>

<template>
    <div class="col-container w-[1160px] gap-[30px] mx-auto">
        <p class="text-[36px] leading-[42px]">
            <b>Пополните баланс, </b>
            <span class="opacity-60">чтобы получить номер для приема смс</span>
        </p>

        <PaymentValletSelect />

        <PaymentMethodSelect />
    </div>
</template>

<style scoped>

</style>
