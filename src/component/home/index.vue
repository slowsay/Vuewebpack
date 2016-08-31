<template>
    <div class='home'>
        <div class='banner'><img src='https://img.alicdn.com/tps/TB1to3vJFXXXXXMaXXXXXXXXXXX-1190-45.jpg'/>
        </div>
        <div class='Menus'>
            <div class='bannerL'><img src="https://img.alicdn.com/tps/TB1EaH6JFXXXXbIXVXXXXXXXXXX-190-130.gif"/>
            </div>
            <ul class='menulist'>
                <li v-for='e in homearr'>
                    <i>{{$index}}</i>
                    <span v-for='v in e.list'>
                    <a href='#' target="_blank">{{v.t}}</a>
                    </span>
                </li>
            </ul>
        </div>
        <div class='searchbox'>
            <ul class='searchnav'>
                <li v-for='(index,e) in nlist'>
                    <a v-if='index==0' class='s'>{{e.t}}</a>
                    <a v-else>{{e.t}}</a>
                </li>

            </ul>
            <div class='search'>
                <input type='text' id='searchinput' v-model='filltxt' name='searchinput' value={{filltxt}}
                />
                <input type='button' id='searchbtn' value='搜索' v-on:click.self='onHandle'/>

                <div class='outText'>{{filltxt}}</div>
                <p v-if='show' transition='expand'>{{title}}</p>
                <select v-model="you">
                    <option selected>hello</option>
                    <option>nihao</option>
                    <option>mm</option>
                </select>
                <span>{{you}}</span>
                <input type="checkbox" v-model='me' v-bind:true-value='0' v-bind:true-value='1'/>
            </div>
        </div>
        <div class='brandrect'>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    export default {
        name: 'Home',
        data: function () {
            return {
                show: true,
                transitionName: 'fade',
                title: '关闭',
                close: true,
                filltxt: '点击搜索可能有变化哦',
                nlist: [{t: '宝贝', link: ''}, {t: '天猫', link: ''}, {t: '店铺', link: ''}],
                homearr: [{
                    list: [{
                        t: '女装',
                        flag: false,
                        link: 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
                    }, {
                        t: '男装',
                        flag: false,
                        link: 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
                    }, {
                        t: '内衣',
                        flag: false,
                        link: 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
                    }]
                }, {
                    list: [{
                        t: '美妆',
                        flag: false,
                        link: 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
                    }, {
                        t: '洗护',
                        flag: false,
                        link: 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
                    }, {
                        t: '保健品',
                        flag: false,
                        link: 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
                    }]
                }, {
                    list: [{
                        t: '家电',
                        flag: false,
                        link: 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
                    }, {
                        t: '数码',
                        flag: false,
                        link: 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
                    }, {
                        t: '手机',
                        flag: false,
                        link: 'https://www.taobao.com/market/nvzhuang/index.php?spm=a21bo.50862.201867-main.2.HZIJf8'
                    }]
                }]
            }
        },
        methods: {
            onHandle: function (e) {
                /**
                 *@description 监听transition,所谓的钩子,也是一个绑定功能
                 */

                Vue.transition('expand', {
                    enter: function (el) {
                        console.log('enter');
//                        el.textContent = this.title;
                    },
                    leave: function (el) {
//                        el.textContent = 'leave';
                        console.log('leave');
                    }
                });
                if (this.close) {
                    this.title = '开启';
                    this.close = false;
                    this.show = false;
                }
                else {
                    this.title = '关闭';
                    this.close = true;
                    this.show = true;
                }
            }
        }
    }
</script>