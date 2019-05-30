import querystring from "querystring"
import axios from "axios"
export default {
    namespaced:true,
    state:{
        page: 1,
        pagesize: 10,
        total: 0,
        sort:{
            sortby:'id',
            sortdirection:1
        },
        results:[],
        filters:[
            // { k: 'color', v: '红v蓝' },
            // { k: 'brand', v: '奥迪v大众v奔驰' },
            // { k: 'engine', v: '1.6L' }
            // { k: 'price', v: '0to50' },
            // { k: 'km', v: '10000to500000' },
            // { k: 'buydate', v: '1325139200000to1551369600000' }
        ]
    },
    mutations: {
        changeResults(state,payload){
            state.results = payload.results;
        },
        changeTotal(state,payload){
            state.total = payload.total;
        },
        changePage(state,payload){
            state.page = payload.page;
        },
        changePageSize(state,payload){
            state.pagesize = payload.pagesize;
        },
        changeSort(state,payload){
            state.sort = payload.sort;
        },
        updateFilters(state,{k,v}){
            state.filters = state.filters.map(item=>item.k === k ? {...item,v} : item)
        },
        removeFilters(state,{k}){
            state.filters = state.filters.filter(item => item.k != k)
        },
        addFilters(state,{k,v}){
            state.filters.push({k,v})
        },
    },
    actions:{
        async init({commit,state}){
            const queryObj ={
                page:state.page,
                pagesize:state.pagesize,
                sortby:state.sort.sortby,
                sortdirection:state.sort.sortdirection
            }
            for (let i = 0; i < state.filters.length; i++) {
               queryObj[state.filters[i].k] = state.filters[i].v
                
            }
            const {results,total} = await axios.get('/findcar?' + querystring.stringify(queryObj)).then(res=>res.data)
            
            commit('changeResults',{results})
            commit('changeTotal',{total})

        },
        changePage({dispatch,commit},{page}){
            commit('changePage',{page})
            dispatch('init')
        },
        changePageSize({dispatch,commit},{pagesize}){
            commit('changePageSize',{pagesize})
            dispatch('init')            
        },
        changeSort({dispatch,commit},{sort}){
            commit('changeSort',{sort})
            dispatch('init')
        },
        changeFilters({dispatch,commit,state},{k,v}){
            var isExist = false;

            for (let i = 0; i < state.filters.length; i++) {
                if (state.filters[i].k == k) {
                    isExist = true;
                }                
            };

            if (isExist) {
                if (v !== '') {
                    commit('updateFilters',{ k, v })
                } else {
                    commit('removeFilters',{ k })                   
                }
            } else {
                commit('addFilters',{k,v})
            };

            commit('changePage',{page:1})
            dispatch('init')
        }
    }

}