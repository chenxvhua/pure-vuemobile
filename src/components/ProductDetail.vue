<template>
   <div>
       <x-header :left-options="{showBack: true}" class="fixed-top">产品详情</x-header>
       <div  class="product-detail" style="margin-top: 46px;">
           <div>
               <div class="content-shadow">
                   <img  :src="demo"  width="100%"/>
               </div>

               <div  class="title-content">
                   <h1  class="name">南非橙 500g</h1>
                   <div  class="detail">
                       南非脐橙皮薄汁多 鲜美水果 含各种微量元素 味甜 孕妇水果
                   </div>
                   <div  class="price">
                       <span  class="now">￥8.8</span>
                   </div>
                   <div  class="buy">
                       加入购物车
                   </div>
               </div>

               <div  class="introduce">
                   <h1  class="title">商品介绍</h1>
                   <div  class="desc">
                       西瓜，好西瓜，大西瓜，好吃的大西瓜
                   </div>
               </div>
               <div  class="cross-line"></div>
               <div  class="ratings">
                   <h1  class="title">其他图片</h1>
                   <div  class="ratings-wrapper">
                       <div class="content-shadow">
                           <img :src="demo" alt="" width="100%"/>
                           <p class="p-content">图片1</p>
                       </div>
                       <div class="content-shadow">
                           <img :src="demo" alt="" width="100%"/>
                           <p class="p-content">图片2</p>
                       </div>
                       <div class="content-shadow">
                           <img :src="demo" alt="" width="100%"/>
                           <p class="p-content">图片3</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
   </div>
</template>



<script>
    import { XHeader,Scroller, LoadMore,Card  } from 'vux'
    import demo from '@/images/demo.png';


    export default {
        components: {
            XHeader,
            Scroller,
            LoadMore,
            Card
        },
        data () {
            return {
                demo:demo
            }
        },
        mounted () {

        },
        methods: {

        }
    }
</script>

<style scoped>
    .p-content{
        font-size: 14px;
        margin-top: 0;
        margin-bottom: 10px;
        color: #8f8f94;
        padding: 10px 15px;
    }
</style>