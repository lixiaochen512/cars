import moment from "moment"

export default (store)=>{
    let o = [
        { title: '编号', key: 'id', sortable: 'custom' },
        {
            title: '缩略图',
            key: 'avatar',
            width: 116,
            height: 72,
            render(h, { row }) {
                return h('div', { attrs: { 'data-id': row.id } }, [
                    h('LoadingGifImage', {
                        attrs: {
                            w: 108,
                            h: 72,
                            src: `http://192.168.1.88/images/carimages_small/${row.id}/view/${row.avatar}`
                        }
                    })
                ])
            }
        },
        { title: '品牌', key: 'brand' },
        { title: '型号', key: 'series' },
        { title: '颜色', key: 'color' },
        { title: '价格', key: 'price', sortable: 'custom' },
        { title: '档位', key: 'gearbox' },
        { title: '排量', key: 'engine' },
        { title: '公里数', key: 'km', sortable: 'custom' },
        { 
            title: '购买时间', 
            key: 'buydate' ,
            render(h,{row}) {
                return h('div',{},moment(row.buydate).format('YYYY年MM月DD日'))
            }
        },
        { title: '燃料', key: 'fuel' },
        {
            title: '是否含牌',
            key: 'license',
            render(h, { row }) {
                return h('div', {}, row.license ? '是' : '否')
            }
        }
    ]

    // 遍历o数组，看看o数组中谁的key与store中sort的sortby相同，就表示按这个对象设置初始化排序
    for(let i = 0; i < o.length;i++){
        if(o[i].key == store.sort.sortby){
            o[i].sortType = store.sort.sortdirection == 1 ? 'asc' : 'desc';
        }
    }
        // for (let i = 0; i < o.length; i++) {
        //     if (o[i].key == store.sort.sortby) {
        //         o[i].sortType = store.sort.sortdirection == 1 ? 'asc' : 'desc'
        //     }           
        // }
    return o;
}