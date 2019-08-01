<template>
  <div>
    <div class="navMain">
      <h3 class="numTop">排行</h3>
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
          <li class="rank-item highlight">
            <i class="ri-num">1</i>
            <a href="#">
              <p class="ri-title">【崩坏3】布洛妮娅的上学路</p>
              <span class="ri-total">更新至第16话</span>
            </a>
          </li>
          <li class="rank-item highlight">
            <i class="ri-num">2</i>
            <a href="#">
              <p class="ri-title">某科学的一方通行</p>
              <span class="ri-total">更新至第2话</span>
            </a>
          </li>
          <li class="rank-item highlight">
            <i class="ri-num">3</i>
            <a href="#">
              <p class="ri-title">擅长捉弄的高木同学 第二季</p>
              <span class="ri-total">更新至第3话</span>
            </a>
          </li>
          <li class="rank-item">
            <i class="ri-num">4</i>
            <a href="#">
              <p class="ri-title">君主·埃尔梅罗二世事件簿 魔眼收集列车 Grace note</p>
              <span class="ri-total">更新至第3话</span>
            </a>
          </li>
          <li class="rank-item">
            <i class="ri-num">5</i>
            <a href="#">
              <p class="ri-title">在地下城寻求邂逅是否搞错了什么 第二季</p>
              <span class="ri-total">更新至第2话</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="anchor">
        <a
          href="https://www.bilibili.com/ranking/all/1/1/3/?spm_id_from=333.334.b_72616e6b696e675f646f756761.8"
          target="_blank"
        >
          查看更多
          <i class="icon"></i>
        </a>
      </div>
      <div class="swiper-list">
        <div class="adpos">
          <div class="block">
            <el-carousel height="90px" arrow="never">
              <el-carousel-item v-for="item in list" :key="item.index">
                <h3 class="small">
                  <a>
                    <img :src="item.src" alt />
                  </a>
                </h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list: [
        {
          src:
            "//i0.hdslb.com/bfs/bangumi/c6092baece11ad0ee012f55f5344218958038b6e.jpg@520w_180h.webp"
        },
        {
          src:
            "//i0.hdslb.com/bfs/bangumi/ab7a3e044e4fb8df6060d2da994be036cff6f2f9.jpg@520w_180h.webp"
        }
      ]
    }
  }
};
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
      margin-left: 0.64px;
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
          cursor: pointer;
          .ri-title {
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 144px;
            line-height: 18px;
            vertical-align: top;
            color: #222;
            display: inline-block;
            overflow: hidden;
          }
          .ri-total {
            display: inline-block;
            color: #99a2aa;
            vertical-align: top;
            margin-left: 10px;
          }
          &:hover {
            .ri-title {
              color: #00a1d6;
            }
          }
        }
        &:first-child {
          margin-top: 0;
        }
      }
      .highlight {
        i {
          background-color: #f25d8e;
        }
      }
    }
  }
  .anchor {
    width: 260px;
    height: 26px;
    border-radius: 4px;
    overflow: hidden;
    a {
      height: 100%;
      display: block;
      background-color: #e5e9ef;
      border: 1px solid #e0e6ed;
      text-align: center;
      line-height: 24px;
      color: #222;
      i {
        background: url("../../static/icons.png") no-repeat -478px -218px;
        height: 12px;
        width: 6px;
        display: inline-block;
        margin: -2px 0 0 5px;
        vertical-align: middle;
      }
      &:hover{
        background-color: #ccd0d7;
        border-color: #ccd0d7;
      }
    }
  }
  .swiper-list {
    .adpos {
      margin-top: 20px;
      border-radius: 4px;
      overflow: hidden;
      width: 260px;
      height: 90px;
      position: relative;
      .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
        a {
          display: block;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
      }

      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
    }
  }
}
</style>
