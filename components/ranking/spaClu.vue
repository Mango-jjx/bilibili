<template>
  <div>
    <div class="navMain">
      <h3 class="numTop">排行</h3>
      <div class="select">
        <span class="selected">一日</span>
        <i class="icon"></i>
        <ul class="drop">
          <!-- <li class="drop-item">三日</li> -->
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
              <p class="ri-title">周杰伦大战蔡徐坤，天下苦流量明星久矣</p>
            </a>
          </li>
          <li class="rank-item highlight">
            <i class="ri-num">2</i>
            <a href="#">
              <p class="ri-title">粉丝实力拖累，被周杰伦碾压的蔡徐坤真的好惨一男的</p>
            </a>
          </li>
          <li class="rank-item highlight">
            <i class="ri-num">3</i>
            <a href="#">
              <p class="ri-title">不理解梁朝伟为什么要接漫威的辱华角色？</p>
            </a>
          </li>
          <li class="rank-item">
            <i class="ri-num">4</i>
            <a href="#">
              <p class="ri-title">「统计结果」神楽めあbilibili一周年活动·番外篇：大家最喜欢的作品Top10</p>
            </a>
          </li>
          <li class="rank-item">
            <i class="ri-num">5</i>
            <a href="#">
              <p class="ri-title">京都动画第1工作室纵火事件 7月22日报道汇总</p>
            </a>
          </li>
          <li class="rank-item">
            <i class="ri-num">6</i>
            <a href="#">
              <p class="ri-title">34人死亡，画作全毁！日本民众悼念京阿尼火灾遇难者……</p>
            </a>
          </li>
          <li class="rank-item">
            <i class="ri-num">7</i>
            <a href="#">
              <p class="ri-title">世界尽头通向何处？——解谜《企鹅公路》</p>
            </a>
          </li>
          <li class="rank-item">
            <i class="ri-num">8</i>
            <a href="#">
              <p class="ri-title">up主的相亲实录来了，up主是怎么被甩的，揭秘，揭秘！！！！！</p>
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
    margin-bottom: 26px;
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
          .ri-title{
            white-space: nowrap;
            text-overflow: ellipsis;
            max-width: 235px;
            line-height: 18px;
            vertical-align: top;
            color: #222;
            display: inline-block;
            overflow: hidden;
          }
          &:hover{
            .ri-title{
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
}
</style>
