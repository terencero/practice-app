<script setup lang="ts">
import { ref } from 'vue';

const checkBoxes = ref(['review', 'sight reading', 'theory', 'working piece', 'polished piece']);
</script>

<template>
  <div class="rounded border-2 border-black">
    <ul
      role="listbox"
      tabindex="0"
      aria-label="practice task list"
      class="flex items-start flex-col p-5"
    >
      <li
        v-for="(c, i) in checkBoxes"
        :key="c+i"
        role="option"
      >
        <input
          :id="c+i"
          type="checkbox"
          name="check"
          class="mr-2"
        >
        <label :for="c+i">
          {{ c }}
        </label>
      </li>
    </ul>
    Daily card
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione minima hic modi illo explicabo ex, dolor magnam corporis quas officia? Quam adipisci explicabo in veritatis nemo earum eos voluptatem quae.
  </div>
</template>
