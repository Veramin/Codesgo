<template>
  <div id="mobileAll">
    <!-- 页面显示列表 -->
    <!-- <div> -->
      <p class="main_title">Features – eCommerce Website Development</p>
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
          imgUrl: "../../../static/images/ProductCatalog.jpg",
          word: [
            {
              title: "Product Catalog Management",
              mesage:
                "Manage your full product catalog on descriptions, pricing, stock and digital assets."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/content.jpg",
          word: [
            {
              title: "Content Management",
              mesage:
                "Manage page content via easy-to-use text editors, configure and update banners, manage slide shows."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/payment.jpg",
          word: [
            {
              title: "Payment and Credit Management",
              mesage:
                "Manage and securely configure payment gateways, check on transactions and manage loyalty point systems."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/TaxRate.jpg",
          word: [
            {
              title: "Delivery and Tax Rate Management",
              mesage:
                "Configure delivery areas and rate calculations, set delivery areas, manage tax rate groups and taxable products."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/review.jpg",
          word: [
            {
              title: "Order Management",
              mesage:
                "View, edit and process sales orders, add tracking codes for real-time user tracking and manage return of goods."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/SMS.jpg",
          word: [
            {
              title: "Email and SMS Communication",
              mesage:
                "Set and configure email, SMS and messenger communication templates for optimized communication to customers."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/Marketing.jpg",
          word: [
            {
              title: "Marketing and Promotion Rules",
              mesage:
                "Add and configure promotions and seasonal pricing. (Auto-)generate coupons for your customers and provide them with additional special tier discounts."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/validate.jpg",
          word: [
            {
              title: "Customer Service",
              mesage:
                "Evaluate and approve product reviews to enrich product content, help customers with placement of orders and guide a return merchant authorization flow."
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
  .main_title {
    padding: 30px 0px;
    text-align: left;
    width: 80%;
    margin: 0 auto;
    font-size: 30px;
    font-weight: 300;
    font-style: normal;
  }
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