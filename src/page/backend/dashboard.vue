<template>
  <div>
    dashboard
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
    }
  }
}
</script>

<style lang="less">

</style>
