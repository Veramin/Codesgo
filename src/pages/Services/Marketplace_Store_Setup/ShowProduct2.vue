<template>
  <div id="mobileAll">
    <!-- 页面显示列表 -->
    <!-- <div> -->
      <div class="showlist" v-for="(item,index) in MobileList" :key="index">
        <div class="productAndimg">
          <div class="textShow" v-for="(pro,index) in item.word" :key="index">
            <p class="title">{{pro.title}}</p>
            <p class="mesage">{{pro.mesage}}</p>
          </div>
          <!-- 图片显示 -->
          <div class="photoShow">
            <img :src="item.imgUrl" alt>
          </div>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      MobileList: [
        {
          imgUrl: "../../../static/images/uiDesign.png",
          word: [
            {
              title: "Dedicated Mobile Design",
              mesage:
                "We design and develop a mobile optimised User Interfacefor you, focused on ease-of-use, simple navigation flow and quick check-out process. With our solid experience on eCommerce we design China mobile and Wechat friendly store fronts."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/telCenter.jpg",
          word: [
            {
              title: "Mobile Centric Approach",
              mesage:
                "Mobile commerce is driven by a fast pace environment and direct communication. Therefore email registration and communication are being replaced by mobile communication (SMS / app messenger) in order to fulfill user needs: fast, convenient and direct! Let us help you to integrate mobile phone centric design, verifications and local SMS gateways."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/payMode.png",
          word: [
            {
              title: "Mobile Payment Methods",
              mesage:
                "In markets such as China, mobile payment has advanced to become the most diverse in the world and part of people’s daily spending habits. We help our clients implementing the following: mobile payment via external QR code scanning, on-device bar code scanning, HTML 5 payment landing pages and in-app fingerprint based authentication on WeChat / Alipay."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/validate.jpg",
          word: [
            {
              title: "Mobile Authentication",
              mesage:
                "Mobile devices can support multi-channel integrations and social media login. Use them as authentication device to login via authorisation on mobile."
            }
          ]
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
  .showlist {
    width: 100%;

    .productAndimg {
      width: 80%;
      height: 400px;
      display: flex;
      align-items: center;
      margin: 0 auto;
      .textShow {
        flex: 0.5;
        .title {
          font-size: 25px;
          color: #54585f;
          margin-bottom: 20px;
        }
        .mesage {
          width: 540px;
          color: rgb(84, 88, 95);
          line-height: 25px;
        }
      }
      .photoShow {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 450px;
        }
      }
    }
  }
  .showlist:nth-child(2n - 1) {
    background: #f0f3f6;
  }
  .showlist:nth-child(2n) > .productAndimg {
    flex-direction: row-reverse;
  }
  .showlist:nth-child(2n) > .productAndimg > .photoShow {
    flex-direction: row-reverse;
    margin-right: 30px;
  }
  .showlist:nth-child(2n - 1) > .productAndimg > .photoShow {
    margin-left: 30px;
  }
  .showlist:nth-child(2n - 1) > .productAndimg > .textoShow {
    margin-left: 60px;
  }
}
</style>