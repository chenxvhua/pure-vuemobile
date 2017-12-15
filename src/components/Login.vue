<template>
    <div>
        <x-header :left-options="{showBack: false}">登录</x-header>
        <group label-width="4.5em" label-margin-right="2em" label-align="right">
            <x-input title="用户名" v-model="formData.userName" placeholder="请输入用户名"></x-input>
            <x-input title="密码" v-model="formData.password" placeholder="请输入密码"></x-input>
            <x-input title="验证码" v-model="formData.verifyCode" placeholder="请输入验证码"></x-input>
        </group>
        <div style="margin-top: 20px; text-align: center">
           <x-button type="primary" action-type="button" mini @click.native="handleSubmit">登录</x-button>
        </div>
        <toast v-model="showToast" type="text">{{toastText}}</toast>
    </div>
</template>

<script>
    import requestApi from '@/commonjs/requestApi';
    import md5 from 'js-md5';
    import {XHeader,Group, XInput,XButton,Toast} from 'vux'
    export default {
        components: {
            XHeader,
            Group,
            XInput,
            XButton,
            Toast
        },
        data () {
            return {
                showToast: false,
                toastText:"",
                formData:{
                    userName:"",
                    password:"",
                    verifyCode:"",
                }
            }
        },
        methods: {
            handleSubmit:function () {
                console.log("到这里了");
                if(this.formData.userName.trim()===""){
                    this.toastText="请输入用户名";
                    this.showToast=true;
                }
                else if(this.formData.password.trim()===""){
                    this.toastText="请输入密码";
                    this.showToast=true;
                }
                else if(this.formData.verifyCode.trim()===""){
                    this.toastText="请输入验证码";
                    this.showToast=true;
                }
                else{
                    var that=this;
                    var load = new requestApi.login.login_userLogin();
                    load.param =that.formData;
                    load.exec(function( data ){
                        if(data.success){
                            localStorage.setItem('fullName', "张三");//测试环境
                            localStorage.setItem('token', "测试token");
                            that.$router.replace({ path: '/index'});
                        }
                        else{
                            //that.hanlderChangeCode();
                            this.toastText=data.errorMsg;
                            this.showToast=true;
                        }
                    },function (error) {
                        // that.hanlderChangeCode();
                    });
                }
            }
        }
    }
</script>
<style scoped>
    .red {
        color: red;
    }
    .green {
        color: green;
    }
</style>