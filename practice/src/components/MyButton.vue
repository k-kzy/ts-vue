<template>
  <button class="myButton" @click="onClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class MyButton extends Vue {
  private count = 0;

  @Prop()
  public greet?: string;

  @Emit("click")
  /* eslint-disable */
  public click(count: number) {
    // do nothing
  }

  // methods
  public onClick() {
    alert(this.greet);
    this.count++;
    this.click(this.count);
  }
}
</script>

<style lang="scss" scoped>
.myButton {
  border: 5px solid blue;
}
</style>
