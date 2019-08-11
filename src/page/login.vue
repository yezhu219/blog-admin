<template>
 <el-container class="login pr">
   <el-row class="b-container pa text-c box-s1" >
     <el-col :span="9"><img src="../assets/img/flower.jpg" class="b-left" height="300px"></el-col>
     <el-col :span="15" class="pd-20 " >
      <el-col class="fz28 c-333 mb-20 ">Blog后台登录系统</el-col>
      <el-row class=" mb-10 fz12">
        <el-col  class="item">用户名：</el-col>
        <el-col ><input type="text" class="b-input fz12 c-666" v-model="userName"></el-col>
        <!-- <span class="item">用户名：</span><input type="text" class="b-input fz12 c-666"> -->
      </el-row>
      <el-row class=" mb-20 fz12 ">
        <el-col  class="item" >密码：</el-col>
        <el-col ><input type="password" class="b-input fz12 c-666" v-model="password" @keydown.enter="login" ></el-col>
      </el-row>
      <el-row class="mb-20">
        <button class="btn-login cp" @click="login" >登录</button>
      </el-row>
      <el-row class="fz12 c-333">
        <el-col :span="8"><el-checkbox class="mr-10" v-model="remember"></el-checkbox ><span class="ml-10 cp">记住密码</span></el-col>
        <el-col :span="8" class="cp" @click.native="$router.push('/findPassword')">找回密码</el-col>
        <el-col :span="8" class="cp"><span  @click="register">注册</span></el-col>
      </el-row>
     </el-col>
   </el-row>
 </el-container>
</template>

<script>
export default {
  data() {
    return {
      userName:'',
      password:'',
      remember:false
    }
  },
  created(){
    this.getRemember()
  },
  methods: {
    async login(){
      if(!this.userName || !this.password) {
        console.log('aaa')
        return
      }
      let { data } = await this.$api.login({userName:this.userName,password:this.password,remember:this.remember})
      if(data.msg=='sucess') {
        this.$store.commit('setToken',data.token)
        localStorage.setItem('remember',this.remember)
        localStorage.setItem('userName',this.userName)
        localStorage.setItem('password',this.password)
        this.$router.push('/backend/dashboard')
      }
    },
    register() {
      this.$router.push('/register')
    },
    getRemember(){
      let remember = localStorage.getItem('remember')
      let uName =  localStorage.setItem('userName',this.userName)
      let upwd =   localStorage.setItem('password',this.password)
      if(remember){
        this.userName = uName
        this.password = upwd
        this.remember = remember
      }
    }
  }
}
</script>

<style lang="less">
.login {
  height: 100%;
  // background-image: url(../assets/img/login-bg.jpg);
  background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
  background-size: 100% 100%;
  .b-container {
    width: 600px;
    height: 300px;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.3);
    .b-left {
      border-radius: 5px 0 0 5px;
    }
    .item {
      line-height: 25px;
      text-align:left;
      display: block;
    }
    .b-input {
      width: 100%;
      height: 30px;
      line-height: 30px;
      padding: 5px;
      border-radius: 2px;
      box-sizing: border-box;
    }
    .btn-login {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background-color: #00cdac;
      color:#fff;
      border-radius: 5px;
    }
  }
}
</style>
