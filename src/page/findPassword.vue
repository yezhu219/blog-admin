<template>
  <el-container class="findPassword">
    <el-row class="find-step mg-a">
      <el-col class="mb-20 step">
        <el-steps :active="step" align-center finish-status="success" >
          <el-step title="填写邮箱"  ></el-step>
          <el-step title="验证身份"  ></el-step>
          <el-step title="设置新密码" ></el-step>
          <el-step title="完成"  ></el-step>
        </el-steps>
      </el-col>
      <el-col v-if="step==0">
        <el-row class="step-mail mg-a">
          <el-col :span="6" class="lh-40">请输入邮箱：</el-col>
          <el-col :span="18"><el-input v-model.trim="email" @change="validateEmail"></el-input></el-col>
          <el-col class="text-c mt-20"><el-button type="primary" @click="nextStep">下一步</el-button></el-col>
        </el-row>
      </el-col>
      <el-col v-if="step==1">
        <el-row class="step-mail mg-a">
          <el-col class="mb-20">已经向您的邮箱{{email}}发送了验证码，请登录邮箱查看验证码</el-col>
          <el-col :span="10" class="lh-40 text-r">请输入邮箱验证码：</el-col>
          <el-col :span="10"><el-input v-model.trim="email" @change="validateEmail"></el-input></el-col>
          <el-col class="text-c mt-20"><el-button type="primary" @click="nextStep">下一步</el-button></el-col>
        </el-row>
      </el-col>
      <el-col v-if="step==2">3</el-col>
      <el-col v-if="step==3">4</el-col>
    </el-row>

  </el-container>
</template>

<script>
export default {
  data() {
    return {
      step:0,
      email:''
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
      if (this.step++ > 3) this.active = 3;
    }
  }
}
</script>

<style lang="less">
.findPassword {
  .find-step {
    margin-top: 30px;
    width: 80%;
    .step {
      margin-bottom: 100px;
    }
    .step-mail {
      width: 500px;
    }
  }
}
</style>
