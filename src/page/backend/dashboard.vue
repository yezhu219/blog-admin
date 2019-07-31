<template>
  <div>
    dashboard
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