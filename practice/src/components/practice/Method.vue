<template>
  <div>
    <h2>2.メソッド</h2>
    <button @click="onClickMethod">method button</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Method extends Vue {
  private alertText = "method 発火！";

  public onClickMethod() {
    alert(this.alertText);
  }
}
</script>
