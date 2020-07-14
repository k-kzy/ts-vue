<template>
  <div>
    <h2>9.v-for</h2>
    <ul>
      <li v-for="item in itemList" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Vfor extends Vue {
  private itemList: string[] = ["item1", "item2", "item3"];
}
</script>
