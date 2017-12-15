<template>
    <div>
        <x-header :left-options="{showBack: false}">商品列表</x-header>
        <scroller lock-x
                  :pulldown-config="{downContent: '<div class=\'loadwraper\'>下拉刷新</div>',pullUpHeight: 50,height: 50,loadingContent: '<div class=\'loadwraper\'>Loading...</div>', upContent: '<div class=\'loadwraper\'>释放后更新</div>'}"
                  :pullup-config="{upContent:'<div class=\'loadwraper\'>上拉加载更多</div>',pullUpHeight: 50,height: 50,loadingContent: '<div class=\'loadwraper\'>Loading...</div>',downContent: '<div class=\'loadwraper\'>释放后加载</div>'}"
                  ref="scrollerBottom" :use-pulldown=true :use-pullup=true
                  @on-pulldown-loading="pulldownFlush"
                  @on-pullup-loading="pullupFlush"
                  @on-scroll="handleScroll">
                    <div>
                        <div style="padding:0 15px;background-color:white;border-top:1px solid #ECECED;border-bottom:1px solid #ECECED;margin-top:8px;"  v-for="i in bottomCount">
                            <div style="height: 50px; line-height:50px; color:#888; font-size:18px; border-bottom:1px solid #ddd">
                               {{data[i%10].title}}
                            </div>
                            <div style="display:-webkit-box; display: flex; padding: 15px ">

                                <router-link :to="{ path: '/productDetail', query: {productId:i}}">
                                    <img style="height: 63px; width: 63px; margin-right:15px" :src="data[i%10].img" alt="" />
                                </router-link>

                                <div style="display:inline-block">
                                    <div style="marginBottom: 8px; color: #000; font-size: 16px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 250px">
                                        {{data[i%10].des}}
                                    </div>
                                    <div style="font-size: 16px">
                                            <span style="font-size: 30px; color: #FF6E27">
                                            {{i}}</span> 元/任务
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </scroller>
        <div class="back-to-up" style="display: none;"  ref="backToUp" @click="handleBackToUp"></div>

    </div>
</template>



<script>
    import { XHeader,Scroller, LoadMore } from 'vux'


    export default {
        components: {
            XHeader,
            Scroller,
            LoadMore
        },
        data () {
            return {
                showList1: true,
                scrollTop: 0,
                onFetching: false,
                bottomCount: 20,
                data:[
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                        title: 'Meet hotel',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
                        title: 'McDonald\'s invites you',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
                        title: 'Eat the week',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                        title: 'Meet hotel',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
                        title: 'McDonald\'s invites you',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
                        title: 'Eat the week',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                        title: 'Meet hotel',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
                        title: 'McDonald\'s invites you',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
                        title: 'Eat the week',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                    {
                        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
                        title: 'Meet hotel',
                        des: '不是所有的兼职汪都需要风吹日晒',
                    },
                ]
            }
        },
        mounted () {

        },
        methods: {
            handleScroll(position){
                if(position.top>200){
                    this.$refs.backToUp.style.display="block";
                }
                else{
                    this.$refs.backToUp.style.display="none";
                }
            },
            pulldownFlush(){
                if (this.onFetching) {
                    // do nothing
                } else {
                    this.onFetching = true
                    setTimeout(() => {
                        this.bottomCount = 20
                        this.$nextTick(() => {
                            this.$refs.scrollerBottom.reset();
                            this.$refs.scrollerBottom.donePulldown();
                        })
                        this.onFetching = false
                    }, 1000)
                }
            },
            pullupFlush(){
                if (this.onFetching) {
                    // do nothing
                } else {
                    this.onFetching = true
                    setTimeout(() => {
                        this.bottomCount += 10
                        this.$nextTick(() => {
                            this.$refs.scrollerBottom.reset();
                            this.$refs.scrollerBottom.donePullup();
                        })
                        this.onFetching = false
                    }, 1000)
                }
            },
            handleBackToUp(){
                this.$refs.scrollerBottom.reset({
                    top: 0,
                },'600','ease')
            },
        }
    }
</script>

<style scoped>

</style>