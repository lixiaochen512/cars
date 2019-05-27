export default {
    namespaced:true,
    state: {
        column:'',
        scolumn:'',
        scolumnc:''
    },
    mutations: {
        changeColumn(state,{column,scolumn,scolumnc}){
            state.column = column
            state.scolumn = scolumn
            state.scolumnc = scolumnc
        }
    }
  }