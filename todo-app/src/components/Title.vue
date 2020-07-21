<template>
  <h1 class="title">{{ title }}<span>APP</span></h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Title extends Vue {
  public title = "TODO LIST";
}
</script>

<style lang="scss" scoped>
.title {
  border-bottom: 1px solid #ddd;
  font-size: 30px;
  font-weight: bold;
  text-align: left;

  &::before {
    content: "▼";
  }

  span {
    font-style: italic;
    margin-left: 40px;
  }
}
</style>
