export default {
    columnChinese: '过户',
    columnEnglish: 'transfer',
    children:[
        {en:'b2b',
         cn:'本省车辆过户到本省',
         co:()=>import("../views/transfer/b2b.vue")
        },
        {en:'b2w',
         cn:'本省车辆过户到外省',
         co:()=>import("../views/transfer/b2w.vue")
        },
        {en:'w2b',
         cn:'外省车辆过户到本省',
         co:()=>import("../views/transfer/w2b.vue")
        }
    ]
}