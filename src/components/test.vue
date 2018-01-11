<template>
    <div class="hello mui-content">
        <h1>before{{ loading }}after</h1>
         <a @click="$store.dispatch('loadingTrue','这里是true')">设为true</a>
         <a @click="$store.dispatch('loadingFalse','这里是false')">设为false</a>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data () {
            return {

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

        }
    }
</script>
<style scoped>
    .t_l{
        text-align: left;
    }
</style>
