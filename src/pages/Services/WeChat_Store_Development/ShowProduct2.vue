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
          imgUrl: "../../../static/images/Screen-Shot-2016-02-15-at-8.23.09-PM.png",
          word: [
            {
              title: "WeChat Unified Login",
              mesage:
                "User will be able to quick log in to your eCommerce after adapting unified login function, with lower registration barriers and high user retention. As business vendor, you will receive user info (profile picture, username, sex, location) and user authorization."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/wechatmessagingfunction.png",
          word: [
            {
              title: "WeChat Messaging Function",
              mesage:
                "Normally, eCommerce sites will notify users about transaction information and updates through text message or e-mail. Instead, WeChat eCommerce will directly inform customers through WeChat messaging. It’s simple, direct and free for users."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/wechat-pay-QR-in-app-1024x651.jpg",
          word: [
            {
              title: "WeChat Pay",
              mesage:
                "Your customer can easily complete the purchase through mobile phone by using WeChat Pay. WeChat pay has fully supported different payment options: debit/credit cards, QR code payment, WeChat public account payment, and mobile app payment."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/wechatmarketinginitiatives-2.png",
          word: [
            {
              title: "WeChat Marketing Initiatives",
              mesage:
                "We will also develop to collaborate marketing initiatives for your business on WeChat: WeChat red envelopes, coupons, membership discounts, etc."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/cloud.jpg",
          word: [
            {
              title: "WeChat Customization",
              mesage:
                "We will customize multiple WeChat functions to help your WeChat store reach full potential. Innovative functions could be: voting, Q&A, voice recognition, image pattern recognition, membership CRM, LBS (Location-based services), etc."
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
  .showlist:nth-child(2n) {
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