# New Project

> ✨ Bootstrapped with Create Snowpack App (CSA).

## Available Scripts

### npm start

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### npm test

**⚠️ NOTE:** Vue 3 testing support is still in progress. This template does not ship with a test runner.

### npm run build

Builds the app for production to the `build/` folder.
It correctly bundles Vue in production mode and optimizes the build for the best performance.

### Q: What about Eject?

No eject needed! Snowpack guarantees zero lock-in, and CSA strives for the same.

# 开发声明

> 使用 snowpack 打包构建,可能没多少 esm 的插件支撑,不过很 nice

现在使用 vue3 踩坑,尽可能用函数组件写法,本套支持 jsx vue tsx | 模版里面混 tsx 或者 jsx,比较混乱,风格上统一为 vue 模版,在 script 中 lang=ts 形式,同时用 vue3 提供 compitison api 写法,其它支持 sass,scss,css 等;

## TODO

- [ ] vuex 是否添加?待项目初步成型考虑
- [ ] vue-router 添加
- [ ] Layout 添加/自建
- [ ] 项目要素
- [ ] 需不需要一个管端操作模型
- [ ] canvas 支持第三方库选型
- [ ] 调研模型载入

## 目录结构-新手村

```shell
├── LICENSE
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json # npm 包管理处
├── postcss.config.js
├── public # 网站标题,入口基本没你什么事
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   ├── index.html
│   ├── logo.svg
│   └── robots.txt
├── snowpack.config.js # 项目配置打包文件处
├── src # 开发入口文件夹 😄
│   ├── App.vue # 入口处渲染,js会拿这个东西
│   ├── assets # 放些图片等资源
│   │   └── readme.md
│   ├── components # 组件可以复用的模版啥的
│   │   └── demo
│   ├── index.js # 最早开始进来做操作的js文件,也就是页面加载,会从这里link一些css js啥的
│   ├── mock # 模拟接口,暂时不管
│   ├── router # 路由配置,就是网址跳转页面配置的地方
│   ├── service # 接口 api 请求配置的地方
│   └── vuex # 状态存储,cookie,storage这种类似的状态管理的地方
├── tsconfig.json # ts 语言特性配置的地方
├── types # 对于ts 一些类型的定义的地方
│   ├── shims-vue.d.ts
│   └── static.d.ts
└── yarn.lock # 包固定锁
```

## vue3(可能是 vue2)语法快速写

```Vue
// 网页的基本布局的骨架/配合样式内容渲染为好看的东西
<template>
  // 一定只有一层结构 <> ... <>不然报错 ,比方下面只有一个最外围的 div,不能再有同级的内容
  <div>
    <h2 class="classname"> 这是一个标题的标签 </h2>
    <img src="图片地址">
    <button @click="clickEvent">点击按钮</button>
  </div>

<template>

// 控制交互逻辑的地方 ,请求关闭,跳转,点击跳转等
<script lang="ts">
  import {defineCompoent,setup,reactive,toRefs,onBeforeMount,onMounted} from 'vue';

  // 定义数据的类型,这种东西实在看着来就好了 int str number boolean 这些
  interface DataProps {
    title: string;
  }

  export default defineComponent({
    name: 'pageA' // 必须要申明
    // data(){...} 申明变量可以用的
    data(){
      a: 1
    },
    // 定义函数的区间
    methods: {
        clickEvent: function () {
            console.log('这个是定义事件的地方')
        }
    },
    
   // 这是定义外面传入值的内容的名字,一般不是组件不用定义props,也就是 txt:"abc",会替换这里的ssss
   props: {
    txt: {
      type: String,
      default: "ssss",
    },
   },
  
  // 这个要写一般 实际作为页面内部消耗的变量等东西,下面是里面的几个生命周期,还有些,要查,
  setup(context,state) {
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
  
  // 其它如provide (注入器) / components 外部倒入注册使用 / filter(过滤器) 的东西可以去看看
  })
</script>

// 样式内容,就是修饰网页的,文字颜色大小等
<style scoped lang="scss">
// 标签h2 红色
  h2{
    color:red;
  }
  // 类名 样式 字体20大小,名字可以取f20好点
  .classname{
    font-size: 20px
  }
</style>

```
