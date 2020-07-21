<template>
  <div id="app">
    <Title />
    <Status todoProp="todos" @called-status="onTodoChanged" />
    <table>
      <thead>
        <tr>
          <th class="id">ID</th>
          <th class="comment">コメント</th>
          <th class="state">状態</th>
          <th class="button">-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <th>{{ todo.id }}</th>
          <td>{{ todo.name }}</td>
          <td class="state">
            <button @click="toggleState(todo)">
              <!-- {{ labels.get(todo.state) }} -->
            </button>
          </td>
          <td class="button">
            <button @click.shift="removeTodo(todo)">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      ※削除ボタンはコントロールキーを押しながらクリックして下さい
    </p>

    <h2>新しい作業の追加</h2>
    <form class="add-item" @submit.prevent="addTodo">
      コメント <input type="text" ref="name" />
      <button type="submit">追加</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import TodoStorage from "@/todoStorage.ts";
import { State, TodoItem } from "@/todoItem.ts";
import Title from "@/components/Title.vue";
import Status from "@/components/Status.vue";

const todoStorage = new TodoStorage();

@Component({
  components: {
    Title,
    Status
  }
})
export default class Home extends Vue {
  // TODO一覧
  public todos: TodoItem[] = [];

  // 表示時に localStorage の内容を表示
  private created() {
    this.todos = todoStorage.fetchAll();
  }

  //↓input
  // TODO追加する
  private addTodo() {
    const name = this.$refs.name as HTMLInputElement;
    if (!name.value.length) return;
    this.todos.push({
      id: todoStorage.nextId - 1,
      name: name.value,
      state: State.Working
    });
    name.value = "";
  }

  //↓list
  // TODOを削除する
  private removeTodo(todo: TodoItem) {
    const index: number = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }

  // TODOの作業中・完了を切り替える
  private toggleState(todo: TodoItem) {
    todo.state = todo.state === State.Working ? State.Done : State.Working;
  }

  //↓
  // TODO一覧が変更される度、ストレージに保存する
  @Watch("todos", { deep: true })
  public onTodoChanged(todos: TodoItem[]) {
    this.todos = todos;
    todoStorage.save(todos);
  }
}
</script>
