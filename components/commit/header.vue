<template>
  <div>
    <div class="container">
      <div class="topone"></div>
      <div class="top">
        <div class="nav w1160">
          <div class="leftNav">
            <!-- <img src="../../static/favicon.png" alt /> -->
            <ul>
              <li>
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
              <li>
                <a href="#">下载app</a>
              </li>
            </ul>
          </div>
          <div class="rightNav">
            <a href="#">
              <img src="../../static/favicon.png" alt />
            </a>
            <a href="#">历史</a>
            <a href="#">投稿</a>
          </div>
        </div>
      </div>
      <div class="next"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
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
      }
    }
  }
  .rightNav {
    float: right;
    a {
      display: block;
      float: left;
      img {
        height: 32px;
        width: 32px;
      }
    }
  }
}
</style>
