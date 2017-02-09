<template>
    <div class="wrapper">
        <section class="col-md-12 banner">
            <span class="prev-img" @click="setImgUrl">左</span>
            <div class="row">
                <transition name="fade" v-for="(item,index) in bannerImgUrls">
                    <img :src="item" class="col-md-12" v-show="index === imgUrlIndex">
                </transition>
            </div>
            <span class="next-img" @click="setImgUrl">有</span>
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
export default {
  name: 'dsindex',
  data () {
    return {
      msg: '您好，欢迎来到可贴杂货铺',
      bannerImgUrls:[
          'http://i2.hdslb.com/bfs/archive/7c27f9938fe82f9f7aa40228bc5563fe51f8a668.jpg',
          'http://i2.hdslb.com/bfs/archive/7c27f9938fe82f9f7aa40228bc5563fe51f8a668.jpg'
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
  methods:{
      setImgUrl(){
        this.imgUrlIndex = this.imgUrlIndex === 0?1:0
      }
  }
}
</script>

<style>
.wrapper{
    position: relative;
    max-width: 1200px;
    min-width: 1000px;
    min-height: 100%;
    margin: auto;
}
.banner{
    position: relative;
    height: 380px;
    margin-bottom: 15px;
}
.banner .prev-img{
    position: absolute;
    top: 150px;
    left: 10px;
    background: #fff;
}
.banner .next-img{
    position: absolute;
    top: 150px;
    right: 10px;
    background: #fff;
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
</style>