import Vue from "vue";
import Vuex from "vuex";
import { CounterState } from "@/store/modules/counter";
Vue.use(Vuex);

export interface State {
  counter: CounterState;
}
export default new Vuex.Store<State>({});
