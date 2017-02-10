<template>
    <div class="index-wrapper">
        <Top></Top>
        <section class="col-md-7 banner">
            <i class="prev-img iconfont icon-jiantou" @click="setImgUrl"></i>
            <div class="row">
                <transition name="fade" v-for="(item,index) in bannerImgUrls">
                    <img :src="item" class="col-md-12" v-show="index === imgUrlIndex">
                </transition>
            </div>
            <div class="img-list">
                <span class="img-list-li" v-for="(item,index) in bannerImgUrls">

                </span>
            </div>
            <i class="next-img iconfont icon-jiantou" @click="setImgUrl"></i>
        </section>
        <section class="production-list">
            <!--<div class="row">-->
                <div class="col-xs-4 col-sm-4 col-md-3" v-for="item in productionImgUrls">
                    <a class="thumbnail production-item" href="#">
                        <img :src="item" alt="">
                        <div class="caption">
                            <h6>建水腌菜</h6>
                        </div>
                    </a>
                </div>
            <!--</div>-->
        </section>
    </div>
</template>

<script>
import Top from '../Header'
export default {
  name: 'dsindex',
  data () {
    return {
      msg: '您好，欢迎来到可贴杂货铺',
      bannerImgUrls:[
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/1.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/2.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/3.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/4.jpg'
      ],
      imgUrlIndex:0,
      productionImgUrls:[
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/1.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/2.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/3.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/4.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/1.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/2.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/3.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/4.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/1.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/2.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/3.jpg',
          '//ol3k0cg35.bkt.clouddn.com/zhiwutujian/4.jpg'
      ]
    }
  },
  components:{
    Top
  },
  methods:{
      setImgUrl(){
        if(this.imgUrlIndex < this.bannerImgUrls.length - 1){
            this.imgUrlIndex = this.imgUrlIndex + 1
        }else{
            this.imgUrlIndex = 0;
        }
      }
  }
}
</script>

<style lang="scss">
.index-wrapper{
    position: relative;
    max-width: 1200px;
    min-width: 1000px;
    min-height: 100%;
    margin: auto;
    padding-top: 60px;
    .banner{
        position: relative;
        height: 380px;
        margin-bottom: 15px;
    }
    .banner .prev-img{
        position: absolute;
        z-index:99;
        top: 180px;
        left: 25px;
        color: #999;
        transform:rotate(180deg);
        cursor: pointer;
    }
    .banner .next-img{
        position: absolute;
        z-index:99;
        top: 180px;
        right: 25px;
        color: #999;
        cursor: pointer;
    }
    .img-list{
        position: absolute;
        z-index: 99;
        .img-list-li{
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #fff;
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .banner img{
        position: absolute;
        height: 100%;
    }
    .production-list{
        display: inline-block;
    }
    .production-item img{
        width: 100%;
        height: 180px;
    }
}
</style>