<template>
    <div id="work">
        <div class="backImg">
        <p>our Customers</p>
        </div>
        <div class="topText">
        <p>They are our long-term partners in close cooperation.</p>
        <p>Cooperative partner:</p>
        </div>
        <!-- 列表显示 -->
        <div class="photoList">
        <div class="imgAndWord" v-for="(item,index) in photoList" :key="index">
            <img class="php" :src="item.imgUrl" alt>
            <div class="box" v-for="(pro,index) in item.word" :key="index">
            <div class="title">
                <p>{{pro.title}}</p>
            </div>

            <div class="mesage">
                <p>{{pro.mesage}}</p>
            </div>
            <img class="icon" :src="pro.icon" alt>
            </div>
        </div>
        </div>
        <!-- <ShowProduct></ShowProduct> -->

    </div>
</template>

<script>
// 引入组件
// import TabBar from "./components/TabBar/TabBar"
export default {
    name: "Work",
    data() {
        return {
        photoList: [
            {
            imgUrl: "../../../static/images/acer.jpg",
            word: [
                {
                title: "acer",
                mesage: "Electronic product",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/aigle.png",
            word: [
                {
                title: "AIGLE",
                mesage: "Clothing industry",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/durex.jpg",
            word: [
                {
                title: "durex",
                mesage: "Safety industry",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/Carrefour.jpg",
            word: [
                {
                title: "CarreFour",
                mesage: "Retail industry",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/gozo.jpg",
            word: [
                {
                title: "gozo",
                mesage: "Clothing industry",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/juicy.jpg",
            word: [
                {
                title: "JUICY COUTURE",
                mesage: "Clothing industry",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/michelin.png",
            word: [
                {
                title: "MICHELIN",
                mesage: "Automobile industry",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/touying.jpg",
            word: [
                {
                title: "Projector",
                mesage: "Electronic product",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/yiwang.jpg",
            word: [
                {
                title: "YiWang supermarket",
                mesage: "Retail industry",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/dia.jpg",
            word: [
                {
                title: "Dia",
                mesage: "Retail industry",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/gant.jpg",
            word: [
                {
                title: "GANT",
                mesage: "Clothing industry",
                icon: "../../../static/images/find.png"
                }
            ]
            },
            {
            imgUrl: "../../../static/images/chazitang.png",
            word: [
                {
                title: "ChaZiTang",
                mesage: "Other industry",
                icon: "../../../static/images/find.png"
                }
            ]
            }
        ]
        };
  },
    components: {
        // TabBar
    }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

    #work {
        width: 100%;
        // background: #f8f8f8;
        .backImg {
            height: 800px;
            background: url("../../../static/images/city_1.jpg") no-repeat;
            background-size: 100%;
            background-position: center;
            p {
            text-align: center;
            font-size: 40px;
            padding-top: 70px;
            color: rgb(37, 37, 37);
            }
        }
        .topText {
            text-align: center;
            margin: 20px auto;
            font-size: 28px;
            line-height: 50px;
            color: rgb(84, 88, 95);
        }
        .photoList {
            width: 80%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 50px;
            .imgAndWord {
            position: relative;
            margin-left: 85px;
            overflow: hidden;
            .php {
                width: 300px;
                height: 200px;
            }
            .box {
                background: rgba(255, 255, 255, 0.8);
                position: absolute;
                top: 170px;
                width: 300px;
                height: 60px;
                .title {
                font-size: 25px;
                position: absolute;
                top: 5px;
                left: 15px;
                }
                .mesage {
                p {
                    position: absolute;
                    top: 50px;
                    left: 20px;
                    width: 200px;
                    font-size: 14px;
                }
                }
                .icon {
                width: 15px;
                position: absolute;
                top: 50px;
                left: 260px;
                }
            }
            }
            .imgAndWord:nth-child(n) {
            margin-bottom: 40px;
            }
            .imgAndWord:hover > .box {
            top: 140px;
            transition: all 0.4s ease-in-out;
            }
            .imgAndWord:hover {
            box-shadow: 10px 10px 20px #ccc;
            }
            .imgAndWord:hover > .box > .title > p {
            top: 0;
            transition: all 0.6s ease-in-out;
            }
            .imgAndWord:hover > .box > .mesage > p {
            top: 35px;
            transition: all 0.6s ease-in-out;
            }
            .imgAndWord:hover > .box > .icon {
            top: 35px;
            transition: all 0.6s ease-in-out;
            }
        }
    }
    
</style>