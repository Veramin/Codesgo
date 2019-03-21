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
          imgUrl: "../../../static/images/overview-ecommerce-strategy-2-300x166.png",
          word: [
            {
              title: "China eCommerce Strategy",
              mesage:
                "We guide you through our market-proven workflow by analyzing your strategy from a Market – Industry – Brand approach. Analyzing your market opportunity, benchmarking your product category/subcategory and setting your winning brand strategy for China!"
            }
          ]
        },
        {
          imgUrl: "../../../static/images/chinaecommerce-chinauserexperience-1-2.png",
          word: [
            {
              title: "China Unified Design",
              mesage:
                "Our China eCommerce solutions are designed to fit the Chinese market. Moreover, we unify your brand identity over multiple channels such as brand commerce and marketplace channels to generate volume and acquire new users."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/China-localization-en.png",
          word: [
            {
              title: "China Localization",
              mesage:
                "Chinese social media, payment integration and logistics tracking. We ensure that your Chinese audience can easily navigate your website and enjoy a pleasurable shopping experience."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/Screen-Shot-2018-06-09-at-5.01.43-PM-1.png",
          word: [
            {
              title: "Mobile Centric and Multi-channeling",
              mesage:
                "Adapting to the growing use of mobile devices calls for full integration of Desktop PC, Mobile and Wechat storefronts. Also synergize data with marketplaces in order to measure your customers’ activities over multiple channels."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/03e3287.png",
          word: [
            {
              title: "Channel Data Integration",
              mesage:
                "In order to get the best out of your multi-channel approach, we aggregate valuable data over the customer journey. From acquiring users on marketplaces to in-depth customer data via a WeChat store solution or fully branded eCommerce."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/Screen-Shot-2018-06-09-at-6.43.31-PM.png",
          word: [
            {
              title: "eCommerce Insights and Metrics",
              mesage:
                "Within our managed service scope we make use of the latest eCommerce metrics. Providing real-time eCommerce dashboards on Sales Order Value, abandoned shopping carts and conversion per acquisition channel. On top of that, our team of data scientists analyze Customer Life-time Value and provide full insights into RFM, Customer Life-time Value and churn rate."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/customer-acquisition-tmo-analytics.jpg",
          word: [
            {
              title: "Managed Services",
              mesage:
                "We offer you eCommerce solutions following our customer-centric approach. Driving paid and organic traffic while increasing the Customer Life-time Value through our marketing services, creating a higher Return on Investment (ROI) and valuable insights."
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