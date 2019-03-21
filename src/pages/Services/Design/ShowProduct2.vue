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
              title: "DISCOVERY",
              mesage:
                "Discover the key ingredients through market & user research, analyze your user’s needs, and create an unique platform proposition covering:Business Strategy, Competitor Landscape, Customer/User needs, Platform UX proposition"
            }
          ]
        },
        {
          imgUrl: "../../../static/images/m22.png",
          word: [
            {
              title: "UX STRATEGY",
              mesage:
                "Explore your target customers, studying target needs and behavior to optimize the User Experience."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/m23.png",
          word: [
            {
              title: "CONCEPT & WIREFRAMES",
              mesage:
                "Concept becomes reality. We will craft a blueprint, user work flow and wireframes to reveal your functions."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/m24.png",
          word: [
            {
              title: "USER INTERFACE DESIGN",
              mesage:
                "Visual is back. We give your application character and bring colors alive."
            }
          ]
        },
        {
          imgUrl: "../../../static/images/m24.png",
          word: [
            {
              title: "FRONT-END DEVELOPMENT",
              mesage:
                "See and feel the full interactions yourself. We will work closely to provide you with a seamless integration."
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