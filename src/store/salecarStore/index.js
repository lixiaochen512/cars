export default {
    namespaced:true,
    state:{
        step:2
    },
    mutations:{
        changeStep(state,payload){
            state.step = payload.step
        }
    }
}