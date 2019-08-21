<template>
  <el-row class="b-header">
    <el-col :span="3"><img src="../assets/img/logo.png" class="logo"></el-col>
    <el-col :span="13"> BLOG管理系统</el-col>
    <el-col :span="8" class="fz14 c-333 text-r">
      <el-col :span="15">
        <el-input size="mini" class="va-m" v-model="searchValue" placeholder="关键词：标题、作者、文章内容">
          <el-button slot="append" icon="el-icon-search" type="primary " @click="search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="9" class="text-r">
        <el-avatar :size="30" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" class="va-m"></el-avatar>
        <el-dropdown >
            <span>yezhu219<i class="el-icon-arrow-down"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
  </el-row>
</template>



<script>
export default {
  data() {
    return {
      searchValue:''
    }
  },
  methods: {
    search() {
     this.$emit('search',this.searchValue)
    }
  }
}
</script>


<style lang="less">
.b-header {
  height: 60px;
  line-height: 60px;
  .logo {
    height: 60px;
  }
}
</style>