<template>
  <div id="mobileAll">
    <!-- 页面头部 -->
    <div class="hearder">
      <div class="top">
        <p>Mobile Commerce Challenges</p>
        <div class="headlist">
          <div class="textShow" v-for="(item,index) in heardList" :key="index">
            <img :src="item.imgUrl" alt>
            <span>{{item.mesage}}</span>
          </div>
        </div>
      </div>
    </div>
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
          mesage: "Adapt to different screen sizes on Android and iOS"
          //适应Android和iOS上的不同屏幕尺寸
        },
        {
          imgUrl: "../../../../static/images/mobile-developping.png",
          mesage: "Adapt to the current mobile communication trends"
          //适应当前的移动通信趋势
        },
        {
          imgUrl: "../../../../static/images/mobile-expand.png",
          mesage: "Improve performance and mobile usability"
          //提高性能和移动可用性
        },
        {
          imgUrl: "../../../../static/images/mobile-multiple.png",
          mesage: "Adoption of rapidly changing mobile payment methods"
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
  // height: 2000px;
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
        .textShow:nth-child(-n + 2) {
          margin-bottom: 30px;
        }
      }
    }
  }
}
</style>