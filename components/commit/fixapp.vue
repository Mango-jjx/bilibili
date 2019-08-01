<template>
  <div class="home-app-download report-wrap-module" id="fixed_app_download">
    <div class="con w1160">
      <img
        src="//s1.hdslb.com/bfs/static/jinkela/home/asserts/ic_launcher.png"
        width="32"
        height="32"
      />
      <span>哔哩哔哩，发弹幕看视频必备App</span>
      <a href="//app.bilibili.com/" target="_blank" class="btn-down">下载</a>
      <i class="icon btn-close" @click="btnClose"></i>
    </div>
  </div>
</template>

<script>
export default {
    name:'index',
    methods: {
        btnClose(){
            this.$emit('closebtn')
        }
    },
};
</script>

<style lang="less" scoped>
.home-app-download {
  position: fixed;
  z-index: 3000;
  bottom: 0;
  background: #fff;
  width: 100%;
  height: 56px;
  box-shadow: 0 -1px 2px 0 #e7e7e7;
  .con {
    position: relative;
    text-align: center;
    line-height: 56px;
    font-size: 16px;
    span{
        font-size: 16px;
    }
    img {
      margin-right: 10px;
      vertical-align: middle;
    }
    .btn-down {
      display: inline-block;
      width: 58px;
      line-height: 24px;
      font-size: 12px;
      height: 24px;
      border: 1px solid #fb7299;
      border-radius: 4px;
      margin-left: 20px;
      color: #fb7299;
    }
    .btn-close {
      background: url("../../static/icons.png") no-repeat -538px -1881px;
      position: absolute;
      cursor: pointer;
      right: 0;
      top: 20px;
      width: 13px;
      height: 13px;
      display: inline-block;
    }
  }
}
</style>
