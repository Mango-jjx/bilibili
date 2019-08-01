<template>
  <div class="footer">
    <div class="container w1160">
      <div class="top">
        <ul>
          <li>
            <p>bilibili</p>
            <div>
              <a href="#">关于我们</a>
            </div>
            <div>
              <a href="#">联系我们</a>
            </div>
            <div>
              <a href="#">加入我们</a>
            </div>
            <div>
              <a href="#">友情链接</a>
            </div>
            <div>
              <a href="#">bilibili认证</a>
            </div>
            <div>
              <a href="#">Investor Relations</a>
            </div>
          </li>
          <li>
            <p>传送门</p>
            <div>
              <a href="#">帮助中心</a>
            </div>
            <div>
              <a href="#">高级弹幕</a>
            </div>
            <div>
              <a href="#">活动专题页</a>
            </div>
            <div>
              <a href="#">侵权申诉</a>
            </div>
            <div>
              <a href="#">活动中心</a>
            </div>
            <div>
              <a href="#">用户反馈论坛</a>
            </div>
            <div class="noBottom">
              <a href="#">壁纸站</a>
            </div>
            <div class="noBottom">
              <a href="#">名人堂</a>
            </div>
            <div class="noBottom">
              <a href="#">专车号服务中心</a>
            </div>
          </li>
          <li class="appDownload">
            <div class="khd">
              <span class="khdpng"></span>
              <p>客户端下载</p>
            </div>
            <div class="sina">
              <span class="sinapng"></span>
              <p>新浪微博</p>
            </div>
            <div class="wechat">
              <span class="wechatpng"></span>
              <p>官方微信</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="bottom">
        <div class="left">
          <div class="firstpng"></div>
          <div class="secondpng"></div>
          <div class="threepng">
            <img src="../../static/483.png" alt class="three1" />
            <img src="../../static/soft.png" alt class="three2" />
          </div>
        </div>
        <div class="right">
          <p class="p1">
            广播电视节目制作经营许可证：（沪）字第1248号 | 网络文化经营许可证：沪网文[2016]2296-134号 | 信息网络传播视听节目许可证：0910417 | 互联网ICP备案：
            <span
              class="hoverc"
            >沪ICP备13002172号-3</span>
          </p>
          <p>
            沪ICP证：沪B2-20100043 | 违法不良信息举报邮箱：help@bilibili.com | 违法不良信息举报电话：4000233233转3 |
            <span>营业执照</span>
          </p>
          <div>
            <div class="firsta"></div>
            <a href="#" class="hoverc">上海互联网举报中心</a>
            <span>|</span>
            <a href="#" class="hoverc">12318 全国文化市场举报网站</a>
            <span>|</span>
            <div class="threea"></div>
            <a href="#" class="hoverc">沪公网安备 31011002002436号</a>
            <span>|</span>
            <a href="#" class="hoverc">儿童色情信息举报专区</a>
          </div>
          <div class="youhai hoverc">
            <div>网上有害信息举报专区：</div>
            <div class="seconda"></div>
            <div>中国互联网违法和不良信息举报中心</div>
          </div>
          <p>亲爱的市民朋友，上海警方反诈劝阻电话“962110”系专门针对避免您财产被骗受损而设，请您一旦收到来电，立即接听。</p>
          <p>公司名称：上海宽娱数码科技有限公司 | 公司地址：上海市杨浦区政立路485号 | 电话：021-25099888</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setInterval } from "timers";
import $ from "jquery";
export default {
  data() {
    return {
      timer: null
    };
  },
  mounted() {
    this.timer = setInterval(function() {
      let imgone = $(".three1");
      let imgtwo = $(".three2");
      // imgone.css('opacity',0);
      // imgtwo.css('opacity',1);
      if (imgone.css("opacity")==0) {
        imgone.css("opacity", 1);
        imgtwo.css("opacity", 0);
      } else {
        imgone.css("opacity", 0);
        imgtwo.css("opacity", 1);
      }
      // console.log(imgone.css('opacity'));
    }, 2000);
  }
};
</script>

