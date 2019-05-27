import IndexLayout from '../layouts/IndexLayout.vue'
import SlideLayout from '../layouts/SlideLayout.vue'
import buyRoute from './buyRoute'
import transferRoute from './transferRoute'

export default {
  mode: "history",
  routes: [
    {
        path:'/index',
        component:IndexLayout,
        children:[
            {path:'index',
             name:'index',
             meta:{column:'index'},
             component:()=>import("../views/index/index.vue")
            },
            {path:'buy',
             name:'buy',
             meta:{column:'buy'},
             component:SlideLayout,
             redirect:{name:'large-scale-car-selection'},
             children:
                 buyRoute.children.map(item=>({
                    path:item.en,
                    name:item.en,
                    meta:{
                        column:'buy',
                        scolumn:item.en,
                        scolumnc:item.cn
                    },
                    component:item.co
                 }))
            },
            {path:'insurance',
             name:'insurance',
             meta:{column:'insurance'},
             component:()=>import("../views/insurance/index.vue")
            },
            {path:'parking',
             name:'parking',
             meta:{column:'parking'},
             component:()=>import("../views/parking/index.vue")
            },
            {path:'sale',
             name:'sale',
             meta:{column:'sale'},
             component:()=>import("../views/sale")
            },
            {path:'transfer',
             name:'transfer',
             meta:{column:'transfer'},
             component: SlideLayout,
             redirect:{name:'b2b'},
             children:
                transferRoute.children.map(item=>({
                    path:item.en,
                    name:item.en,
                    meta:{
                        column:'transfer',
                        scolumn:item.en,
                        scolumnc:item.cn
                    },
                    component:item.co
                }))
            },
            {path:'*',redirect:{name:'index'}}
        ]
    },
    {path:'*',redirect:{name:'index'}}
  ]
};
