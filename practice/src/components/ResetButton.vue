<template>
  <button @click="onClick">Reset</button>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class ResetButton extends Vue {
  @Prop({ required: true })
  public initialValue!: string;

  @Prop()
  public value!: string;

  /* ライフサイクルフック */
  public created() {
    this.initialValue = this.value;
  }

  @Emit()
  public input(value: string) {
    // do nothing.
  }

  public onClick() {
    this.input(this.initialValue);
  }
}
</script>
