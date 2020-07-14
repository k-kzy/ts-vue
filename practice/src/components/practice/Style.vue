<template>
  <div>
    <h2>6.style</h2>
    <p :style="{ color: textColor }">style に寄って赤色の文字になった！</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Style extends Vue {
  public textColor = "red";
}
</script>
