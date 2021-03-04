<template>
  <div>
    <div>
      <div>el-row last-child，必须是el-row父控件里的最后一个el-row才有效，其他控件无效</div>
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

export default {
  name: "LastChildCSS"
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
