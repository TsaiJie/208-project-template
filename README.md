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
├── server #后端主目录
│   ├── app.js #后端入口文件
│   ├── routes #后端路由管理
│   │   ├── pieChart.js #某块业务的路由
│   │   └── scatterChart.js #某块业务的路由
│   └── utils #后端功能函数
└── src #前端主目录
    ├── App.vue #项目根组件
    ├── api #存放发送请求
    │   ├── config.js #配置axios
    │   ├── pieChartApi.js #具体图表的某个请求
    │   └── scatterChartApi.js #具体图表的某个请求
    ├── assets #存放图标等一些文件
    │   └── logo.png 
    ├── components #存放具体的组件
    │   ├── PieChart #单个具体的组件
    │   │   ├── pieChart.css #这个组件的样式
    │   │   ├── pieChart.vue #编写具体的组件信息
    │   │   └── pieChartHelp.js #这个组件的功能函数
    │   └── ScatterChart
    │       ├── scatterChart.css
    │       ├── scatterChart.vue
    │       └── scatterChartHelp.js
    ├── main.js #前端主文件
    ├── router  #前端路由，配置跳转页
    │   └── index.js
    ├── store   #vuex
    │   ├── actions.js  #存放异步的action
    │   ├── index.js
    │   └── mutations.js #同步修改state
    ├── utils #项目的通用功能函数
    │   └── hlep.js
    └── views #视图组件
        ├── Home.css #样式处理
        └── Home.vue #对所有的子组件进行布局
```
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
