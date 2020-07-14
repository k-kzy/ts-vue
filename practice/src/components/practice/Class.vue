<template>
  <div>
    <h2>7.class</h2>
    <p :class="{ textStyle: isClassBinded }">class で文字が青色になった！</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Class extends Vue {
  public isClassBinded = true;
}
</script>

<style lang="scss" scoped>
.textStyle {
  color: blue;
}
</style>
