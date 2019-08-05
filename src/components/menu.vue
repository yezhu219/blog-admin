<template>
 <el-menu>
   <template v-for="item in navList" :index=item.index>
     <el-menu-item :index="item.index" :key="item.index" v-if="!item.children">{{item.index}}</el-menu-item>

   </template>
 </el-menu>
</template>

<script>
export default {
  

}
</script>

<style lang="less">
  
</style>