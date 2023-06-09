const Mock = require('mockjs')
let data = Mock.mock({
    "data|3": [ //生成6条数据 数组
        {
            "imgId|+1": 1,//生成商品id，自增1
            "imgName": "@cname",//生成商品名 ， 都是中国人的名字
            "shopTel": /^1(5|3|7|8)[0-9]{9}$/,//生成随机电话号
            "shopAddress": "@county(true)", //随机生成地址
            "shopStar|1-5": "★", //随机生成1-5个星星
            "salesVolume|30-1000": 30, //随机生成商品价格 在30-1000之间
            "imgLogo": "@Image('100x40','#c33', '#ffffff','小北鼻')", //生成随机图片，大小/背景色/字体颜色/文字信息
            "food|2": [ //每个商品中再随机生成2个food
                {
                    "foodName": "@cname", //food的名字
                    "foodPic": "@Image('100x40','#c33', '#ffffff','小可爱')",//生成随机图片，大小/背景色/字体颜色/文字信息
                    "foodPrice|1-100": 20,//生成1-100的随机数
                    "aname|2": [
                        {
                            "aname": "@cname",
                            "aprice|30-60": 20
                        }
                    ]
                }
            ]
        }
    ]
})
Mock.mock('/goods/goodAll', 'post', () => { //三个参数。第一个：路径，第二个：请求方式post/get，第三个：回调，返回值
    return data
})
let code = Mock.mock({
    "data": {
        "code":/^[0-9]{4}$/,
    }
})
Mock.mock('/getcode', 'post', () => {
    return code
})
let songdata = Mock.mock({
    "data|30": [
        {
            "id|+1": 0,
            "songtitle": "@cname",
            "singer": "@cname",
            "al": "@cname",
            "songmin": /^(0|1)[0-9]$/,
            "songsec": /^[0-5][0-9]$/,
            "tag1":/^(0|1)$/,
            "tag2":/^(0|1)$/,
            "islike":0
        }
    ]
})
Mock.mock('/songdata', 'post', () => {
    return songdata
})
let hotlist=Mock.mock({
    "data|30": [
        {
            "id|+1": 1,
            "songtitle": "@cname",
            "singer": "@cname",
            "al": "@cname",
            "songmin": /^(0|1)[0-9]$/,
            "songsec": /^[0-5][0-9]$/,
            "tag1":/^(0|1)$/,
            "tag2":/^(0|1)$/,
            "islike":0,
            "songword":"@cname"
        }
    ]
})
Mock.mock('/gethotlist','get',()=>{
    return hotlist
})