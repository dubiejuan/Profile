 
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
          
          console.log(response)

          state.mail={
            name:'',
            email:'',
            message:'',
            sent:true
            }

          return response
          }
          catch(error){
          console.log(error)
          
          return JSON.stringify(error)
          
          }
    
                
              },


  async sendEmailGraphql (data) {

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



console.log(response)


state.mail={
  name:'',
  email:'',
  message:'',
  sent:true
  }

return response
}
catch(error){
console.log(error)
return error

}

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




 

 
