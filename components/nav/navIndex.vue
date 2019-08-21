<template>
  <div class="swiperNews w1160">
    <!-- 左边轮播图 -->
    <div class="leftSwiper">
      <div class="block">
        <el-carousel trigger="click" height="220px" arrow="never" @change="onChange">
          <el-carousel-item v-for="item in list" :key="item.index">
            <h3 class="small">
              <a>
                <img :src="item.src" alt />
                <a class="dis">{{item.tit}}</a>
                <div class="trans"></div>
              </a>
            </h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="more">
        <a href="//www.bilibili.com/blackboard/topic_list.html">更多</a>
      </div>
    </div>
    <!-- 右边图片 -->
    <div class="rightImage">
      <div class="groom-box-m">
        <div class="groom-module">
          <a href="#">
            <div class="lazy-im">
              <img
                src="https://i1.hdslb.com/bfs/archive/932ff0bd3d8a341cc4ef6c75818aa1558b4d4984.jpg@160w_100h.webp"
                alt
              />
              <div class="card-mark">
                <p class="title">【百合花开/橘里橘气】橘势大好，小鹿乱撞的糖心橘子。</p>
              </div>
              <div class="video">
                <p class="tlt">据说每观看这个视频一遍 世界就</p>
                <p class="author">up主：少恭胤</p>
                <p class="num">播放：19.3万</p>
                <div class="clock"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="groom-module">
          <a href="#">
            <div class="lazy-im">
              <img
                src="https://i1.hdslb.com/bfs/archive/c9ce13f60c0a4aadea3d95a77d89ebd14fc7d0fa.png@160w_100h.webp"
                alt
              />
              <div class="card-mark">
                <p class="title">【百合花开/橘里橘气】橘势大好，小鹿乱撞的糖心橘子。</p>
              </div>
              <div class="video">
                <p class="tlt">据说每观看这个视频一遍 世界就</p>
                <p class="author">up主：少恭胤</p>
                <p class="num">播放：19.3万</p>
                <div class="clock"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="groom-module">
          <a href="#">
            <div class="lazy-im">
              <img
                src="https://i0.hdslb.com/bfs/archive/819cf70b33eee9360f678f7994ae0c751f4611ac.jpg@160w_100h.webp"
                alt
              />
              <div class="card-mark">
                <p class="title">【百合花开/橘里橘气】橘势大好，小鹿乱撞的糖心橘子。</p>
              </div>
              <div class="video">
                <p class="tlt">据说每观看这个视频一遍 世界就</p>
                <p class="author">up主：少恭胤</p>
                <p class="num">播放：19.3万</p>
                <div class="clock"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="groom-module">
          <a href="#">
            <div class="lazy-im">
              <img
                src="https://i2.hdslb.com/bfs/archive/daf428bd42e57732ff9d2efcc4c052ad5990d695.jpg@160w_100h.webp"
                alt
              />
              <div class="card-mark">
                <p class="title">【百合花开/橘里橘气】橘势大好，小鹿乱撞的糖心橘子。</p>
              </div>
              <div class="video">
                <p class="tlt">据说每观看这个视频一遍 世界就</p>
                <p class="author">up主：少恭胤</p>
                <p class="num">播放：19.3万</p>
                <div class="clock"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="groom-module">
          <a href="#">
            <div class="lazy-im">
              <img
                src="https://i0.hdslb.com/bfs/archive/d8a03f41646c1694676aa8a6dbca203332d3a404.jpg@160w_100h.webp"
                alt
              />
              <div class="card-mark">
                <p class="title">【百合花开/橘里橘气】橘势大好，小鹿乱撞的糖心橘子。</p>
              </div>
              <div class="video">
                <p class="tlt">据说每观看这个视频一遍 世界就</p>
                <p class="author">up主：少恭胤</p>
                <p class="num">播放：19.3万</p>
                <div class="clock"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="groom-module">
          <a href="#">
            <div class="lazy-im">
              <img
                src="https://i1.hdslb.com/bfs/archive/a3b13c95a2b2a738407a9b46c3054fcd545de29e.jpg@160w_100h.webp"
                alt
              />
              <div class="card-mark">
                <p class="title">【百合花开/橘里橘气】橘势大好，小鹿乱撞的糖心橘子。</p>
              </div>
              <div class="video">
                <p class="tlt">据说每观看这个视频一遍 世界就</p>
                <p class="author">up主：少恭胤</p>
                <p class="num">播放：19.3万</p>
                <div class="clock"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="groom-module">
          <a href="#">
            <div class="lazy-im">
              <img
                src="https://i1.hdslb.com/bfs/archive/6f4700d3e28fb6f4238724410667edd6c0e8a8af.jpg@160w_100h.jpg"
                alt
              />
              <div class="card-mark">
                <p class="title">【百合花开/橘里橘气】橘势大好，小鹿乱撞的糖心橘子。</p>
              </div>
              <div class="video">
                <p class="tlt">据说每观看这个视频一遍 世界就</p>
                <p class="author">up主：少恭胤</p>
                <p class="num">播放：19.3万</p>
                <div class="clock"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="groom-module">
          <a href="#">
            <div class="lazy-im">
              <img
                src="https://i0.hdslb.com/bfs/archive/2aec7eb088ce5d29e4189a89ff731144ade5b615.jpg@160w_100h.jpg"
                alt
              />
              <div class="card-mark">
                <p class="title">【百合花开/橘里橘气】橘势大好，小鹿乱撞的糖心橘子。</p>
              </div>
              <div class="video">
                <p class="tlt">据说每观看这个视频一遍 世界就</p>
                <p class="author">up主：少恭胤</p>
                <p class="num">播放：19.3万</p>
                <div class="clock"></div>
              </div>
            </div>
          </a>
        </div>
        <div class="rec-btn prev">昨日</div>
        <div class="rec-btn nextweek">一周</div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "index",
  data() {
    return {
      list: [
        {
          src:
            "//i0.hdslb.com/bfs/archive/9387557d690844b91ba2b911f4d571c8f62e15e6.png@880w_440h.png",
          tit: "用了靓仔取名器就可以变靓仔么？！"
        },
        {
          src:
            "https://i0.hdslb.com/bfs/sycp/creative_img/201907/be946855da29c30f9a27e4de02d2b714.jpg@880w_440h.jpg",
          tit: "现在，你也是BW小园长了"
        },
        {
          src:
            "https://i0.hdslb.com/bfs/sycp/creative_img/201907/7f6bed19bfa2a3fa2bd94dd237a5f792.jpg@880w_440h.jpg",
          tit: "一款不够？一次给你五个！"
        },
        {
          src:
            "//i0.hdslb.com/bfs/archive/dbaceb03d06dadbc73d86cce3d7ebe11cfbd07a6.jpg@880w_440h.jpg",
          tit: "【小宇宙】中国美院2019年毕业巡礼"
        },
        {
          src:
            "//i0.hdslb.com/bfs/archive/24301cdc2fb053ac5ef5208a59e54c045570ff1b.jpg@880w_440h.webp",
          tit: "小猴紫在线开课：演员的自我修养！"
        }
      ]
    };
  },
  methods: {
    onChange(i, a) {
      this.$nextTick(function() {
        let btns = $(".el-carousel__button");
        //  console.log(btns);
        let prev = btns[i];
        // prev.style.backgroundPosition = "-855px -727px";
        // next.style.backgroundImage = "../../static/icons.png";
        // next.style.backgroundPosition = "-855px -790px";
        prev.classList.add("is_active");
      });
    }
  }
};
</script>

