import moment from "moment";
import dictionary from "./dictionary";

export default (store)=>{
    let o = [
        {  key: 'id', sortable: 'custom' },
        {
            
            key: 'avatar',
            width: 116,
            height: 72,
            render(h, { row }) {
                return h('div', { attrs: { 'data-id': row.id } }, [
                    h('LoadingGifImage', {
                        attrs: {
                            w: 108,
                            h: 72,
                            // src: `http://192.168.1.88/images/carimages_small/${row.id}/view/${row.avatar}`
                            src: `http://127.0.0.1:3000/images/carimages/carimages/${row.id}/view/${row.avatar}`
                        }
                    })
                ])
            }
        },
        { key: 'brand' },
        { key: 'series' },
        { key: 'color', width: 60},
        { key: 'price', sortable: 'custom' },
        { key: 'gearbox' },
        { key: 'engine' },
        { key: 'km',sortable: 'custom' },
        { 
             key: 'buydate',
            render(h, {row}){
                return h('div', {}, moment(row.buydate).format('YYYY年MM月DD日'))
            }
        },
        { key: 'fuel' },
        { key: 'exhaust', width: 60 },
        {
            key: 'license',
            render(h, { row }) {
                return h('div', {}, row.license ? '是' : '否')
            }
        }
    ]

    // 遍历o数组，看看o数组中谁的key与store中sort的sortby相同，就表示按这个对象设置初始化排序
    for(let i = 0; i < o.length;i++){
        // 动态补充title
        o[i].title = dictionary[o[i].key]

        if(o[i].key == store.sort.sortby){
            o[i].sortType = store.sort.sortdirection == 1 ? 'asc' : 'desc';
        }
    }

    // 读取本地存储的key，修改当前o数组的每个对象的顺序
    let sortArr = JSON.parse(localStorage.getItem('colSort'))
    // 如果本地存储有内容，则按照本地存储排序
    if(sortArr){
        return sortArr.map(item => {
            for (let i = 0; i < o.length; i++) {
                if (o[i].key === item) {
                    return o[i]   //根据本地存储的key返回新的对象
                }
            }
        })
    }
    
    // 否则按照默认排序
    return o;
}