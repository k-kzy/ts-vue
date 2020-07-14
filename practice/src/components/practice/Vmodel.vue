<template>
  <div>
    <h2>3.v-model</h2>
    <input type="text" v-model="inputValue" />
    <p>
      {{ inputValue }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Vmodel extends Vue {
  private inputValue: string | number = "";
}
</script>
