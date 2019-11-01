 
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
          
          let response =await axios.post('http://localhost:3001/mail/send-email', { data:data.state.mail})
          
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

try{

let response =await axios
.post('http://localhost:5000/graphql', {
  query: `mutation {
      createEmail(emailInput:{name:"juancho",email:"dubiejuan@gmail.com",message:"asfsf"}){
        _id
      }
    }
  `,
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