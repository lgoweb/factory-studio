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
