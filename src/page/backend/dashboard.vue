<template>
  <div class="dashboard">
    <el-row>
      <el-col>文章总数</el-col>
      总点击数
      昨日点击数
      今日点击数
      
      
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
      
    }
  },
  created() {
    this.test(1,undefined)
  },
  methods: {
    test(a,b='2') {
      console.log(a,b)
    },
    changeBlur() {
      console.log(this.value,99)
    }
  }
}
</script>

<style lang="less">
.dashboard {
  background-color: #fff;
}
</style>
