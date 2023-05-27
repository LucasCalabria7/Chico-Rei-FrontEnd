<template>
  <Header />
  <Filter />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue';
import Filter from './components/Filter.vue';

</script>


