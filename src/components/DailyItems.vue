<script setup lang="ts">
import { ref } from 'vue';
import DailyCard from './DailyCard.vue';

const arr = new Array(7);

const numberOfCards = ref(arr);

</script>

<template>
  <h2>Daily</h2>
  <div class="mx-0 bg-slate-100 text-black grid sm:grid-cols-2 p-5 gap-5">
    <DailyCard
      v-for="(card, i) in numberOfCards"
      :key="'daily'+i"
    />
  </div>
</template>
