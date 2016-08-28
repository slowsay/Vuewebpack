#Vuewebpack
> 基于vue框架,搭建web端网站平台,引用淘宝首页，进行测试
> 所使用到的组合是es6+vue+webpack
> 还是不错的一个框架, 还是个一MVVM(model-view-viewmodel),node服务器渲染还是挺快的,基本数据改变,页面自动变化,目前只是部分测试.

## Example

```
'use sturct';
import Vue from 'vue';
import Router from 'vue-router';
/**
 *@decsription 组件
 */
import Index from 'vue!./component/index.vue';
import Home from 'vue!./component/home/index.vue';
import Users from 'vue!./component/user/index.vue';
import Login from 'vue!./component/login/index.vue';

Vue.use(Router);
const router = new Router();
router.map({
    '/login': {
        name: 'login',
        component: Login
    },
    '/user': {
        name: 'user',
        component: Users
    },
    '/home': {
        name: 'home',
        component: Home
    }
});
/**
 *@description 不存在页面跳转home
 */
router.redirect({
    "*": "/home"
})
router.start(Index, '#webpage');
```


## Install
```
step 1
npm init
step 2
npm install --save vue
step 3
npm start
```

## Features
- vmodel数据双向
- router路由



