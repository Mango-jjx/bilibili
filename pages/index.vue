<template>
  <div class="main">
    <!-- 下载app -->
    <fixapp v-if="fixshow" @closebtn="btnclose"></fixapp>
    <!-- 头部导航 -->
    <div class="nav w1160">
      <ul class="navUl">
        <li>
          <a href="#">
            <div>首页</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              动画
              <ul class="disShow">
                <li>
                  <a href="#">MAD·AMV</a>
                </li>
                <li>
                  <a href="#">MMD·3D</a>
                </li>
                <li>
                  <a href="#">短片·手书·配音</a>
                </li>
                <li>
                  <a href="#">特摄</a>
                </li>
                <li>
                  <a href="#">综合</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              番剧
              <ul class="disShow">
                <li>
                  <a href="#">连载动画</a>
                </li>
                <li>
                  <a href="#">完结动画</a>
                </li>
                <li>
                  <a href="#">官方延伸</a>
                </li>
                <li>
                  <a href="#">新番时间表</a>
                </li>
                <li>
                  <a href="#">番剧索引</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              国创
              <ul class="disShow">
                <li>
                  <a href="#">国产动画</a>
                </li>
                <li>
                  <a href="#">国产原创相关</a>
                </li>
                <li>
                  <a href="#">布袋戏</a>
                </li>
                <li>
                  <a href="#">资讯</a>
                </li>
                <li>
                  <a href="#">新番时间表</a>
                </li>
                <li>
                  <a href="#">国产动画索引</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              音乐
              <ul class="disShow">
                <li>
                  <a href="#">原创音乐</a>
                </li>
                <li>
                  <a href="#">翻唱</a>
                </li>
                <li>
                  <a href="#">VOCALOID·UTAU</a>
                </li>
                <li>
                  <a href="#">演奏</a>
                </li>
                <li>
                  <a href="#">MV</a>
                </li>
                <li>
                  <a href="#">音乐现场</a>
                </li>
                <li>
                  <a href="#">音乐综合</a>
                </li>
                <li>
                  <a href="#">音频</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              舞蹈
              <ul class="disShow">
                <li>
                  <a href="#">宅舞</a>
                </li>
                <li>
                  <a href="#">三次元舞蹈</a>
                </li>
                <li>
                  <a href="#">舞蹈教程</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              游戏
              <ul class="disShow">
                <li>
                  <a href="#">单机游戏</a>
                </li>
                <li>
                  <a href="#">电子竞技</a>
                </li>
                <li>
                  <a href="#">网络游戏</a>
                </li>
                <li>
                  <a href="#">桌游棋牌</a>
                </li>
                <li>
                  <a href="#">GMV</a>
                </li>
                <li>
                  <a href="#">音游</a>
                </li>
                <li>
                  <a href="#">Mugen</a>
                </li>
                <li>
                  <a href="#">游戏赛事</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              科技
              <ul class="disShow">
                <li>
                  <a href="#">趣味科普人文</a>
                </li>
                <li>
                  <a href="#">野生技术协会</a>
                </li>
                <li>
                  <a href="#">演讲·公开课</a>
                </li>
                <li>
                  <a href="#">星海</a>
                </li>
                <li>
                  <a href="#">机械</a>
                </li>
                <li>
                  <a href="#">汽车</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              数码
              <ul class="disShow">
                <li>
                  <a href="#">手机平板</a>
                </li>
                <li>
                  <a href="#">电脑装机</a>
                </li>
                <li>
                  <a href="#">摄影摄像</a>
                </li>
                <li>
                  <a href="#">影音智能</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              生活
              <ul class="disShow">
                <li>
                  <a href="#">搞笑</a>
                </li>
                <li>
                  <a href="#">日常</a>
                </li>
                <li>
                  <a href="#">美食圈</a>
                </li>
                <li>
                  <a href="#">动物圈</a>
                </li>
                <li>
                  <a href="#">手工</a>
                </li>
                <li>
                  <a href="#">绘画</a>
                </li>
                <li>
                  <a href="#">运动</a>
                </li>
                <li>
                  <a href="#">其他</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              鬼畜
              <ul class="disShow">
                <li>
                  <a href="#">鬼畜调教</a>
                </li>
                <li>
                  <a href="#">音MAD</a>
                </li>
                <li>
                  <a href="#">人力VOCALOID</a>
                </li>
                <li>
                  <a href="#">教程演示</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              时尚
              <ul class="disShow">
                <li>
                  <a href="#">美妆</a>
                </li>
                <li>
                  <a href="#">服饰</a>
                </li>
                <li>
                  <a href="#">健身</a>
                </li>
                <li>
                  <a href="#">T台</a>
                </li>
                <li>
                  <a href="#">风尚标</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">广告</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              娱乐
              <ul class="disShow">
                <li>
                  <a href="#">综艺</a>
                </li>
                <li>
                  <a href="#">明星</a>
                </li>
                <li>
                  <a href="#">Korea相关</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              影视
              <ul class="disShow">
                <li>
                  <a href="#">影视杂谈</a>
                </li>
                <li>
                  <a href="#">影视剪辑</a>
                </li>
                <li>
                  <a href="#">短片</a>
                </li>
                <li>
                  <a href="#">预告·资讯</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="logNum">999</div>
            <div class="textNav">
              放映厅
              <ul class="disShow">
                <li>
                  <a href="#">纪录片</a>
                </li>
                <li>
                  <a href="#">电影</a>
                </li>
                <li>
                  <a href="#">电视剧</a>
                </li>
              </ul>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="bgpng"></div>
            <div>专栏</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="bgpng"></div>
            <div>广场</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="bgpng"></div>
            <div>直播</div>
          </a>
        </li>
        <li>
          <a href="#">
            <div class="bgpng"></div>
            <div>小黑屋</div>
          </a>
        </li>
      </ul>
      <div class="right">
        <img src="../static/nav.gif" alt />
      </div>
    </div>
    <!-- 首頁輪播圖 -->
    <div class="container w1160">
      <!-- <ul class="navBread">
        <li>
          <a href="#">全部</a>
        </li>
        <li>
          <a href="#">MAD·AMV</a>
        </li>
        <li>
          <a href="#">MMD·3D</a>
        </li>
        <li>
          <a href="#">短片·手书·配音</a>
        </li>
        <li>
          <a href="#">特摄</a>
        </li>
        <li>
          <a href="#">综合</a>
        </li>
      </ul> -->
      <navIndex></navIndex>
    </div>
    <!-- 推广 -->
    <div class="navPro">
      <Navtg></Navtg>
    </div>
    <!-- 广告 -->
    <ggModule></ggModule>
    <!-- 正在直播 -->
    <liveBro id="a10"></liveBro>
    <!-- 动画 -->
    <animation :animate-text="animate" id="a20"></animation>
    <!-- 广告 -->
    <ggModule></ggModule>
    <!-- 番剧 -->
    <Panju id="a30"></Panju>
    <!-- 番剧动态 -->
    <panjuAct></panjuAct>
    <!-- 国创 -->
    <guoChuang id="a40"></guoChuang>
    <!-- 国创相关 -->
    <gcabout></gcabout>
    <!-- 音乐 -->
    <animation id="a50" :animate-text="music"></animation>
    <!-- 舞蹈 -->
    <animation id="a60" :animate-text="dance"></animation>
    <!-- 游戏 -->
    <animation id="a70" :animate-text="game"></animation>
    <!-- 科技 -->
    <animation id="a80" :animate-text="science"></animation>
    <!-- 数码 -->
    <animation id="a90" :animate-text="shuma"></animation>
    <!-- 生活 -->
    <animation id="a100" :animate-text="life"></animation>
    <!-- 鬼畜 -->
    <animation id="a110" :animate-text="guichu"></animation>
    <!-- 时尚 -->
    <animation id="a120" :animate-text="fashion"></animation>
    <!-- 广告 -->
    <animation id="a130" :animate-text="advian"></animation>
    <!-- 娱乐 -->
    <animation id="a140" :animate-text="play"></animation>
    <!-- 专栏 -->
    <speColumn id="a150"></speColumn>
    <!-- 电影 -->
    <animation id="a160" :animate-text="movie"></animation>
    <!-- 电视剧 -->
    <animation id="a170" :animate-text="dianshi"></animation>
    <!-- 影视 -->
    <animation id="a180" :animate-text="yinshi"></animation>
    <!-- 纪录片 -->
    <animation id="a190" :animate-text="jilu"></animation>
    <!-- 特别推荐 -->
    <speRec></speRec>
    <!-- 右侧nav -->
    <rightnav></rightnav>
  </div>
