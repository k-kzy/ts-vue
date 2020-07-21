import { TodoItem } from "@/todoItem";

interface Storable {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
}

const STORAGE_KEY = "vue-ts-todoId";

export default class TodoStorage {
  // 各TODOユニークIDの採番用
  get nextId(): number {
    return this.fetchAll().length + 1;
  }

  constructor(
    // デフォルト引数でローカルストレージをDI
    private storage: Storable = localStorage
  ) {}

  // TODOリストを全件取得する
  public fetchAll(): TodoItem[] {
    const todos = JSON.parse(
      this.storage.getItem(STORAGE_KEY) || "[]"
    ) as TodoItem[];
    todos.forEach((todo, index) => (todo.id = index));
    return todos;
  }

  // TODOリストを保存する
  public save(todos: TodoItem[]) {
    this.storage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}
