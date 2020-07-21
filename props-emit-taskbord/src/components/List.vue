<template>
  <div class="list">
    {{ list.name }}
    <Card v-for="card in list.cards" :key="card.id" :card="card" />
    <input type="text" @change="addKard" />
  </div>
</template>

<script lang="ts">
export interface AddCardEvent {
  listId: number;
  text: string;
}

import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import Card from "@/components/Card.vue";
import { IList } from "@/types";

@Component({
  components: {
    Card
  }
})
export default class List extends Vue {
  @Prop({ type: Object, required: true })
  list!: IList;

  @Emit()
  addKard(event: Event & { currentTarget: HTMLInputElement }): AddCardEvent {
    const text = event.currentTarget.value;
    event.currentTarget.value = "";
    return {
      listId: this.list.id,
      text
    };
  }
}
</script>

<style lang="scss" scoped>
.list {
  border: 1px solid #000;

  > .card {
    margin: 1px;
  }
}
</style>
