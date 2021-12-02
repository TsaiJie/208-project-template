## 模板项目启动

```
# 1.首先进入项目
cd project
# 2. 安装依赖
npm i or yarn install
# 3.启动后台
node server/app.js
# 4.启动前端
npm run serve or yarn serve

# ！！！注意 yarn和npm命令只能使用一个，不能混合使用，混合使用可能会出现一些奇怪的bug
```

## 模板项目的基本结构

```
├── README.md
├── babel.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
├── server
│   ├── app.js
│   ├── routes
│   │   ├── pieChart.js
│   │   └── scatterChart.js
│   └── utils
└── src
    ├── App.vue
    ├── api
    │   ├── config.js
    │   ├── pieChartApi.js
    │   └── scatterChartApi.js
    ├── assets
    │   └── logo.png
    ├── components
    │   ├── PieChart
    │   │   ├── pieChart.css
    │   │   ├── pieChart.vue
    │   │   └── pieChartHelp.js
    │   └── ScatterChart
    │       ├── scatterChart.css
    │       ├── scatterChart.vue
    │       └── scatterChartHelp.js
    ├── main.js
    ├── router
    │   └── index.js
    ├── store
    │   ├── actions.js
    │   ├── index.js
    │   └── mutations.js
    ├── utils
    │   └── hlep.js
    └── views
        ├── Home.css
        └── Home.vue
```
img

1. Js 文件命名： 小驼峰法 如 pieChartHelp 第一个单词小写,其他单词首字母大写
2. components 文件命名： 大驼峰法 如 PieChart 所有单词首字母大写
3. api 请求函数全部放在 api 文件夹中
4. 状态全部放在 store 中进行管理
5. 请求数据的代码可以放在 mutations 中
6. 每个组件独享的函数可以放在组件下面的 xxxHelp.Js 文件中
7. 通用型的函数可以放在 utils 中
8. 布局全部放在 Layout.vue 中进行处理如下
   ```html
   <div class="layout">
     <div class="top">
       <PieChart msg="PieChart" :pieChartData="pieChartData" />
       <div class="left">
         <ScatterChart msg="PieChart" :scatterChartData="scatterChartData" />
       </div>
       <div class="bottom">xxxx</div>
     </div>
     <style scoped>
       .layout {
       }
       .top {
       }
       .left {
       }
       .bottom {
       }
     </style>
   </div>
   ```
9. 常量一般全部大写，每个单词使用分隔符隔开，比如
   `const BASE_URL = 'http://localhost:3000/';`变量使用小驼峰命名法
