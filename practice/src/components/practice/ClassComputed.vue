<template>
  <div>
    <h2>8.class computed</h2>
    <p :class="textStyle">class computed で文字が緑色になった！</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Class extends Vue {
  public shouldApply = true;

  public get textStyle() {
    return {
      textColor: this.shouldApply,
      textFont: !this.shouldApply
    };
  }
}
</script>

<style lang="scss" scoped>
.textColor {
  color: green;
}
.textFont {
  font-size: 30px;
}
</style>
