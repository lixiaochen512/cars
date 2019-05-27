export default {
    columnChinese: '买车',
    columnEnglish: 'buy',
    children:[
        {en:'large-scale-car-selection',
         cn:'大表选车',
         co:()=>import("../views/buy/large-scale-car-selection.vue")
        },
        {en:'ai-recommendation-car',
         cn:'AI荐车',
         co:()=>import("../views/buy/ai-recommendation-car.vue")
        },
        {en:'judicial-auction-vehicle-selection',
         cn:'司法拍卖车辆',
         co:()=>import("../views/buy/judicial-auction-vehicle-selection.vue")
        }
    ]
}