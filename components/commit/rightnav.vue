<template>
  <div class="report-wrap-module elevator-module">
    <div class="nav-bg">
      <div class="tips-img"></div>
    </div>
    <div id="nav-list">
      <a id="a11" class="item sortable" href="#a10">直播</a>
      <a id="a21" class="item sortable" href="#a20">动画</a>
      <a id="a31" class="item sortable" href="#a30">番剧</a>
      <a id="a41" class="item sortable" href="#a40">国创</a>
      <a id="a51" class="item sortable" href="#a50">音乐</a>
      <a id="a61" class="item sortable" href="#a60">舞蹈</a>
      <a id="a71" class="item sortable" href="#a70">游戏</a>
      <a id="a81" class="item sortable" href="#a80">科技</a>
      <a id="a91" class="item sortable" href="#a90">数码</a>
      <a id="a101" class="item sortable" href="#a100">生活</a>
      <a id="a111" class="item sortable" href="#a110">鬼畜</a>
      <a id="a121" class="item sortable" href="#a120">时尚</a>
      <a id="a131" class="item sortable" href="#a130">广告</a>
      <a id="a141" class="item sortable" href="#a140">娱乐</a>
      <a id="a151" class="item sortable" href="#a150">专栏</a>
      <a id="a161" class="item sortable" href="#a160">电影</a>
      <a id="a171" class="item sortable" href="#a170">TV剧</a>
      <a id="a181" class="item sortable" href="#a180">影视</a>
      <a id="a191" class="item sortable" href="#a190">纪录片</a>
      <div class="item customize">
        <i class="icon"></i>排序
      </div>
    </div>
    <div class="s-line"></div>
    <div class="back-top icon" @click="scrollTop"></div>
    <div class="app-download">
      <a href="//app.bilibili.com/?channel=home_recommend" target="_blank">
        <div
          id="elevator-mobile-app"
          class="app-icon"
          @mouseover="rotate"
          @mouseleave="rotateremove"
        ></div>
        <div class="app-tips-icon"></div>
      </a>
    </div>
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
import func from "d:/Git/web-vue/plugins/handleFunction";
import $ from "jquery";
export default {
  data() {
    return {
      timer: null,
      removertimer: null,
      ii: 0
    };
  },
  methods: {
    scrollTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    rotate() {
      clearInterval(this.removertimer);
      var appicon = $(".app-icon");
      var i = 0;
      var k = 14;
      var picWhith = 80;
      this.timer = setInterval(function() {
        if (i <= 14) {
          appicon.css("backgroundPositionX", -picWhith * i + "px");
          i++;
          this.ii = i;
          if (i > k) {
            i--;
            i--;
            i--;
            this.ii = i;
          }
        }
      }, 100);
    },
    rotateremove() {
      var appicon = $(".app-icon");
      // appicon.css("backgroundPositionX", "0px");
      clearInterval(this.timer);
      var picWhith = 80;
      this.removertimer = setInterval(function() {
        if (this.ii >= 0) {
          appicon.css("backgroundPositionX", -picWhith * this.ii + "px");
          this.ii--;
        } else {
          appicon.css("backgroundPositionX", "0px");
        }
      }, 100);
    }
  }
};
</script>

<style lang="less" scoped>
.elevator-module {
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 232px;
  margin-left: 590px;
  transition: top 0.3s;
  .icon {
    background-image: url("../../static/icons.png");
  }
  .nav-bg {
    opacity: 0;
    top: -15px;
    right: 0;
    height: 100%;
    padding-bottom: 20px;
    width: 60px;
    position: absolute;
    background: hsla(0, 0%, 100%, 0.8);
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    .tips-img {
      position: absolute;
      width: 117px;
      height: 333px;
      background: url(//s1.hdslb.com/bfs/static/jinkela/home/asserts/tab2233.png);
      left: 12px;
      top: 14px;
    }
  }
  #nav-list {
    position: relative;
    background-color: #f6f9fa;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
    .item {
      display: block;
      width: 48px;
      height: 28px;
      line-height: 30px;
      text-align: center;
      transition: background-color 0.3s, color 0.3s;
      cursor: pointer;
      -ms-user-select: none;
      user-select: none;
      &:hover {
        color: #fff;
        background-color: #00a1d6;
      }
    }
    .on {
      background-color: #00a1d6;
      color: #fff;
    }
    .customize {
      height: 55px;
      line-height: 20px;
      padding: 8px 0;
      border-top: 1px solid #e5e9ef;
      .icon {
        display: block;
        margin: 0 auto 4px;
        background-position: -663px -151px;
        height: 18px;
        width: 18px;
      }
    }
  }
  .s-line {
    position: relative;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    height: 9px;
    width: 30px;
    margin: 0 auto;
  }
  .back-top {
    position: relative;
    display: block;
    cursor: pointer;
    height: 48px;
    background-color: #f6f9fa;
    background-position: -648px -72px;
    border: 1px solid #e5e9ef;
    overflow: hidden;
    border-radius: 4px;
    &:hover {
      color: #fff;
      background-color: #00a1d6;
    }
  }
  .app-download {
    position: relative;
    width: 50px;
    height: 70px;
    .app-icon {
      position: absolute;
      left: -15px;
      width: 80px;
      height: 80px;
      background-image: url("../../static/app-download.png");
      // &:hover {
      //   // animation: frame 3s steps(16,start) 0ms 1 alternate;
      //   background-position-x:-1120px;
      // }
    }
    // @keyframes frame {
    //   from {
    //     background-position-x: 0;
    //   } //可省略
    //   to {
    //     background-position-x: -1120px;
    //   }
    // }
    .app-tips-icon {
      position: absolute;
      left: -110px;
      top: -20px;
      width: 106px;
      height: 44px;
      background-image: url("../../static/app-download-tips.png");
      opacity: 0;
      transition: opacity 0.5s;
    }
    &:hover {
      .app-tips-icon {
        opacity: 1;
      }
    }
  }
}
</style>
