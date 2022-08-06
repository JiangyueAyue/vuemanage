<template>
  <el-container>
    <el-aside width="200px">
      <common-aside></common-aside>
    </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
  </el-container>
  
</template>

<script>
import CommonAside from '../src/components/CommonAside/CommonAside.vue'
export default {
  components: { CommonAside },
  name: 'nameHome',
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
el-header {
  height: 20px;
  background-color: black;
}
</style>
<style>
/* #oj {
  background-color: black;
} */
</style>