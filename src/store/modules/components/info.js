 
 const axios = require('axios');
 
 const state = {
    mail:{
        name:'',
        email:'',
        mesaage:''
        }
  }
  
  // getters
  const getters = {
    mail:state=>{
     return state.mail
  }
  }

  
  // actions  api data
  const actions = {
        sendEmail (data) {
        axios.post('http://localhost:3001/mail/send-email', {  
            data:data.state.mail
          })
          .then(function (response) {
             state.mail={
                name:'',
                email:'',
                mesaage:''
                }


          })

          .catch(function (error) {

            

          })
    }
       
    
  }
  
  // mutations
  const mutations = {
 
  }

  
  export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
  }