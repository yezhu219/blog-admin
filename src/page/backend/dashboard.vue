<template>
  <div>
        <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  <h1>{{value}}</h1>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value:''
      }
    },
    created(){
      this.getDay()
    },
    methods: {
      getDay(){
        let lastMonth = new Date().getMonth()
        let time= new Date(`2019.${lastMonth+1}.1 00:00`).getTime()-new Date(`2019.${lastMonth}.1 00:00`).getTime()
        let day = time/24/60/60/1000
        this.value=[`2019.${lastMonth}.1`,`2019.${lastMonth}.${day}`]
      }
    }
  }
</script>