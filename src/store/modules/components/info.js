 
 const axios = require('axios');
 
 const state = {
    mail:{
        name:'',
        email:'',
        message:'',
        sent:false,
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

        async sendEmailRest (data) {

          try{
          
          let response =await axios.post('/api/mail/send-email', { data:data.state.mail})
          
    

        

          return response
          }
          catch(error){
      
          
          return JSON.stringify(error)
          
          }
    
                
              },


  async sendEmailGraphql () {

  let queryData=`mutation {
      createEmail(emailInput:{name:"${state.mail.name}",email:"${state.mail.email}",message:"${state.mail.message}"}){
        _id
      }
    }`

try{

let response =await axios
.post('/api/graphql', {
  query: queryData,
})



return response
}
catch(error){

return error

}

    }

  
  }
  
  // mutations
  const mutations = {
  
   resetEmail (state){
     
      state.mail={
        name:'',
        email:'',
        message:'',
        sent:true
        }

       
    }
 
  }

  
  export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
  }




 

 
