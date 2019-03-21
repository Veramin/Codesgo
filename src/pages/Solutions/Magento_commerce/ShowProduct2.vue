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
          imgUrl: "../../../static/images/m21.png",
          word: [
            {
              title: "Reduce Business Costs",
              mesage:
                "Reduce costs, track inventory sales metrics, and automate repetitive order management tasks through the Magento dashboard. Save hours of manual effort and put that time back into your business and eCommerce websites."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/m22.png",
          word: [
            {
              title: "Get to Market Quickly",
              mesage:
                "Magento is so agile and user-friendly, you can launch your site quickly, adapt to market needs in real time, and achieve ROI faster than ever. And our experienced solution partners offer special design and implementation bundles for small business."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/m23.png",
          word: [
            {
              title: "Drive New Revenue Growth",
              mesage:
                "Integrate multiple shopping experiences including Amazon and eBay. You can even manage all inventory and sales through a single product control and distribution system for your web stores."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/m24.png",
          word: [
            {
              title: "Transform Customer Experiences",
              mesage:
                "Deliver an irresistible, seamless shopping experience at every customer touchpoint with Magento Commerce."
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