</template>

<script>
import Navtg from "../components/nav/navtg";
import navIndex from "../components/nav/navIndex";
import ggModule from "../components/nav/ggModule";
import liveBro from "../components/nav/liveBro";
import animation from "../components/nav/animation";
import Panju from "../components/nav/panju";
import panjuAct from "../components/nav/panjuAct";
import guoChuang from "../components/nav/guoChuangindex";
import gcabout from "../components/nav/gcabout";
import speColumn from "../components/nav/speColumn";
import speRec from "../components/nav/speRec";
import fixapp from "../components/commit/fixapp";
import rightnav from "../components/commit/rightnav";
import $ from "jquery";

export default {
  name: "index",
  layout: "app",
  components: {
    Navtg,
    navIndex,
    ggModule,
    liveBro,
    animation,
    Panju,
    panjuAct,
    guoChuang,
    gcabout,
    speColumn,
    speRec,
    fixapp,
    rightnav
  },
  data() {
    return {
      animate: {
        text: "动画",
        position: "-141px -908px",
        list: {
          num1: "当我拔剑的那一刻，全世界都将为之颤抖！！！",
          num2: "【崩坏3】布洛妮娅的上学路",
          num3: "七月最神奇动画！制作穷到爆笑却造就B站最强人气！？",
          num4: "银灰领衔主演　罗德岛沙雕广告",
          num5: "7分钟带你了解崩坏3“男主角”布洛妮娅，以及崩坏游戏主线剧情！",
          num6: "不可忽视的外在力量",
          num7:
            "AWSL！肌肉少女竟然还有真人版！这下真的是猛男必看了！【新番咋了第二季06】",
          img:
            "//i1.hdslb.com/bfs/archive/58949e02d2fdefc5822ed18686f0b0e7d6ee56ca.jpg@80w_50h.webp",
          number: "综合评分：216.4万"
        }
      },
      music: {
        text: "音乐",
        position: "-140px -266px",
        list: {
          num1:
            "我为何在哭泣？回顾京阿尼18部动画26首经典歌曲之串烧【Kyle钢琴】愿大家能用各种力所能及的正当形式支持京阿尼！轻音少女X紫罗兰永恒花园X凉宫春日etc",
          num2: "【官方投稿】泽野弘之 / [-30k]re:tuneS「Call your name 」",
          num3: "我的猫翻唱了 Bad Guy",
          num4: "【泠鸢翻唱】星之所在（来怀念经典了！）",
          num5: "Kizuna AI - Sky High (Prod. Yunomi)【Official Music Video】",
          num6:
            "【哪吒×敖丙原创曲】生来自由（你我生来残缺相遇后才完整，这什么绝美兄弟情啊）【哪吒之魔童降世】",
          num7:
            "AWSL！肌肉少女竟然还有真人版！这下真的是猛男必看了！【新番咋了第二季06】",
          img:
            "//i2.hdslb.com/bfs/archive/76d08a876843fd1fc2d5aa372188f0840a792d83.jpg@80w_50h.webp",
          number: "综合评分：55.2万"
        }
      },
      dance: {
        text: "舞蹈",
        position: "-141px -461px",
        list: {
          num1: "【西四】FANCY❤️YOU",
          num2:
            "【阿雏】宅舞比赛现场跳到一半停电了怎么办？？！！！尴尬症都要犯了的《Marine Dreamin'》!!!∑(ﾟДﾟノ)ノ",
          num3: "【猛男版】新宝岛  四男子灵魂羞耻（半裸）出演",
          num4:
            "【短短】三年了对比，我的脸皮越来越厚了！咋了爸爸，江南皮革厂倒闭了",
          num5: "【糖小V】Like a cat猫步轻悄【做你的猫～】",
          num6: "【徐珺大哥】魔性抖肩舞 全员版 每天一遍防止抑郁",
          num7: "【喵几】Kill This Love❥韩舞初投❥在深圳网红地标下的性感热舞",
          img:
            "//i2.hdslb.com/bfs/archive/d4066053803e175e954a932d126ceff9242f7a6e.jpg@80w_50h.webp",
          number: "综合评分：39.7万"
        }
      },
      game: {
        text: "游戏",
        position: "-141px -203px",
        list: {
          num1: "罗汉鬼套路：LOL史上最硬上单 双抗铁妈妈流",
          num2: "揭秘网游做不好职业平衡的真正原因【游戏侦查冰】",
          num3: "【是大腿TOP10】78:香锅再见！MLXG生涯十大经典时刻",
          num4: "【王老菊】奴隶阿飞的励志人生09",
          num5: "【互动视频】快乐风男的求生之路",
          num6: "番茄带你化身猛兽！",
          num7:
            "【小狼XF】《明日方舟》龙门市区400杀最速低配攻略 新剿灭作战 多种打法+语音详细解",
          img:
            "//i2.hdslb.com/bfs/archive/736ce5fa6d4cb0d04aac0565ed4a23c904ac0b58.jpg@80w_50h.webp",
          number: "综合评分：477.6万"
        }
      },
      science: {
        text: "科技",
        position: "-141px -525px",
        list: {
          num1:
            "《新闻联播》曝光暴徒乱港画面：污损国徽；香港各界强烈谴责激进示威者围堵香港中联办暴行",
          num2: "敖厂长的血泪史告诉你，应该用这些免费的字体！",
          num3:
            "半年增高18厘米，我是如何做到的？内有详细干货！！！【成人增高系列全集】【中文字幕】【狱龙】",
          num4: "【怪物志】利维坦-上帝所创最大的怪物",
          num5: "BBC街头妄谈香港“暴力”，现场被怼：假新闻！",
          num6:
            "这个紫外线下的尿尿实验告诉你，为什么男人坐着尿是最健康最卫生的@油兔不二字幕组",
          num7: "爽哥开口，就知有没有~",
          img:
            "//i0.hdslb.com/bfs/archive/8c060df41dfffdd1e9397fa61e9a172274d92842.jpg@80w_50h.webp",
          number: "综合评分：59.4万"
        }
      },
      shuma: {
        text: "数码",
        position: "-140px -1741px",
        list: {
          num1: "推荐电脑安装的5款软件",
          num2: "RX5700/XT详细评测：AMD显卡翻身了？对比20系Super",
          num3:
            "不仅仅是分体式蓝牙耳机（上）_Sony WF-1000XM3降噪耳机【值不值得买第356期】",
          num4:
            "「科技美学直播」荣耀9X 麒麟810 开箱上手 | 荣耀9X千元机杀手 方舟编译器加持",
          num5: "高通855PLUS！华硕ROG Phone 2完整开箱测评",
          num6: "「小白测评」荣耀9X PRO体验 麒麟810表现如何？",
          num7: "印度米粉嫌小米卖太贵？数千人联名请愿降价200元",
          img:
            "//i1.hdslb.com/bfs/archive/6bb821891e4793a229f43be02f48a9cf1ca631b2.jpg@80w_50h.webp",
          number: "综合评分：54.2万"
        }
      },
      life: {
        text: "生活",
        position: "-137px -970px",
        list: {
          num1: "蔡徐坤上韩国新闻，女主持忍笑播报，男主持大喊鸡你太美",
          num2: "挑战北京特产豆汁五斤！开始腐臭味喝到后面是绿豆清香味！",
          num3: "小伙想创业在家自制煎饼果子，没想到5块钱一个的煎饼果子这么难",
          num4: "试吃被誉为淡水虾王的罗氏沼虾，目前为止最爽的一期！",
          num5: "被誉为天下第一菜的“佛跳墙”，粤菜师傅用15天时间炮制而成",
          num6: "不可忽视的外在力量",
          num7: "一锅蛋汤，一锅饭，媳妇要做一顿好吃的，大sao三碗米饭吃的崩溃",
          img:
            "//i2.hdslb.com/bfs/archive/5b5acc0867ece99cdb80c7d2fbb0da34bdbe8ff2.png@80w_50h.webp",
          number: "综合评分：143.3万"
        }
      },
      guichu: {
        text: "鬼畜",
        position: "-141px -332px",
        list: {
          num1: "每天一遍，走出道德绑架",
          num2: "【笑傲江湖】一万个舍不得",
          num3: "【武林外传】你看过这么燃的武林外传吗？",
          num4: "【霍顿】穷开跪（穷开心）",
          num5: "【全明星RAP】上下",
          num6: "【猫和老鼠】没有我汤姆谈不了的歌 手游里的钢琴弹《千本樱》",
          num7: "妈妈，这个安塞腰股简直打得轰动如雷，响彻云霄 Boom Clap！",
          img:
            "//i2.hdslb.com/bfs/archive/337cedaa8a2c47a5846c63c7cf462f5187cb2291.jpg@80w_50h.webp",
          number: "综合评分：106.0万"
        }
      },
      fashion: {
        text: "时尚",
        position: "-141px -718px",
        list: {
          num1: "【豆蔻的新衣】聊斋系列汉服新品讲解视频",
          num2: "肉女孩不能碰的夏季死亡单品！雷品吐槽",
          num3: "【仙爷】堪比整形！调整你脸型的8条化妆技巧大干货！画错丑10倍！",
          num4: "维密腰臀比精讲课程 —— 弓式",
          num5:
            "【马克】戒糖14天我的脸会发生什么？痘痘粉刺都再见！控制饮食的力量竟然这么大",
          num6: "健美胸型你值得拥有 Clara Lee",
          num7:
            "身材自然的亚洲小姐姐 是你喜欢的类型吗 你愿意和她一起训练吗  「cool」",
          img:
            "//i1.hdslb.com/bfs/archive/e75a265c855f565471a435695b44b91fa810926f.jpg@80w_50h.webp",
          number: "综合评分：42.5万"
        }
      },
      advian: {
        text: "广告",
        position: "-140px -1228px",
        list: {
          num1: "如果《狮子王》换土拨鼠来演，画风突变…….",
          num2: "日本广告人气排行（2019年第29周 07.15 - 07.21）",
          num3: "【新垣帐字幕组】小鸡拉面「结衣吃姬」合篇",
          num4: "2019.07.22 新垣结衣 日清小鸡拉面新CMx2",
          num5:
            "日本萌宠广告「じゃらん 2019夏 幸せな旅篇」最新夏日限定猫片～可爱到犯规啊啊啊！(*´艸`*)",
          num6: "【小恶魔】Bon Voyage S_S 2019 - Swimwear",
          num7: "日本电视TV广告合集第三期（2019年7月14日-7月20日）",
          img:
            "//i1.hdslb.com/bfs/archive/516c6f55e426677b5cfb50210b4f89f800eda348.jpg@80w_50h.webp",
          number: "综合评分：3.1万"
        }
      },
      play: {
        text: "娱乐",
        position: "-141px -1032px",
        list: {
          num1: "周杰伦微博排名比蔡徐坤差那么多，为啥演唱会那么多人看啊？",
          num2: "【韩商言×bad guy】Du you like me",
          num3: "【博君一肖】肖老师请你反思一下为啥97年小朋友老是要打你",
          num4: "【博君一肖】千层套路（直球撩人与反撩）",
          num5: "【童年节目】超级变变变 96集",
          num6: "【台风蜕变之战】台风夏令营01：睡衣派对开启 经典剧集重现",
          num7: "【李现】李现的魔性口头禅原来是“酷”",
          img:
            "//i1.hdslb.com/bfs/archive/ac9b9e8454b948533d874722ea402ee7817fc1fc.jpg@80w_50h.webp",
          number: "综合评分：31.3万"
        }
      },
      movie: {
        text: "电影",
        position: "-141px -396px",
        list: {
          num1: "惊天魔盗团2（2016）【杰西·艾森伯格/丹尼尔·雷德克里夫/周杰伦】",
          num2: "革命之路（2008）【莱昂纳多·迪卡普里奥/凯特·温丝莱特】",
          num3:
            "【喜剧】幸福终点站（2004）【斯皮尔伯格/汤姆·汉克斯/凯瑟琳·泽塔-琼斯】",
          num4: "【悬疑/恐怖】小岛惊魂（2001）【妮可•基德曼】",
          num5: "【喜剧/爱情】城市之光（1931）【卓别林】",
          num6: "【中文版】海蒂和爷爷（2015）",
          num7: "【武侠】楚留香（1976）【古龙小说改编/楚原、狄龙】",
          img:
            "//i0.hdslb.com/bfs/archive/e426af7645ef7cdd3b4d0b4810826dc0ae3a345a.jpg@80w_50h.webp",
          number: "综合评分：55.1万"
        }
      },
      dianshi: {
        text: "电视剧",
        position: "-141px -845px",
        list: {
          num1: "【剧情】桑拿道 01（2019）【原田泰造/三宅弘城/矶村勇斗】",
          num2: "【搞笑/剧情】体育老师 第一季 20集全（2014）",
          num3: "【1080P】【经典/军旅】士兵突击 30集全（2006）（修复版）",
          num4: "【爱情】我可能不会爱你 05（2019）【足立梨花/白洲迅】",
          num5: "【剧情】烽火影人 全31集",
          num6: "【爱情】我可能不会爱你 06（2019）【足立梨花/白洲迅】",
          num7: "【剧情/运动】极限S：射箭篇 05（2017）",
          img:
            "//i2.hdslb.com/bfs/archive/687a4c0aa96c9a83740e245b1bd1349e7826bcd2.jpg@80w_50h.webp",
          number: "综合评分：3.3万"
        }
      },
      yinshi: {
        text: "影视",
        position: "-140px -1356px",
        list: {
          num1:
            "梁朝伟加入漫威第四阶段！16部新作曝光！女雷神、刀锋战士、X战警、神奇四侠都安排上了！",
          num2: "《Alternatino with arturo castro》踩点混剪",
          num3: "【嘻咦啊看】从练习生到男团，不过是换个池子的事",
          num4:
            "【片片】《轮到你了》09，男子闯进女住户家，竟发现密室捆绑play？",
          num5: "【老邪吐槽】爆笑吐槽侮辱智商的土味玛丽苏《爱来的刚好》",
          num6: "陈情令 | 剧版忘羡 | 确认过眼神，我遇上对的人 （彩蛋高能！）",
          num7: "【亲爱的热爱的】【沙雕向】 || 换首BGM看看吴白斥巨资赞助的爱情",
          img:
            "//i2.hdslb.com/bfs/archive/5451aad7e06e6360cd9d3da54a511b7ba8186aa4.jpg@80w_50h.webp",
          number: "综合评分：104.0万"
        }
      },
      jilu: {
        text: "记录片",
        position: "-140px -1292px",
        list: {
          num1: "特警张劼的一天【中国YOUNG计划】",
          num2: "【人生一串2】带二哈去吃烧烤的结果就是...太可怜了叭",
          num3: "【人生一串2】加中药佐味的烤排骨...开启养生新姿势？",
          num4: "《荒野求生 第四季》 05 阿拉斯加",
          num5: "《原始生活21天 第四季》10 毫无防备",
          num6: "【人生一串2】以为这是烤年糕，其实它是羊的...Q嫩弹牙！",
          num7: "《这就是中国》第二十七期《中国突破依附体系的意义》",
          img:
            "//i0.hdslb.com/bfs/archive/41be3dd0ba8da281679b0609db660ad5ad0587ab.jpg@80w_50h.webp",
          number: "综合评分：10.4万"
        }
      },
      fixshow: true
    };
  },
  mounted() {
    this.$nextTick(function() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      for (let i = 1; i < 20; i++) {
        if ($("#a" + i + "0").offset().top <= top + 200) {
          $("#nav-list a").removeClass("on");
          $("#a" + i + "1").addClass("on");
        }
      }
      // if(document.body.scrollHeight||document.documentElement.scrollHeight <= $('.elevator-module').height()){
      //   $('.elevator-module').css('top',"0px");
      // }
    });
    window.addEventListener("scroll", this.handleScroll, true); //添加页面滚动事件
  },
  methods: {
    btnclose() {
      this.fixshow = false;
    },
    handleScroll: function() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      for (let i = 1; i < 20; i++) {
        if ($("#a" + i + "0").offset().top <= top + 200) {
          $("#nav-list a").removeClass("on");
          $("#a" + i + "1").addClass("on");
        }
      };
      if(top > 200){
          $('.elevator-module').css('top','110px');
      }else{
        $('.elevator-module').css('top','232px');
      };
      // let height =document.body.clientHeight||document.documentElement.clientHeight;
      // let top2 = $('.elevator-module').height();
      // if(height <= top2){
      //   $('.elevator-module').css('top','0px');
      // }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //离开页面清除滚动事件
  }
};
</script>

