<template>
    <div class="hello mui-content">
        <h1>before{{ loading }}after</h1>
         <a @click="$store.dispatch('loadingTrue','这里是true')">设为true</a>
         <a @click="$store.dispatch('loadingFalse','这里是false')">设为false</a>

        <div v-for="(item,index) in mydata">
            <input v-bind:value="item.len"  @input="myInput"/>
        </div>

        <button @click="myChange">点击改么</button>

    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data () {
            return {
                mydata:[{
                    len:22
                }]
            }
        },
        mounted(){
            console.log("index到这里了");
        },
        computed: {
            ...mapState({
                "loading":"loading"
            })
        },
        methods: {
            myChange:function () {
                this.mydata[0].len=33;
            },
            myInput:function () {
                console.log("myInput");
                this.mydata[0].len=33;
            }
        }
    }
</script>
<style scoped>
    .t_l{
        text-align: left;
    }
</style>