<style lang="less" scoped>
.swiperNews {
  height: 260px;
  // margin-bottom: 30px;
  padding-bottom: 40px;
  overflow: hidden;
  .leftSwiper {
    width: 440px;
    height: 100%;
    float: left;
    position: relative;
    .trans {
      width: 100%;
      height: 35px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: -webkit-linear-gradient(transparent, rgba(0, 0, 0, 0.3));
      z-index: 2;
    }
    .block {
      height: 100%;
      .el-carousel {
        height: 100%;
      }
      /deep/ .el-carousel__indicators--horizontal {
        transform: translateX(55%);
        bottom: 9px;
      }
      /deep/ .el-carousel__indicator--horizontal {
        height: 18px;
        width: 18px;
        background-color: transparent;
        margin-left: 8px;
        text-align: center;
        line-height: 18px;
        padding: 0px;
      }
      /deep/ .el-carousel__button {
        height: 18px;
        width: 18px;
        display: block;
        background-image: url("../../static/icons.png");
        background-position: -855px -790px;
        background-color: transparent;
        transition: none;
      }
      /deep/ .is_active{
        // background-image: url("../../static/icons.png");
        // background-position: -855px -727px;
      }
    }
    .more {
      position: absolute;
      bottom: 35px;
      right: 15px;
      z-index: 222;
      a {
        display: block;
        color: #fff;
        background: rgba(0, 0, 0, 0.64);
        width: 50px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        border-radius: 4px;
        opacity: 0;
        transition: all 0.2s linear;
        &:after {
          content: "";
          display: inline-block;
          width: 6px;
          height: 12px;
          margin: -2px 0 0 5px;
          vertical-align: middle;
          background: url("../../static/icons.png") -541px -218px;
        }
      }
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
      height: 220px;
      position: relative;
      a {
        display: block;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .dis {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 222;
        width: 280px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #fff;
        display: block;
        padding-left: 10px;
        line-height: 35px;
        height: 35px;
        font-size: 14px;
      }
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
    &:hover {
      .more {
        a {
          opacity: 1;
        }
      }
    }
  }
  .rightImage {
    width: 720px;
    height: 100%;
    float: left;
    .groom-box-m {
      overflow: hidden;
      position: relative;
      .groom-module {
        float: left;
        width: 160px;
        height: 100px;
        margin-left: 20px;
        margin-bottom: 20px;
        border-radius: 4px;
        overflow: hidden;
        .lazy-im {
          height: 100%;
          width: 100%;
          position: relative;
          img {
            height: 100%;
          }
          .card-mark {
            position: absolute;
            left: 0;
            top: 71px;
            width: 160px;
            font-size: 12px;
            line-height: 20px;
            padding: 10px 5px;
            overflow: hidden;
            color: #fff;
            // background
            opacity: 1;
          }
          .video {
            position: absolute;
            left: 0;
            top: 0;
            width: 160px;
            font-size: 12px;
            line-height: 20px;
            padding: 10px 5px;
            overflow: hidden;
            color: #fff;
            opacity: 0;
            transition: all 0.3s;
            background-color: rgba(0, 0, 0, 0.7);
            .tlt {
              height: 40px;
              overflow: hidden;
              margin-bottom: 5px;
              word-break: break-all;
              word-wrap: break-word;
            }
            .author {
              color: #99a2aa;
              height: 20px;
              line-height: 20px;
              overflow: hidden;
              transition: all 0.6s;
            }
            .num {
              color: #99a2aa;
              height: 20px;
              line-height: 20px;
              overflow: hidden;
              transition: all 0.6s;
            }
            .clock {
              width: 22px;
              height: 22px;
              position: absolute;
              right: 6px;
              bottom: 10px;
              background-image: url("../../static/clack.png");
            }
          }
          &:hover {
            .video {
              opacity: 1;
            }
            .card-mark {
              opacity: 0;
            }
          }
        }
      }
      .rec-btn {
        position: absolute;
        background-color: rgba(0, 0, 0, 0.6);
        background-image: url("../../static/icons2.png");
        background-repeat: no-repeat;
        width: 35px;
        top: 50%;
        margin-top: -8px;
        cursor: pointer;
        font-size: 12px;
        color: #fff;
        text-align: center;
        transition: all 0.3s;
        opacity: 0;
      }
      .prev {
        left: 20px;
        border-radius: 0 4px 4px 0;
        padding: 13px 5px 13px 10px;
        background-position: 6px -1211px;
      }
      .nextweek {
        right: 0px;
        border-radius: 4px 0 0 4px;
        padding: 13px 10px 13px 5px;
        background-position: 25px -1262px;
      }
      &:hover {
        .rec-btn {
          opacity: 1;
        }
      }
    }
  }
}
</style>
