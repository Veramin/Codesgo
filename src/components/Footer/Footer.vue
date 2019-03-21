<template>
  <div id="footer">
    <div class="bottomList">
      <div class="listCenter">

        <!-- 解决方案 -->
        <div class="solution" v-for="(solu,index) in solution" :key="index">
          <p class="title">{{solu.title}}</p>
          <div class="list" v-for="(so,index) in solu.infor" :key="index">
            <p>{{so.mesage}}</p>
          </div>
        </div>
        <!-- 解决方案 -->
        <div class="services" v-for="(ser,index) in services" :key="index">
          <p class="title">{{ser.title}}</p>
          <div class="list" v-for="(so,index) in ser.infor" :key="index">
            <p>{{so.mesage}}</p>
          </div>
        </div>
        <!-- 友情链接 -->
        <!-- <div class="friendLink" v-for="(link,index) in friendLink" :key="index">
          <p class="title">{{link.title}}</p>
          <div class="list" v-for="(fr,index) in link.infor" :key="index">
            <p>{{fr.mesage}}</p>
          </div>
        </div> -->
        <!-- 公司简介 -->
        <div class="profile" v-for="(profile,index) in comProfile" :key="index">
          <p class="title">{{profile.title}}</p>
          <div class="list" v-for="(inf,index) in profile.infor" :key="index">
            <p>
              {{inf.mesage}}
            </p>
          </div>
        </div>
        <!-- 联系我们 -->
        <!-- <div class="navigation" v-for="(list,index) in contactUs" :key="index">
          <p class="title">{{list.title}}</p>
          <div class="list" v-for="(co,index) in list.infor" :key="index">
            <p>
              <img :src="co.imgUrl" alt>
              {{co.mesage}}
            </p>
          </div>
        </div> -->
        <!-- 工作时间
        <div class="navigation" v-for="(time,index) in workTime" :key="index">
          <p class="title">{{time.title}}</p>
          <div class="list" v-for="(wo,index) in time.infor" :key="index">
            <p>{{wo.mesage}}</p>
            <div class="year">{{wo.year}}</div>
            <div class="day">{{wo.day}}</div>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {


      solution: [
        {
          title: "Solutions",
          infor: [
            {
              mesage: "China eCommerce"
            },
            {
              mesage: "WeChat eCommerce"
            },
            {
              mesage: "Mobile Commerce"
            },
            {
              mesage: "O2O Commerce"
            },
            {
              mesage: "Cloud eCommerce"
            },
            {
              mesage: "Magento2   Development"
            }
          ]
        }
      ],
      services: [
        {
          title: "Services",
          infor: [
            {
              mesage: "eCommerce Consultancy & Strategy"
            },
            {
              mesage: "UX / UI Design"
            },
            {
              mesage: "eCommerce Website Development "
            },
            {
              mesage: "WeChat Store Development"
            },
            {
              mesage: "Marketplace Store Setup"
            },
            {
              mesage: "Cloud Hosting"
            },
            {
              mesage: "Managed Services"
            }
          ]
        }
      ],
      friendLink: [
        {
          title: "友情链接",
          infor: [
            {
              mesage: "首页"
            },
            {
              mesage: "最新资讯"
            },
            {
              mesage: "招聘信息"
            },
            {
              mesage: "magento2下载"
            }
          ]
        }
      ],
      comProfile: [
        {
          title: "About us",
          infor: [
            {
              mesage: "About us"
            },
            {
              mesage: "Our tream"
            },
            {
              mesage: "Our cases"
            },
            {
              mesage: "Our Clients",
            }
          ]
        }
      ],

      contactUs: [
        {
          title: "联系我们",
          infor: [
            {
              imgUrl: "../../../static/images/gps.png",
              mesage: "四川高新区企业电子商务协会荣誉会员单位"
            },
            {
              imgUrl: "",
              mesage: "四川成都天府软件园"
            },
            {
              imgUrl: "../../../static/images/tel.png",
              mesage: "86.137.193.03362"
            },
            {
              imgUrl: "../../../static/images/e-mail.png",
              mesage: "support@magento.cn"
            },
            {
              imgUrl: "../../../static/images/phone.png",
              mesage: "服务热线: 400-686-1853"
            }
          ]
        }
      ],
      workTime: [
        {
          title: "工作时间",
          infor: [
            {
              mesage:
                "我们向尊贵的五星级客户提供24x7全年无节假日支持服务。售前技术支持工作时间如下："
            },
            {
              year: "周一至周五:",
              day: "上午9点---下午6点"
            },
            {
              year: "星期六:",
              day: "上午10点---下午2点"
            },
            {
              year: "星期天:",
              day: "只提供值班销售咨询"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
#footer {
  width: 100%;
  height: 400px;
  background: #373d44;
  .bottomList {
    margin: 0 auto;
    width: 80%;
    height: 400px;
    color: #fff;
    .listCenter {
      padding-top: 80px;
      letter-spacing: 1px;
      line-height: 45px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      color: #e5e5e5;
      .title {
        font-size: 20px;
      }
      .list {
        font-size: 14px;
        color: #ccc;
        p {
          line-height: 28px;
        }
      }
      .profile {
        width: 20%;
      }
      .solution {
        width: 30%;
      }
      .services {
        width: 40%;
      }
      .friendLink {
        width: 13%;
      }
      .navigation {
        width: 30%;
        position: relative;
        .day {
          position: absolute;
          right: 0;
          margin-top: -42px;
        }
      }
    }
  }
}
</style>