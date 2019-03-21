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
          imgUrl: "../../../static/images/business-model-canvas-using-lucidchart-header@2x-1024x439.png",
          word: [
            {
              title: "e-Business Models",
              mesage:
                "Within the Wechat ecosystem we can come up with multiple eBusiness models to meet your companies and online demands. Our WeChat solutions can support multiple Storefronts for B2C, B2b and B2B providing different Marketing mechanisms like Subscription Buying, Content focused, Pop-Up store / campaign, User Community Activation, User-Generated Content and Voucher / Gift card."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/wechatecmoomerce-wechatstoredesign11.png",
          word: [
            {
              title: "Wechat Storefront Setup",
              mesage:
                "We develop either a Wechat H5 Web APP (Service Account) or provide Wechat Mini Program (Service & Media Account) as a storefront. Wechat Mini Programs can offer the user a more fluent user experience, additional hardware functions like: Camera & GPS functionalities, and can be integrated in a different way to Official Account and embedded into Wechat Marketing campaigns."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/diversity1.jpg",
          word: [
            {
              title: "Channel Promotions",
              mesage:
                "By following a Wechat eCommerce approach benefit from promoting your application via Moments Ad, PPC Advertising & KOL Campaigns to increase traffic, User base and long-term sales. We can integrate your Call-to-Action with your Moment Ad directly converting your client for a coupon download or eCommerce transaction."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/WeChat-eCommerce-Omni-Channel1.jpg",
          word: [
            {
              title: "Expandable to Omni-channel Approach",
              mesage:
                "Together we will strategize an integrated plan to meet our clients needs on different stores / devices. Offering one back-end solution for multiple stores as Wechat Store."
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