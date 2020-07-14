<template>
  <div>
    <h2>4.computed</h2>
    <input type="text" v-model="inputValue" />
    <p>{{ convertString }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Vmodel extends Vue {
  private inputValue = "";
  public get convertString(): string {
    return this.inputValue.toUpperCase();
  }
}
</script>
