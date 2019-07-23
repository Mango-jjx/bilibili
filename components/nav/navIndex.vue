<template>
  <div class="swiperNews w1160">
    <!-- 左边轮播图 -->
    <div class="leftSwiper">
      <div class="block">
        <el-carousel trigger="click" height="220px" arrow="never">
          <el-carousel-item v-for="item in 5" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
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
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'index'
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
    .block {
      height: 100%;
      .el-carousel {
        height: 100%;
      }
    }
    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
      height: 220px;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
  .rightImage {
    width: 720px;
    height: 100%;
    float: left;
    .groom-box-m {
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
          }
        }
      }
    }
  }
}
</style>
