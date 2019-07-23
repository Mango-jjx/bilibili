<template>
  <div>
    <div class="navMain">
      <h3 class="numTop">排行</h3>
      <div class="topNum">
        <div class="bili-tab-item on">全部</div>
        <div class="bili-tab-item">原创</div>
      </div>
      <div class="select">
        <span class="selected">三日</span>
        <i class="icon"></i>
        <ul class="drop">
          <li class="drop-item">三日</li>
          <li class="drop-item">一周</li>
        </ul>
      </div>
    </div>
    <div class="bottomPro">
      <div class="adpos">
        <ul class="rank-list">
          <li class="rank-item highlight show-detail">
            <i class="ri-num">1</i>
            <a href="#">
              <div class="lazy-img">
                <img
                  src="//i1.hdslb.com/bfs/archive/58949e02d2fdefc5822ed18686f0b0e7d6ee56ca.jpg@80w_50h.webp"
                  alt
                />
                <div class="watch"></div>
              </div>
              <div class="rldetail">
                <p class="ri-title">当我拔剑的那一刻，全世界都将为之颤抖！！！</p>
                <p class="ri-point">综合评分：216.4万</p>
              </div>
            </a>
          </li>
          <li class="rank-item highlight">
            <i class="ri-num">2</i>
            <a href="#">【崩坏3】布洛妮娅的上学路</a>
          </li>
          <li class="rank-item highlight">
            <i class="ri-num">3</i>
            <a href="#">七月最神奇动画！制作穷到爆笑却造就B站最强人气！？</a>
          </li>
          <li class="rank-item">
            <i class="ri-num">4</i>
            <a href="#">银灰领衔主演　罗德岛沙雕广告</a>
          </li>
          <li class="rank-item">
            <i class="ri-num">5</i>
            <a href="#">7分钟带你了解崩坏3“男主角”布洛妮娅，以及崩坏游戏主线剧情！</a>
          </li>
          <li class="rank-item">
            <i class="ri-num">6</i>
            <a href="#">不可忽视的外在力量</a>
          </li>
          <li class="rank-item">
            <i class="ri-num">7</i>
            <a href="#">AWSL！肌肉少女竟然还有真人版！这下真的是猛男必看了！【新番咋了第二季06】</a>
          </li>
        </ul>
      </div>
      <div class="anchor">
          <a href="https://www.bilibili.com/ranking/all/1/1/3/?spm_id_from=333.334.b_72616e6b696e675f646f756761.8" target="_blank">查看更多<i class="icon"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.navMain {
  zoom: 1;
  &:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .numTop {
    float: left;
    font-size: 18px;
    font-weight: 400;
  }
  .topNum {
    overflow: hidden;
    float: left;
    margin-left: 20px;
    .bili-tab-item {
      float: left;
      position: relative;
      height: 24px;
      line-height: 20px;
      margin-left: 12px;
      cursor: pointer;
      padding: 1px 0 2px;
      border-bottom: 1px solid transparent;
      transition: 0.2s;
      transition-property: border, color;
      &:first-child {
        margin-left: 0;
      }
      &:before {
        content: "";
        display: none;
        position: absolute;
        left: 50%;
        margin-left: -3px;
        bottom: 0;
        width: 0;
        border-bottom: 3px solid #00a1d6;
        border-top: 0;
        border-left: 3px dashed transparent;
        border-right: 3px dashed transparent;
      }
      &.on {
        background-color: transparent;
        border-color: #00a1d6;
        color: #00a1d6;
        &::before {
          display: block;
        }
      }
    }
  }
  .select {
    position: relative;
    float: right;
    background-color: #fff;
    cursor: default;
    padding: 0 7px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #ccd0d7;
    border-radius: 4px;
    &:hover {
      .drop {
        display: block;
      }
    }
    .selected {
      display: inline-block;
      vertical-align: top;
      line-height: 22px;
    }
    .icon {
      background: url("../../static/icons.png") no-repeat -475px -157px;
      display: inline-block;
      vertical-align: middle;
      width: 12px;
      height: 6px;
      margin-left: 5px;
      margin-top: -1px;
    }
    .drop {
      position: absolute;
      width: 57px;
      background: #fff;
      border: 1px solid #ccd0d7;
      border-top: 0;
      left: -1px;
      top: 20px;
      z-index: 10;
      border-radius: 0 0 4px 4px;
      display: none;
      .drop-item {
        cursor: pointer;
        margin: 0;
        padding: 3px 7px;
        line-height: 22px;
        &:hover {
          background-color: #e5e9ef;
        }
      }
    }
  }
}

.bottomPro {
  .adpos {
    margin-top: 20px;
    border-radius: 4px;
    overflow: hidden;
    width: 260px;
    // height: 248px;
    position: relative;
    margin-bottom: 15px;
    .rank-list {
      .rank-item {
        position: relative;
        zoom: 1;
        margin-top: 20px;
        &:after {
          display: block;
          content: "";
          clear: both;
          visibility: hidden;
          height: 0;
        }
        i {
          height: 18px;
          background-color: #b8c0cc;
          color: #fff;
          line-height: 18px;
          position: absolute;
          top: 0;
          left: 0;
          font-size: 12px;
          width: 18px;
          text-align: center;
          border-radius: 4px;
          padding: 0 3px;
          font-weight: bold;
          font-style: normal;
        }
        a {
          display: block;
          float: left;
          margin-left: 25px;
          overflow: hidden;
          height: 18px;
        }
        &:first-child {
          margin-top: 0;
          a{
              height: 50px;
          }
        }
      }
      .highlight {
        i {
          background-color: #f25d8e;
        }
      }
      .show-detail {
        .lazy-img {
          float: left;
          margin-right: 5px;
          position: relative;
          border-radius: 4px;
          overflow: hidden;
          width: 80px;
          height: 50px;
          img{
              height: 100%;
              width: 100%;
          }
          .watch {
            background: url("../../static/clack.png") no-repeat;
            position: absolute;
            bottom: 5px;
            right: 5px;
            width: 22px;
            height: 22px;
            display: none;
          }
        }
        .rldetail {
          float: left;
          .ri-title {
            height: 36px;
            line-height: 18px;
            margin-top: -3px;
            width: 150px;
            padding: 0;
            color: #222;
            overflow: hidden;
          }
          .ri-point {
            display: block;
            line-height: 12px;
            color: #99a2aa;
            height: 12px;
            margin-top: 5px;
            overflow: hidden;
          }
        }
        &:hover {
          .ri-title {
            color: #00a1d6;
          }
          .watch {
            display: block;
          }
        }
      }
    }
  }
  .anchor {
    width: 260px;
    height: 26px;
    border-radius: 4px;
    overflow: hidden;
    a{ 
        height: 100%;
        display: block;
        background-color: #e5e9ef;
        border: 1px solid #e0e6ed;
        text-align: center;
        line-height: 24px;
        color:#222;
        i{
            background: url("../../static/icons.png") no-repeat -478px -218px;
            height: 12px;
            width: 6px;
            display: inline-block;
            margin: -2px 0 0 5px;
            vertical-align: middle;
        }
    }
  }
}
</style>
