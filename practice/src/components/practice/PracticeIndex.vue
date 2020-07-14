<template>
  <section>
    <h1>▼練習問題</h1>
    <Data class="practiceSection" />
    <Method class="practiceSection" />
    <Vmodel class="practiceSection" />
    <Computed class="practiceSection" />
    <ComponentHoge class="practiceSection" />
    <Style class="practiceSection" />
    <Class class="practiceSection" />
    <ClassComputed class="practiceSection" />
    <Props greet="hello" class="practiceSection" />
    <Vfor class="practiceSection" />
    <Filters class="practiceSection" />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Data from "@/components/practice/Data.vue";
import Method from "@/components/practice/Method.vue";
import Vmodel from "@/components/practice/Vmodel.vue";
import Computed from "@/components/practice/Computed.vue";
import ComponentHoge from "@/components/practice/ComponentHoge.vue";
import Style from "@/components/practice/Style.vue";
import Class from "@/components/practice/Class.vue";
import ClassComputed from "@/components/practice/ClassComputed.vue";
import Props from "@/components/practice/Props.vue";
import Vfor from "@/components/practice/Vfor.vue";
import Filters from "@/components/practice/Filter.vue";

@Component({
  components: {
    Data,
    Method,
    Vmodel,
    Computed,
    ComponentHoge,
    Style,
    Class,
    ClassComputed,
    Props,
    Vfor,
    Filters
  }
})
export default class PracticeIndex extends Vue {}
</script>

<style lang="scss">
.practiceSection {
  border: 1px solid #ddd;
  width: 300px;
  padding: 10px;
  display: table-cell;
}
</style>
