<template>
  <el-dialog title="修改密码"  :visible.sync="show" :center="true" @close="handleClose">
    <el-form :model="userInfo" :rules="rules" label-width="100px" label-position="right" ref="password">
      <el-form-item label="原密码：" prop="oldPwd">
        <el-input size="mini" type="password" v-model="userInfo.oldPwd"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="newPwd">
        <el-input size="mini" type="password" v-model="userInfo.newPwd"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="checkPwd">
        <el-input size="mini" type="password" v-model="userInfo.checkPwd"></el-input>
      </el-form-item>
    </el-form>
    <div class="text-c">
      <el-button type="primary" @click="submitPwd">提交</el-button>
    </div>   
  </el-dialog>
</template>


<script>
export default {
  props:{
    show:{
      type:Boolean,
      default: false
    }
  },
  data() {
    return {
      userInfo: {
        oldPwd:'',
        newPwd:'',
        checkPwd:''
      },
      rules:{
        oldPwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        newPwd: [
          { required: true, message: '请输入新密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
        checkPwd: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    handleClose(){
      this.$emit('close')
    },
    submitPwd() {
      this.$refs['password'].validate((valid) => {
          if (valid) {
            this.$emit('change',this.userInfo)
          } else {
            console.log('error submit!!');
            return false;
            
          }
        });
    }
  }

}
</script>

<style lang="less">
  
</style>