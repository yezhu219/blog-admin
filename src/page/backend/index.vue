<template>
  <el-container class="backend-index">
    <el-header class="header box-s2">
      <b-header></b-header>
    </el-header>
    <el-container>
      <el-aside width="150px" class="box-s2">
        <el-menu background-color="#8ddad5" class="b-aside">
          <el-menu-item>首页</el-menu-item>
          <el-menu-item>文章管理</el-menu-item>
          <el-menu-item>爬取文章</el-menu-item>
          <el-menu-item>系统设置</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer> footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>


<script>
import bHeader from '@/components/b-header'
import bAside from '@/components/b-aside'
export default {
  data() {
    return {


    }
  },
  components: {
    bHeader,
    bAside,
  },
  methods: {

  }

}
</script>

<style lang="less">
.backend-index {
  .header {
    background-color: #8ddad5;
    margin-bottom: 2px;
  }
  .b-aside {
    height: 100%;
  }
}
</style>
