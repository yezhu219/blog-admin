<template>
  <el-container class="register">
    <el-row class="pr" style="width:100%;">
      <el-col class="pd-20 fz28 c-333 text-c header">
        Blog后台管理系统
      </el-col>
      <el-col>
         <el-form :model="user" ref="user" label-width="100px" label-position="left" :rules="rules" size="mini" class="info-box box-s1 c-333">
          <el-row class="text-c fz28 c-333 mb-20">用户注册</el-row>
          <el-form-item label="用户名:" prop="uName">
            <el-input  v-model="user.uName"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="pwd">
            <el-input v-model="user.pwd" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码:" prop="cpwd">
            <el-input v-model="user.cpwd" type="password"></el-input>
          </el-form-item>
          <el-row class="text-c">
            <el-button type="primary" @click="submit(user)">注册</el-button>
            <el-button type="danger" @click="$router.push('/login')">返回</el-button>
          </el-row>
        </el-form>
      </el-col>
    </el-row>
   
  </el-container>
</template>

<script>
export default {
  data() {
      let validateUserName = async (rule,value,callback) => {
        if(value== '') {
          callback(new Error('请输入用户名'))
        }else {
          const res = await this.$api.checkUserName({userName:value})
          if(!res.data) {
            callback(new Error('用户名已被注册，请更换用户名'))
          }else {
            callback()
          }
        }
      }
      let validatePass = (rule, value, callback) => {
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
          { min:5,message:'用户名长度必须大于5',trigger:'blur'},
          {validator: validateUserName,trigger:'blur'},
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
          this.$api.register(this.user).then(res=>{
            if( res.data.msg == 'sucess') {
              this.$router.push('/login')
            }
          })
        }else {
          console.log('验证失败')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less">
.register {
   height: 100%;
  background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
  .header {
    // background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);
    box-shadow: 2px 2px 11px 3px rgba(0, 0, 0, 0.3);
  }
  .info-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 400px;
    padding: 30px;
    background-color: rgba(0,0,0,.3);
  }
}
</style>
