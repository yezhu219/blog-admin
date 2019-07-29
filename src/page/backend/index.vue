<template>
  <el-container>
    <el-header>header</el-header>
    <el-container>
      <el-aside width="200px">aside</el-aside>
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
export default {
  
}
</script>

<style lang="less">

</style>
