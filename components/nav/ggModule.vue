<template>
    <div class="gg-floor-module w1160">
        <a href="#">
            <div class="lazy-img">
                <img src="https://i0.hdslb.com/bfs/sycp/creative_img/201907/81cabd4f5c50b8ba9348701d2d96946e.jpg" alt="">
            </div>
            <img src="https://s1.hdslb.com/bfs/static/jinkela/home/asserts/cm_2.png" class="gg-pic">
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.gg-floor-module{
    margin-bottom: 20px;
    position: relative;
    max-height: 96px;
    overflow: hidden;
    border-radius: 5px;
    img{
        border-radius: 5px;
    }
    a{
        display: block;
        .lazy-img{
            background: url("https://s1.hdslb.com/bfs/static/jinkela/home/asserts/img_loading.png") 50% no-repeat;
            width: 100%;
            height: 96px;
            display: inline-block;
            img{
                display: block;
                height: 100%;
                width: 100%;
            }
        }
    }
    .gg-pic{
        position: absolute;
        left: 0;
        bottom: 0;
    }
}
</style>