<style lang="less" scoped>
.footer {
  height: 417px;
  margin-top: 20px;
  background-color: #f6f9fa;
  text-align: center;
  .container {
    height: 100%;
    // background-color: pink;
    overflow: hidden;
    .top {
      margin-top: 40px;
      ul {
        overflow: hidden;
        li {
          // background-color: skyblue;
          float: left;
          &:first-child {
            padding-right: 40px;
            width: 400px;
          }
          &:nth-child(2) {
            width: 438px;
            padding: 0 40px;
            border-left: 1px solid #e5e9ef;
            border-right: 1px solid #e5e9ef;
          }
          &:last-child {
            padding-left: 40px;
            width: 320px;
          }
          p {
            text-align: left;
            margin-bottom: 22px;
            font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
              Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
            font-size: 14px;
            color: #99a2aa;
          }
          div {
            float: left;
            width: 33.3333333333%;
            text-align: left;
            margin-bottom: 16px;
            &.noBottom {
              margin-bottom: 0px;
            }
            a {
              font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
                Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
              color: #222;
              font-size: 14px;
              line-height: 1;
              &:hover {
                color: #00a1d6;
              }
            }
          }
          &.appDownload {
            div {
              float: left;
              height: 80px;
              width: 82px;
              text-align: center;
              p {
                text-align: center;
                line-height: 30px;
                color: #222;
                &:hover {
                  color: #00a1d6;
                }
              }
              span {
                display: block;
                width: 60px;
                height: 60px;
                background-color: pink;
                margin-left: 11px;
                border-radius: 50%;
              }
              .khdpng {
                background: url("../../static/icons.png") no-repeat -1024px -194px;
              }
              .sinapng {
                background: url("../../static/icons.png") no-repeat -1024px -322px;
              }
              .wechatpng {
                background: url("../../static/icons.png") no-repeat -1024px -66px;
              }
            }
          }
        }
      }
    }
    .bottom {
      margin-top: 30px;
      .left {
        float: left;
        margin-right: 15px;
        .firstpng {
          width: 100px;
          height: 80px;
          background: url("../../static/jigou.png") no-repeat;
        }
        .secondpng {
          width: 100px;
          height: 40px;
          background: url("../../static/pic962110.png") no-repeat;
          background-size: cover;
        }
        .threepng {
          width: 100px;
          height: 40px;
          background: url("../../static/483.png") no-repeat;
          overflow: hidden;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
          .three2 {
            opacity: 0;
            transition: opacity 0.3s;
          }
          .three1 {
            opacity: 1;
            transition: opacity 0.3s;
          }
        }   
      }
      .right {
        float: left;
        text-align: left;
        .hoverc {
          &:hover {
            color: #222;
          }
        }
        p {
          font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
            Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
          color: #99a2aa;
          line-height: 24px;
          margin-bottom: 7px;
          &.p1 {
            margin-bottom: 0px;
            line-height: 23px;
          }
        }
        div {
          line-height: 24px;
          margin-bottom: 5px;
          // overflow: hidden;
          zoom: 1;
          &:after {
            display: block;
            clear: both;
            content: "";
            visibility: hidden;
            height: 0;
          }
          span {
            float: left;
            color: #99a2aa;
            margin: 0 2px;
          }
          a {
            color: #99a2aa;
            float: left;
          }
          .firsta {
            width: 16px;
            height: 16px;
            float: left;
            background: url("../../static/icons.png") no-repeat -1367px -89px;
            margin-top: 1px;
            margin-right: 5px;
          }
          .threea {
            width: 20px;
            height: 20px;
            float: left;
            background: url("../../static/beiantubiao.png") no-repeat;
            margin-top: -3px;
            margin-right: 3px;
          }
        }
        .youhai {
          div {
            float: left;
            font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
              Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
            color: #99a2aa;
            &.seconda {
              width: 16px;
              height: 16px;
              background: url("../../static/12377.png") no-repeat;
              background-size: 100% 100%;
              margin-right: 3px;
            }
          }
        }
      }
    }
  }
}
</style>
