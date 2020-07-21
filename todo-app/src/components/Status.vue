<template>
  <div class="status">
    <label v-for="[state, text] in Array.from(labels)" :key="state">
      <input
        type="radio"
        v-model="current"
        :value="state"
        @change="calledStatus"
      />
      {{ text }}
    </label>
    {{ todoProp.length }} 件を表示中
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";
import { State, TodoItem } from "@/todoItem.ts";

@Component
export default class Status extends Vue {
  @Prop() public todoProp!: TodoItem[];

  // TODO絞り込み作業区分
  private labels = new Map<State, string>([
    [State.All, "全て"],
    [State.Working, "作業中"],
    [State.Done, "完了"]
  ]);

  // 現在表示中の作業区分
  private current: State = State.All;

  @Emit()
  public calledStatus() {
    return this.todoProp.filter(t =>
      this.current === State.All ? true : this.current === t.state
    );
  }
}
</script>

<style lang="scss" scoped></style>
