## 模板项目启动
```
# 1.首先进入项目
cd project
# 2. 安装依赖
npm i or yarn install
# 3.启动后台
node server/app.js
# 4.启动前端
npm run serve or yarn server

# ！！！注意 yarn和npm命令只能使用一个，不能混合使用，混合使用可能会出现一些奇怪的bug
```

## 模板项目的基本结构
```
├──src		#前端
│    ├── assets
│    ├── components #存放具体的组件
│	      ├── PieChart #单个具体的组件
│		      ├──pieChart.vue #编写具体的组件信息
│		      ├──pieChartHelp.js #这个组件的js帮助函数
│             └──pieChart.css #这个组件的样式
│			 └── ScatterChart #单个具体的组件
│			     ├──scatterChart.vue #编写具体的组件信息
│				 ├──scatterChartHelp.js #这个组件的js帮助函数
└──scatterChart.css #这个组件的样式
│	  ├── api    #存放发送请求
│			├──  config.js  #配置axios
│			├──  pieChartRequest.js # 具体图表的某个请求
│			└──  xxxx.js

│    ├── store #vuex
│			├── index.js 
│			├── actions.js #存放异步的action
└── mutations.js #修改state
│    ├── utils
│			└── xxxx,js #项目中通用js函数
│    ├── views
│			└── Home.vue #对所有的组件进行布局
│    └── router #前端路由
│				└── index.js 
│	  ├── App.vue    #项目根组件
│	  └── main.js    #项目入口，打包入口
├──server       # 服务端
│    ├── utils #后端功能函数
│    └── routes #后端路由管理
│	        ├── pieChart.js #某块业务的路由
│			 └── ScatterChart.js #某块业务的路由
│	  └── app.js    #后端入口文件

```

1.	Js文件命名： 小驼峰法 如pieChartHelp 第一个单词小写,其他单词首字母大写
2.	components文件命名： 大驼峰法 如PieChart 所有单词首字母大写
3.	api请求函数全部放在 api文件夹中
4.	状态全部放在store中进行管理
5.	请求数据的代码可以放在mutations中
6.	每个组件独享的函数可以放在组件下面的xxxHelp.Js文件中
7.	通用型的函数可以放在utils中
8.	布局全部放在Layout.vue中进行处理如下
    ```html
    <div class="layout"> 
      <div class="top">
        <PieChart msg="PieChart" :pieChartData="pieChartData"/>
      <div class="left">
        <ScatterChart msg="PieChart" :scatterChartData="scatterChartData" />
      </div>
      <div class="bottom">xxxx</div>
    </div>
    <style scoped>
      .layout{}
      .top{}
      .left{}
      .bottom{}
    </style>
    ```
    
9.  常量一般全部大写，每个单词使用分隔符隔开，比如const BASE_URL = 'http://localhost:3000/';变量使用小驼峰命名法