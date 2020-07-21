<template>
  <div id="app">
    <template v-for="list in lists">
      <div class="list-container" :key="list.id">
        <List :list="list" @add-kard="addCard" />
      </div>
    </template>
    <input type="text" @change="addList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { IList } from "@/types";
import { createInitialLists } from "@/initialData";
import { AddCardEvent } from "@/components/List.vue";
import List from "@/components/List.vue";

@Component({
  components: {
    List
  }
})
export default class App extends Vue {
  public lists: IList[] = createInitialLists();
  public listCreatedCount = createInitialLists().length;
  public cardCreatedCount = 4;

  public addList(event: Event & { currentTarget: HTMLInputElement }): void {
    const newList = {
      id: this.listCreatedCount + 1,
      name: event.currentTarget.value,
      cards: []
    };
    this.lists.push(newList);
    this.listCreatedCount += 1;
    event.currentTarget.value = "";
  }

  public addCard({ listId, text }: AddCardEvent): void {
    const list = this.lists.find(list => list.id === listId);
    if (list === undefined) return;
    const newCard = {
      id: this.cardCreatedCount + 1,
      text
    };
    list.cards.push(newCard);
    this.cardCreatedCount += 1;
  }
}
</script>

<style lang="scss" scoped>
#app {
  display: flex;

  > .list {
    margin: 1px;
  }
}
</style>
