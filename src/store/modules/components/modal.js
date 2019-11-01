 
 const state = {

    modal:{
        isModalVisible:false
    }

  }
  
  // getters
  const getters = {
    modal:state=>{
     return state.modal
  }
  }


  // actions  api data
  const actions = {}
  
  // mutations
  const mutations = {

    openModalVuex(){
        state.modal.isModalVisible=true;
    },
    closeModalVuex(){
        state.modal.isModalVisible=false;
    }
 
  }

  
  export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
  }