<style lang="less" scoped>
.main {
  overflow: hidden;
  // height: 1200px;
  .nav {
    padding-top: 8px;
    margin-bottom: 4px;
    height: 59px;
    border-bottom: 1px solid #fff;
    .navUl {
      // overflow: hidden;
      float: left;
      li {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 8px;
        a {
          div {
            font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
              Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
          }
        }
        &:first-child {
          background: url("../static/icons.png") no-repeat -660px -1170px;
          width: 24px;
          margin-right: 14px;
          div {
            margin-top: 22px;
            line-height: 20px;
          }
        }
        &:nth-last-child(1) {
          width: 40px;
          margin: 0 5px;
          div {
            line-height: 20px;
            font-size: 12px;
            font-family: Microsoft Yahei, Tahoma, Helvetica, Arial, "\5B8B\4F53",
              sans-serif;
            text-align: center;
            &.bgpng {
              background: url("../static/icons.png") no-repeat -87px -1942px;
              height: 18px;
              width: 18px;
              margin-left: 10px;
            }
          }
        }
        &:nth-last-child(2) {
          width: 40px;
          margin: 0 5px;
          div {
            line-height: 20px;
            font-size: 12px;
            font-family: Microsoft Yahei, Tahoma, Helvetica, Arial, "\5B8B\4F53",
              sans-serif;
            text-align: center;
            &.bgpng {
              background: url("../static/icons.png") no-repeat -87px -1878px;
              height: 18px;
              width: 18px;
              margin-left: 10px;
            }
          }
        }
        &:nth-last-child(3) {
          width: 40px;
          margin: 0 5px;
          div {
            line-height: 20px;
            font-size: 12px;
            text-align: center;
            font-family: Microsoft Yahei, Tahoma, Helvetica, Arial, "\5B8B\4F53",
              sans-serif;
            &.bgpng {
              background: url("../static/icons.png") no-repeat -87px -2006px;
              height: 18px;
              width: 18px;
              margin-left: 10px;
            }
          }
        }
        &:nth-last-child(4) {
          width: 40px;
          margin: 0 5px;
          div {
            line-height: 20px;
            font-size: 12px;
            text-align: center;
            font-family: Microsoft Yahei, Tahoma, Helvetica, Arial, "\5B8B\4F53",
              sans-serif;
            &.bgpng {
              background: url("../static/icons.png") no-repeat -87px -1814px;
              height: 18px;
              width: 18px;
              margin-left: 10px;
            }
          }
        }
        .logNum {
          height: 12px;
          background-color: #ffafc9;
          color: #fff;
          border-radius: 3px;
          font-family: sans-serif, sans-serifsans-serif, Calibri, Arial,
            Helvetica;
          max-width: 28px;
          font-size: 11px;
          padding: 1px 4px;
          margin-top: 8px;
          line-height: 10px;
          margin-left: 10px;
        }
        .textNav {
          line-height: 24px;
          text-align: center;
          position: relative;
          .disShow {
            position: absolute;
            left: 0;
            // width: 130px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
            border-radius: 0 0 4px 4px;
            z-index: 999;
            display: none;
            background-color: #fff;
            li {
              // background-color: red;
              margin: 0px;
              float: none;
              width: 100%;
              background-image: none;
              text-align: left;
              font-size: 12px;
              line-height: 20px;
              min-width: 120px;
              height: auto;
              a {
                display: block;
                padding: 5px 15px 5px 25px;
                margin-right: 10px;
                white-space: nowrap;
                color: #222;
                background: url("../static/icons2.png") no-repeat 12px -1613px;
              }
            }
          }
          &:hover {
            .disShow {
              display: block;
            }
          }
        }
      }
    }
    .right {
      float: right;
    }
  }
  .navBread {
    margin-top: 10px;
    margin-bottom: 20px;
    overflow: hidden;
    li {
      float: left;
      margin-left: 40px;
      &:first-child {
        margin-left: 0;
        a {
          color: #00a1d6;
        }
      }
      a {
        display: block;
        height: 28px;
        line-height: 28px;
        font: 12px Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
          Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
        font-size: 14px;
        color: #6d757a;
        position: relative;
        &:hover {
          color: #00a1d6;
        }
      }
    }
  }
}
</style>
