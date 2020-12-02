<!-- demo组件 -->
<template id="demo">
  <div>
    <div class="box">
      <p>{{ title }}</p>
    </div>
    <p>props 控制</p>
    <div class="props-box">
      <p>{{ txt }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {
  reactive,
  defineComponent,
  toRefs,
  onBeforeMount,
  onMounted,
} from "vue";
interface DataProps {
  title: string;
}

export default defineComponent({
  name: "demo",
  props: {
    txt: {
      type: String,
      default: "ssss",
    },
  },
  setup() {
    console.log("1-开始创建组件-setup");
    const data: DataProps = reactive({
      title: "标题",
    });
    onBeforeMount(() => {
      console.log("2.组件挂载页面之前执行----onBeforeMount");
    });
    onMounted(() => {
      console.log("3.-组件挂载到页面之后执行-------onMounted");
    });
    const refData = toRefs(data);
    return {
      ...refData,
    };
  },
});
</script>
<style lang="scss" scoped>
.box {
  display: inline-block;
  height: 100px;
  width: 100px;
  background: green;
}
.props-box {
  display: inline-block;
  height: 100px;
  width: 100px;
  background: red;
}
</style>
