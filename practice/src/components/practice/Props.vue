<template>
  <div>
    <h2>8.prop</h2>
    <p>{{ greet }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Props extends Vue {
  @Prop()
  public greet?: string;
}
</script>
