<template>
  <el-container>
    <el-form :model="user" ref="user" label-width="100px" :rules="rules" size="mini" class="info-box">
      <el-form-item label="用户名:" prop="uName">
        <el-input  v-model="user.uName"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pwd">
        <el-input v-model="user.pwd" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码:" prop="cpwd">
        <el-input v-model="user.cpwd" type="password"></el-input>
      </el-form-item>
      <el-form-item class="text-c">
        <el-button type="primary" @click="submit(user)">注册</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  data() {
    
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.user.pwd) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      user: {
        uName:'',
        pwd:'',
        cpwd:''
      },
      rules:{
        uName:[
          { required: true, message:'请输入用户名',trigger:'blur'},
          { min:5,message:'用户名长度必须大于5',trigger:'blur'}
        ],
        pwd:[
          { required: true, message:'请输入密码',trigger:'blur'},
          { min:6,message:'密码长度必须大于6',trigger:'blur'}
        ],
        cpwd:[
          {validator: validatePass,trigger:'blur'},
          { required: true, message:'请输入密码',trigger:'blur'},
        ],
      }
    }
  },
  methods: {
    submit(user) {
      this.$refs.user.validate(valid=> {
        if(valid) {
          console.log(valid)
        }else {
          console.log('验证失败')
          return false
        }
      })
    }
      //  submit(formName) {
      //    console.log(this.$refs.user)
      //   this.$refs[formName].validate((valid) => {
      //     if (valid) {
      //       alert('submit!');
      //     } else {
      //       console.log('error submit!!');
      //       return false;
      //     }
      //   });
      // },
  }
}
</script>

<style lang="less">
.info-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 400px;
  margin: 0 auto;
  padding: 0 30px;
}
</style>
