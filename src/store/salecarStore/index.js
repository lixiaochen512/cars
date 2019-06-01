export default {
    namespaced:true,
    state:{
        step:1
    },
    mutations:{
        changeStep(state,payload){
            state.step = payload.step
        }
    }
}