/**
 * Created by slowsay on 16/8/28.
 */
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
