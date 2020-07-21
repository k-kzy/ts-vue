<template>
  <div class="home">
    <div>
      <button @click="increment100">increment 100!</button>
      <button @click="increment">increment 1</button>
      increment counter: {{ incrementCounter }}
    </div>
    <div>
      <button @click="decrement100">decrement 100!</button>
      <button @click="decrement">decrement 1</button>
      decrement counter: {{ decrementCounter }}
    </div>

    <div><button @click="resetCounter">reset counter</button></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { counterModule } from "@/store/modules/counter";
@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  get incrementCounter() {
    return counterModule.incrementCounter;
  }
  get decrementCounter() {
    return counterModule.decrementCounter;
  }
  increment() {
    counterModule.SET_INCREMENT_COUNTER(counterModule.incrementCounter + 1);
  }
  decrement() {
    counterModule.SET_DECREMENT_COUNTER(counterModule.decrementCounter - 1);
  }
  increment100() {
    counterModule.increment100();
  }
  decrement100() {
    counterModule.decrement100();
  }
  resetCounter() {
    counterModule.resetCounter();
  }
}
</script>
