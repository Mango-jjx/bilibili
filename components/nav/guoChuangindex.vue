<template>
  <div class="tg w1160">
    <div class="navtg">
      <div class="left">
        <div class="topNav">
          <div class="bgimg"></div>
          <a class="name" href="//www.bilibili.com/anime/" target="_blank">国创</a>
          <div class="topNum">
            <div class="bili-tab-item on">最新</div>
            <div class="bili-tab-item">一</div>
            <div class="bili-tab-item">二</div>
            <div class="bili-tab-item">三</div>
            <div class="bili-tab-item">四</div>
            <div class="bili-tab-item">五</div>
            <div class="bili-tab-item">六</div>
            <div class="bili-tab-item">日</div>
          </div>
          <div class="more">
            <a href="//www.bilibili.com/anime/timeline/">
              新番时间表
              <i class="icon"></i>
            </a>
          </div>
        </div>
        <div class="bottomImg">
          <div class="spread-module">
            <a href="//www.bilibili.com/bangumi/play/ss26288/" class="imgshow">
              <div class="lazy-img">
                <img
                  src="//i0.hdslb.com/bfs/bangumi/b6651d622df28c2d562332340ee135d112afbec1.jpg@72w_72h.webp"
                  alt
                />
              </div>
            </a>
            <div class="r_text">
              <a href="//www.bilibili.com/bangumi/play/ss26288/" class="toptext">垂直世界之地中海美少年</a>
              <p class="update">
                <a href="//www.bilibili.com/bangumi/play/ep278469/">第7话</a>
              </p>
            </div>
          </div>
          <div class="spread-module">
            <a href="//www.bilibili.com/bangumi/play/ss28092/" class="imgshow">
              <div class="lazy-img">
                <img
                  src="//i0.hdslb.com/bfs/bangumi/3e666f5c6c74c0189bf4de2fdc1145f2b9aafd94.jpg@72w_72h.webp"
                  alt
                />
              </div>
            </a>
            <div class="r_text">
              <a href="//www.bilibili.com/bangumi/play/ss28092/" class="toptext">战国千年 动态漫</a>
              <p class="update">
                <a href="//www.bilibili.com/bangumi/play/ep278467/">第3话</a>
              </p>
            </div>
          </div>
          <div class="spread-module">
            <a href="//www.bilibili.com/bangumi/play/ss25469/" class="imgshow">
              <div class="lazy-img">
                <img
                  src="//i0.hdslb.com/bfs/bangumi/8b365a47e8be724abc99961b978fa1b977373014.jpg@72w_72h.webp"
                  alt
                />
              </div>
            </a>
            <div class="r_text">
              <a href="//www.bilibili.com/bangumi/play/ss25469/" class="toptext">如果历史是一群喵</a>
              <p class="update">
                <a href="//www.bilibili.com/bangumi/play/ep277040/">第29话</a>
              </p>
            </div>
          </div>
          <div class="spread-module">
            <a href="//www.bilibili.com/bangumi/play/ss26228/" class="imgshow">
              <div class="lazy-img">
                <img
                  src="//i0.hdslb.com/bfs/bangumi/cf12b6c3a7f633c5627a17e04c8b8f5a4d857b40.jpg@72w_72h.webp"
                  alt
                />
              </div>
            </a>
            <div class="r_text">
              <a href="//www.bilibili.com/bangumi/play/ss26228/" class="toptext">汉化日记</a>
              <p class="update">
                <a href="//www.bilibili.com/bangumi/play/ep278426/">第1话~第2话</a>
              </p>
            </div>
          </div>
          <div class="spread-module">
            <a href="//www.bilibili.com/bangumi/play/ss26829/" class="imgshow">
              <div class="lazy-img">
                <img
                  src="//i0.hdslb.com/bfs/bangumi/72cb74138a75c6f121be3a43ab31f464f915725a.jpg@72w_72h.webp"
                  alt
                />
              </div>
            </a>
            <div class="r_text">
              <a href="//www.bilibili.com/bangumi/play/ss26829/" class="toptext">绝命响应</a>
              <p class="update">
                <a href="//www.bilibili.com/bangumi/play/ep278376/">第9话</a>
              </p>
            </div>
          </div>
          <div class="spread-module">
            <a href="//www.bilibili.com/bangumi/play/ss27796/" class="imgshow">
              <div class="lazy-img">
                <img
                  src="//i0.hdslb.com/bfs/bangumi/e978de03c339cf686f3f94654b32a15b2d15224d.jpg@72w_72h.webp"
                  alt
                />
              </div>
            </a>
            <div class="r_text">
              <a href="//www.bilibili.com/bangumi/play/ss27796/" class="toptext">阿衰</a>
              <p class="update">
                <a href="//www.bilibili.com/bangumi/play/ep272316/">第25话</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <guochuang></guochuang>
      </div>
    </div>
  </div>
