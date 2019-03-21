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
          imgUrl: "../../../static/images/Artboard-300x220.png",
          word: [
            {
              title: "eCommerce Market Localization Guide",
              mesage:
                "Our eCommerce experts offer a complete guide to a country’s eCommerce ecosystem, mapping out topics from legal to marketing.We provide real-time market knowledge from our quarterly audited country market and platform localization data. Currently this data covers Germany, France, United Kingdom, Italy, the Netherlands, Spain, Poland and Asia – China."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/Artboard-300x220.png",
          word: [
            {
              title: "eCommerce Store Localization Guide",
              mesage:
                "This guide provides our clients with a step-by-step visual guide how to localize to the country’s legal, financial, marketing and general eCommerce ecosystem. Our 10+ years of aggregated market knowledge let our team craft an all-inclusive guide."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/Artboard-300x220.png",
          word: [
            {
              title: "eCommerce Legal Localisation Guide",
              mesage:
                "Selling within a country’s legal ecosystem requires the adoption of terms, conditions, policies and legal notes. Our team created a guide on must-have sections and a legal checklist on adapting your company’s terms to online compliant text."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/eCommerce.png",
          word: [
            {
              title: "eCommerce Market Opportunity Scan",
              mesage:
                "Providing you with high-level indicator about the market (country) opportunity for your brand and product. Our eCommerce consultants will provide a mix of country overview info, custom industry and product data to evaluate your market opportunity. "
            }
          ]
        },
        {
          imgUrl: "../../../static/images/Screen-Shot-2018-03-29-at-10.52.15-PM.png",
          word: [
            {
              title: "eCommerce Channel Strategy",
              mesage:
                "Aggregating all eCommerce knowledge on market potential, market localization, store localization, legal implications with hands-on eCommerce advice and recommendations from our eCommerce consultants to create the optimal strategy."
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