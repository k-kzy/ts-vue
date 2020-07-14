<template>
  <div>
    <h2>10.Filter</h2>
    <p>{{ text | truncateText }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  filters: {
    truncateText(text: string) {
      if (text.length < 16) return text;
      return `${text.slice(0, 15)}...`;
    }
  }
})
export default class Filter extends Vue {
  public text = "0123456789012345678901234567890";
}
</script>
