<template>
  <div>
    <div class="container">
      <div class="topone"></div>
      <div class="top">
        <div class="nav w1160">
          <div class="leftNav">
            <!-- <img src="../../static/favicon.png" alt /> -->
            <ul>
              <li class="firstli">
                <div class="lazy-img">
                  <img src="../../static/index.png" alt />
                </div>
                <a href="#">主站</a>
              </li>
              <li>
                <a href="#">音频</a>
              </li>
              <li>
                <a href="#">游戏中心</a>
              </li>
              <li>
                <a href="#">直播</a>
              </li>
              <li>
                <a href="#">会员购</a>
              </li>
              <li>
                <a href="#">漫画</a>
              </li>
              <li>
                <a href="#">BML</a>
              </li>
              <li>
                <a href="#">70年</a>
              </li>
              <li class="firstli1">
                <div class="lazy-img">
                  <img src="../../static/phone.png" alt />
                </div>
                <a href="#">下载app</a>
              </li>
            </ul>
          </div>
          <div class="tg">
            <a href="//member.bilibili.com/v2#/upload/video/frame" target="_blank" class="u-link">投稿</a>
            <ul class="up-nav">
              <li>
                <a href="#">
                  <i class="icon i-art"></i>
                  <span>专栏投稿</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon i-ap"></i>
                  <span>音频投稿</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon i-vp"></i>
                  <span>视频投稿</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="icon i-vm"></i>
                  <span>投稿管理</span>
                </a>
              </li>
              <li class="current">
                <a href="#">
                  <i class="icon i-vc"></i>
                  <span>创作中心</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="rightNav">
            <a href="#" class="i-face">
              <img src="//static.hdslb.com/images/akari.jpg" alt />
            </a>
            <a href="#" class="his">历史</a>
          </div>
        </div>
      </div>
      <div class="nextbut w1160">
        <div
          class="logo"
          style="background-image:url(//i0.hdslb.com/bfs/archive/6592e92861e6248205af17702d06ea3f97d81de6.png);"
        ></div>
        <div class="search">
          <form class="searchform">
            <input
              type="text"
              autocomplete="off"
              accesskey="s"
              x-webkit-speech
              x-webkit-grammar="builtin:translate"
              placeholder="回顾经典！26首京阿尼动画歌曲"
              value
              class="search-keyword"
            />
            <button type="submit" class="search-submit"></button>
            <a href="//www.bilibili.com/ranking" target="_blank" class="link-ranking">
              <span>排行榜</span>
            </a>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
  overflow: hidden;
  width: 100%;
  height: 170px;
  // background: pink;
  background-image: url(http://i0.hdslb.com/bfs/archive/71ce8e8c22f5a6b8a2080cf30ef9f17d564d4462.png);
  background-position: center -10px;
  position: relative;
  .topone {
    position: absolute;
    top: 0;
    height: 42px;
    width: 100%;
    background-image: url(http://i0.hdslb.com/bfs/archive/71ce8e8c22f5a6b8a2080cf30ef9f17d564d4462.png);
    background-position: center -10px;
    filter: blur(3px);
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -ms-filter: blur(3px);
  }
  .top {
    position: absolute;
    top: 0;
    height: 42px;
    width: 100%;
    background-color: hsla(0, 0%, 100%, 0.4);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
}
.nav {
  height: 100%;
  z-index: 5;
  .leftNav {
    float: left;
    img {
      position: absolute;
      left: 0px;
      height: 21px;
      width: 20px;
      float: left;
    }
    ul {
      li {
        height: 100%;
        float: left;
        padding: 0 7px;
        font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
          Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
        a {
          display: block;
          line-height: 42px;
        }
        &:hover{
          background-color: hsla(0,0%,100%,.3);
        }
      }
      .firstli {
        position: relative;
        padding-left: 28px;
        .lazy-img {
          position: absolute;
          left: 3px;
          top: 9px;
        }
      }
      .firstli1 {
        position: relative;
        padding-left: 29px;
        .lazy-img {
          position: absolute;
          left: 0;
          top: 11px;
          margin-left: 10px;
          img {
            height: 18px;
            width: 18px;
          }
        }
      }
    }
  }
  .tg {
    float: right;
    margin-left: 8px;
    position: relative;
    width: 68px;
    height: 42px;
    .u-link {
      display: block;
      color: #fff;
      background-color: #f45a8d;
      width: 100%;
      height: 46px;
      line-height: 42px;
      text-align: center;
      font-size: 14px;
      border-radius: 0 0 6px 6px;
    }
    .up-nav {
      display: none;
      width: 340px;
      position: absolute;
      right: 0;
      top: 42px;
      // background-color: #fff;
      border-radius: 0 0 4px 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
      overflow: hidden;
      z-index: 1;
      li {
        float: left;
        cursor: pointer;
        text-align: center;
        width: 68px;
        height: 64px;
        transition: 0.2s;
        position: relative;
        background-color: #fff;
        a {
          color: #f25d8e;
          display: block;
          width: 100%;
          height: 100%;
          i {
            background-image: url("../../static/icons.png");
            display: block;
            width: 20px;
            height: 20px;
            margin: 15px auto 2px;
            transition: 0.2s;
          }
          .i-art {
            background-position: -534px -919px;
          }
          .i-ap {
            background-position: -534px -983px;
          }
          .i-vp {
            background-position: -471px -919px;
          }
          .i-vm {
            background-position: -471px -982px;
          }
          .i-vc {
            background-position: -471px -1751px;
          }
        }
        &:hover {
          background-color: #e5e9ef;
          a {
            i {
              margin-top: 12px;
              margin-bottom: 5px;
            }
          }
        }
      }
      .current {
        background-color: #e5e9ef;
        a {
          i {
            margin-top: 12px;
            margin-bottom: 5px;
          }
        }
      }
    }
    &:hover {
      .u-link {
        background-color: #fb7299;
      }
      .up-nav {
        display: block;
      }
    }
  }
  .rightNav {
    float: right;
    position: relative;
    width: 84px;
    height: 42px;
    .i-face {
      float: left;
      // display: inline-block;
      position: absolute;
      z-index: 20;
      width: 32px;
      height: 32px;
      left: 0;
      top: 0;
      transition: 0.3s;
      border-radius: 50%;
      overflow: hidden;
      margin-top: 5px;
      img {
        height: 32px;
        width: 32px;
      }
    }
    .his {
      // display: inline-block;
      float: right;
      display: block;
      padding: 0 7px;
      line-height: 42px;
    }
  }
}
.nextbut {
  height: 128px;
  margin: 0 auto;
  margin-top: 42px;
  position: relative;
  .logo {
    width: 220px;
    height: 105px;
    position: absolute;
    top: 13px;
    left: 24px;
  }
  .search {
    position: absolute;
    bottom: 20px;
    right: 0;
    width: 342px;
    height: 36px;
    padding: 2px 2px 2px 72px;
    background-color: #e5e9ef;
    background-color: rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    font-size: 12px;
    z-index: 10;
    .searchform {
      background-color: #fff;
      background-color: hsla(0, 0%, 100%, 0.88);
      display: block;
      height: 32px;
      border-radius: 4px;
      transition: background-color 0.2s;
      .search-keyword {
        float: left;
        width: 200px;
        color: #222;
        font-size: 12px;
        overflow: hidden;
        height: 32px;
        line-height: 32px;
        padding: 0 12px;
        border: 0;
        box-shadow: none;
        background-color: transparent;
      }
      .search-submit {
        display: block;
        position: absolute;
        right: 0;
        width: 48px;
        min-width: 0;
        cursor: pointer;
        height: 32px;
        background: url("../../static/icons.png") -653px -720px;
        margin: 0;
        padding: 0;
        border: 0;
      }
    }
    .link-ranking {
      position: absolute;
      left: 2px;
      top: 2px;
      height: 32px;
      line-height: 32px;
      background-color: #fff;
      background-color: hsla(0, 0%, 100%, 0.88);
      border-radius: 4px;
      width: 68px;
      transition: background-color 0.2s;
      span {
        padding-left: 26px;
        color: #f25d8e;
        display: inline-block;
        background: url("../../static/icons.png") -659px -655px
          no-repeat;
        line-height: 32px;
      }
    }
  }
}
</style>
