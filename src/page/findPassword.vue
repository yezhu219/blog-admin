<template>
  <el-container class="findPassword">
    <el-row class="find-step">
      <el-col class="pd-20 fz28 c-333 text-c header">
        Blog后台管理系统
      </el-col>
      <el-col class="mb-20 mt-20 step">
        <el-steps :active="step" align-center finish-status="success" >
          <el-step title="填写邮箱"  ></el-step>
          <el-step title="验证身份"  ></el-step>
          <el-step title="设置新密码" ></el-step>
          <el-step title="完成"  ></el-step>
        </el-steps>
      </el-col>
      <el-col v-if="step==0">
        <el-row class="step-mail mg-a">
          <el-col :span="10" class="lh-40 text-r">请输入邮箱：</el-col>
          <el-col :span="10"><el-input v-model.trim="email" @change="validateEmail"></el-input></el-col>
          <el-col class="text-c mt-20"><el-button type="success" @click="nextStep">下一步</el-button></el-col>
        </el-row>
      </el-col>
      <el-col v-if="step==1">
        <el-row class="step-mail mg-a">
          <el-col class="mb-20 text-c">已经向您的邮箱{{email}}发送了验证码，请登录邮箱查看验证码</el-col>
          <el-col :span="10" class="lh-40 text-r">请输入邮箱验证码：</el-col>
          <el-col :span="5"><el-input v-model.trim="authCode" @change="validateEmail"></el-input></el-col>
          <el-col class="text-c mt-20"><el-button type="success" @click="nextStep">下一步</el-button></el-col>
        </el-row>
      </el-col>
      <el-col v-if="step==2">
        <el-row class="step-mail mg-a">
          <el-col class="mb-20">
            <el-row>
              <el-col :span="10"  class="text-r lh-40">请输入密码：</el-col>
              <el-col :span="5"><el-input v-model="pwd" type="password"></el-input></el-col>
            </el-row>
          </el-col>
          <el-col>
            <el-row>
              <el-col :span="10" class="text-r lh-40">确认密码：</el-col>
              <el-col :span="5"><el-input v-model="cpwd" type="password"></el-input></el-col>
            </el-row>
          </el-col>
          <el-col class="text-c mt-20"><el-button type="success" @click="nextStep">下一步</el-button></el-col>
        </el-row>
      </el-col>
      <el-col v-if="step==3">
        <el-row class="step-mail text-c">
          <el-col  class="fz28 c-333 mb-20">密码已找回，请重新登录</el-col>
          <el-col><span class="fz20 pd-20 c-333 cp" @click="$router.push('/login')">返回登录</span></el-col>
        </el-row>
      </el-col>
    </el-row>

  </el-container>
</template>

<script>
export default {
  data() {
    return {
      step:0,
      email:'',
      authCode:'',
      pwd:'',
      cpwd:''
    }
  },
  methods: {
    validateEmail(){
       let res = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(this.email)
       console.log(res)
      return res
    },
   async nextStep() {
      if(!this.email||!this.validateEmail()) {
        this.$message({
          showClose:true,
          type:'error',
          message:'请输入正确的邮箱'
        })
        return
      }
      if(this.step==0){
       let res = await this.$api.getAuthCode({email:this.email})
         console.log(res,222)
       if(!res.data) {
         this.$message({
           showClose:true,
           type:'error',
           message:'验证码发送失败，请重试'
         })
         return
       }
      } 
      if(this.step==1) {
        let { data } = await this.$api.checkAuthCode({authCode:this.code,email:this.email})
        if(!data) {
          this.$message({
            showClose: true,
            type:'error',
            message:'验证码输入错误'
          })
          return
        }
      }
      if(this.step==2) {
        if(this.pwd!=this.cpwd) {
          this.$message({
            showClose:true,
            type:'error',
            message:'两次密码输入不一致，请重新输入'
          })
        }
      }
      if (this.step++ > 3) this.active = 3;
    }
  }
}
</script>

<style lang="less">
.findPassword {
    background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
  .find-step {
    width: 100%;
    // margin-top: 30px;
    // width: 80%;
    .header {
       box-shadow: 2px 2px 11px 3px rgba(0, 0, 0, 0.3);
    }
    .step {
      margin-top: 50px;
      margin-bottom: 100px;
    }
    .step-mail {
      // width: 500px;
    }
  }
}
</style>
