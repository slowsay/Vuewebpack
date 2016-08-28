<template>
    <div class='header'>
        <div class='l'></div>
        <div class='r'></div>
        <div class='c'>
            <ul class='header_l'>
                <li><a v-link={path:'/login'}><b>{{title}}</b></a><a v-link={path:"/user"}>免费注册</a>
                </li>
                <li>
                    <a v-link={path:'/home'}>手机逛淘宝</a>
                </li>
            </ul>
            <ul class='header_r'>
                <li v-for="e in toplist">
                    {{e.t}}
                </li>
            </ul>
        </div>
    </div>
</template>
<style>
    body {
        background-color: #fff;
    }
</style>
<script>
    export default {
        data: function () {
            return {
                title: '亲，请登录',
                toplist: [
                    {
                        t: '我的淘宝',
                        link: 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
                    },
                    {
                        t: '购物车',
                        link: 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
                    },
                    {
                        t: '收藏夹',
                        link: 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
                    },
                    {
                        t: '商品分类',
                        link: 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
                    },
                    {
                        t: '卖家中心',
                        link: 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
                    },
                    {
                        t: '联系客服',
                        link: 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
                    },
                    {
                        t: '网站导航',
                        link: 'https://i.taobao.com/my_taobao.htm?spm=a21bo.50862.1997525045.1.driImk'
                    }]
            }
        }
    }
</script>
