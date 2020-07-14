<template>
  <div>
    <h2>5.component</h2>
    <Data />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Data from "@/components/practice/Data.vue";

@Component({
  components: {
    Data
  }
})
export default class ComponentHoge extends Vue {}
</script>