</template>

<script>
import guochuang from "../ranking/guochuang";
export default {
  components: { guochuang }
};
</script>

<style lang="less" scoped>
.tg {
  zoom: 1;
  margin-bottom: 21px;
  &:after {
    display: block;
    clear: both;
    content: "";
    visibility: hidden;
    height: 0;
  }
  .left {
    width: 900px;
    .topNav {
      //   overflow: hidden;
      padding-right: 20px;
      zoom: 1;
      position: relative;
      &:after {
        display: block;
        clear: both;
        content: "";
        visibility: hidden;
        height: 0;
      }
      .topNum {
        overflow: hidden;
        width: 650px;
        height: 30px;
        line-height: 30px;
        .bili-tab-item {
          width: 78px;
          padding: 2px 4px 7px;
          float: left;
          position: relative;
          line-height: 20px;
          text-align: center;
          font-size: 18px;
          cursor: pointer;
          border-bottom: 1px solid #e5e9ef;
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
      .bgimg {
        height: 40px;
        width: 40px;
        margin-right: 10px;
        float: left;
        background: url("../../static/icons.png") no-repeat -140px -1611px;
        margin-top: -10px;
      }
      .name {
        font-size: 24px !important;
        line-height: 24px;
        font-weight: 400;
        margin-right: 20px;
        float: left;
        margin-top: 0;
        margin-left: 0;
        padding-right: 0px;
        color: #222;
      }
      a {
        float: left;
        margin-top: 8px;
        color: #6d757a;
        position: relative;
        span {
          color: #00a1d6;
        }
      }
      .fire {
        margin-left: 40px;
        padding-right: 10px;
        .icon {
          background: url("../../static/icons.png") no-repeat -665px -1113px;
          display: inline-block;
          vertical-align: top;
          width: 14px;
          height: 14px;
          margin-top: 1px;
          margin-right: 3px;
        }
        &:hover {
          color: #00a1d6;
        }
      }
      .more {
        position: absolute;
        bottom: 0;
        right: 20px;
        width: 106px;
        height: 36px;
        line-height: 36px;
        background-color: #fff;
        border: 1px solid #f25d8e;
        border-radius: 4px;
        text-align: center;
        transition: all 0.2s;
        a {
          font: 14px Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
            Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
          display: block;
          width: 100%;
          height: 100%;
          margin-top: 0;
          line-height: 34px;
          color: #f25d8e;
          .icon {
            height: 12px;
            display: inline-block;
            background: url("../../static/icons.png") no-repeat -478px -281px;
            width: 6px;
            margin: -2px 0 0;
            vertical-align: middle;
          }
          &:hover {
            background-color: #f25d8e;
            color: #fff;
            .icon {
              background: url("../../static/icons.png") no-repeat -541px -218px;
            }
          }
        }
      }
    }
    .bottomImg {
      margin:26px 20px 40px 0;
      // height: 398px;
      overflow: hidden;
      .spread-module {
        overflow: hidden;
        float: left;
        margin-right: 34px;
        margin-top: 36px;
        &:first-child{
          margin-top: 0;
        }
        &:nth-child(2){
          margin-top: 0;
        }
        &:nth-child(3){
          margin-top: 0;
        }
        &:nth-child(4){
          margin-top: 0;
        }
        a {
          display: block;
        }
        .imgshow {
          float: left;
          margin-right: 12px;
        }
        .lazy-img {
          height: 72px;
          width: 72px;
          border-radius: 4px;
          overflow: hidden;
          img {
            height: 100%;
            width: 100%;
          }
        }
        .r_text {
          width: 96px;
          height: 72px;
          float: left;
          position: relative;
          .toptext {
            color: #222;
            overflow: hidden;
            height: 36px;
            line-height: 18px;
            text-align: left;
            width: 100%;
            margin-top: -3px;
            word-wrap: break-word;
            -webkit-line-clamp: 2;
          }
          .update{
            position: absolute;
            bottom: 0;
            text-align: left;
            margin-top: 2px;
            left: 0;
            white-space: nowrap;
            line-height: 18px;
            a{
              color: #fff;
              border-radius: 9px;
              display: inline-block;
              vertical-align: top;
              text-align: center;
              padding: 0 4px;
              height: 18px;
              line-height: 18px;
              min-width: 28px;
              max-width: 89px;
              text-overflow: ellipsis;
              overflow: hidden;
              background-color: #ff8eb3;
            }
          }
        }
        &:hover{
          .toptext{
            color:#00a1d6;
          }
        }
      }
    }
  }
  .right {
    width: 260px;
  }
}
</style>
