<template>
  <div>
    <div>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6" :offset="6"
          ><div class="grid-content bg-purple"></div
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :span="6" :offset="6"
          ><div class="grid-content bg-purple"></div
        ></el-col>
      </el-row>
      <div>最后一行不能是其他的元素，必须是el-row时，last-child才能有作用</div>
      <el-row :gutter="20">
        <el-col :span="12" :offset="6"
          ><div class="grid-content bg-purple"></div
        ></el-col>
      </el-row>
    </div>
    <div>haha</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }
};
</script>

<style lang="scss">
.el-row {
  background-color: blue;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0px;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
