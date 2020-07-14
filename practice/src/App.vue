<template>
  <div class="Home">
    <p>{{ greetText }}</p>
    <p>挨拶した回数 : {{ count }}</p>
    <p v-if="isRegulars">いつもありがとうございます！</p>
    <MyButton :greet="greetText" @click="onMyButtonClick">カウント</MyButton>
    <ResetButton initialValue="Hello" v-model="greetText"></ResetButton>

    <hr />

    <PracticeIndex></PracticeIndex>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import MyButton from "@/components/MyButton.vue";
import ResetButton from "@/components/ResetButton.vue";
import PracticeIndex from "@/components/practice/PracticeIndex.vue";

@Component({
  components: {
    MyButton,
    ResetButton,
    PracticeIndex
  }
})
export default class App extends Vue {
  private count = 0;
  public greetText = "Hello";

  // computed
  public get isRegulars(): boolean {
    return this.count >= 5;
  }

  @Watch("count")
  public countChanged() {
    if (this.count === 5) {
      alert("常連になりました。");
    }
  }

  public onMyButtonClick(count: number) {
    this.greetText = "こんにちは";
    this.count = count;
  }
}
</script>
