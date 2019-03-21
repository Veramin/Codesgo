<template>
  <div id="mobileAll">
    <!-- 页面头部 -->
    <div class="main_img">
      <img class="" src="../../../../static/images/unnamed-2.png" alt="">
    </div>
    <p class="title">Technical Architecture</p>
    <p class="sub_title">
      Magento 2 is now available, and we are ready to build and host it!Magento 2 uses several new approaches and technologies that give businesses an unmatched ability to create innovative shopping experiences and scale to new levels.
    </p>

    <div class="hearder">
      <div class="top">
        <p>Magento2 Advantages</p>
        <div class="headlist">
          <div class="textShow" v-for="(item,index) in heardList" :key="index">
            <img :src="item.imgUrl" alt>
            <span>{{item.mesage}}</span>
          </div>
        </div>
      </div>
    </div>

    <p class="title">Robust and Extendible Architecture</p>
    <p class="sub_title">
      There are fundamental changes in the overall architecture as well as the new testing framework. This empowers developers to produce higher quality and more testable code that is easy to maintain and extend in the long run.
    </p>

    <p class="title">Enhanced Performance and Stability</p>
    <p class="sub_title">The page caching and indexing functionalities allow Magento 2 to deliver speed with incredibly fast page load times for home, category and product pages, and fast checkout process.</p>

    <p class="title">Handling Higher Traffic Volumes</p>
    <p class="sub_title">Magento 2 supports 3,5 million page views per hour and more than 250.000 orders per hour.</p>

    <p class="title">Less Server Hardware Requirements</p>
    <p class="sub_title">The increase in performance will decrease the resources utilized on the server for pages.</p>

    <p class="title">The Latest Technology</p>
    <p class="sub_title">Magento 2 is equipped with PHP 7, MySQL 5.6+, as well as optional support for Redis v3.0 and Varnish 4.x.</p>

    <p class="title">Web Service</p>
    <p class="sub_title">With a revamped API service, Magento 2 opens a whole new world of possibilities for integrations (external services).</p>
  </div>
</template>

<script>
export default {
  name: "ShowProduct",
  data() {
    return {
      heardList: [
        {
          imgUrl: "../../../../static/images/mobile-phone.png",
          mesage: "Robust and Extendible Architecture"
          //适应Android和iOS上的不同屏幕尺寸
        },
        {
          imgUrl: "../../../../static/images/mobile-developping.png",
          mesage: "Enhanced Performance and Stability"
          //适应当前的移动通信趋势
        },
        {
          imgUrl: "../../../../static/images/mobile-expand.png",
          mesage: "Handling Higher Traffic Volumes"
          //提高性能和移动可用性
        },
        {
          imgUrl: "../../../../static/images/mobile-multiple.png",
          mesage: "Less Server Hardware Requirements"
          //采用快速变化的移动支付方式
        },
        {
          imgUrl: "../../../../static/images/mobile-expand.png",
          mesage: "The Latest Technology"
          //提高性能和移动可用性
        },
        {
          imgUrl: "../../../../static/images/mobile-multiple.png",
          mesage: "Web Service"
          //采用快速变化的移动支付方式
        }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#mobileAll {
  width: 100%;
  .main_img {
    width: 80%;
    margin: 0 auto;
  }
  .title {
    width: 80%;
    // display: inline-block;
    margin: 0 auto;
    padding: 30px;
    font-size: 30px;
    font-weight: 300;
    font-style: normal;
    text-align: left;
  }
  .sub_title {
    width: 80%;
    margin: 0 auto;
    font-weight: 300;
    font-style: normal;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 45px;
  }
  .hearder {
    width: 100%;
    height: 400px;
    background: url("../../../../static/images/topPhoto.jpg") no-repeat fixed
      bottom center/cover transparent;
    .top {
      position: relative;
      top: 50px;
      width: 70%;
      margin: auto;
      p {
        text-align: center;
        font-size: 25px;
        color: #fff;
      }
      .headlist {
        width: 1000px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 30px;
        .textShow {
          width: 450px;
          border: 1px solid #0097be;
          border-radius: 5px;
          height: 70px;
          background-color: rgba(255, 255, 255, 0.2);
          display: flex;
          flex-direction: row;
          align-items: center;
          color: #fff;
          position: relative;
          img {
            width: 40px;
            height: 40px;
            position: absolute;
            top: 15px;
            left: 20px;
          }
          span {
            margin-left: 65px;
          }
        }
        .textShow:nth-child(2n) {
          margin-left: 40px;
        }
        .textShow:nth-child(3) {
          margin:30px 0px;
        }
      }
    }
  }
}
</style>