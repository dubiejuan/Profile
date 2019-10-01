 
 const axios = require('axios');
 
 const state = {
    mail:{
        name:'',
        email:'',
        message:''
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
          return new Promise((resolve, reject) => {
            axios.post('http://localhost:3001/mail/send-email', {  
            data:data.state.mail
          }).then(response => {
                console.log(response)
                state.mail={
                  name:'',
                  email:'',
                  message:''
                  }
                resolve(response)
            })
            .catch( (error) => {
              reject(JSON.stringify(error))
            })
            
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