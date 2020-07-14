<template>
  <div>
    <h2>1.Data</h2>
    <p>{{ test }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Data extends Vue {
  private test = "こちらの値が出力される";
}
</script>
