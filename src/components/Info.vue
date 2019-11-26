<template>
<div id="contact">
<div class="title-contact">
<p class="titles-me">Contact Me</p>  
</div>
<div  class="email" > 
  <div>
    <input  v-model="mail.name" type="text"  placeholder="Name" > 
  </div>
  <div>
    <input  v-model="mail.email" type="email" placeholder="Email*" > 
     <p v-show="error.email" class="errors"> Please enter a valid email address.</p>
  </div>
  <div>
   <textarea v-model="mail.message" rows="10"  placeholder="Message*"></textarea>  
    <p  v-show="error.message" class="errors"> Please fill in this required field.</p>
   </div>
   <div>
   <button class="button-send" v-on:click="formData()"  >Send</button> 
  </div>
<modalView v-show="modal.isModalVisible"/>
</div>
<div class="social">
<p class="titles">Social</p>  
</div>
<ul class="icons">
      <li>
      <a style="color: black;" href="https://www.linkedin.com/in/juan-dubie-060708132" target="_blank">
     <v-icon name="brands/linkedin" scale="2"></v-icon>
      </a>
      </li>
      <li>
        <a style="color: black;" href="https://www.instagram.com/juan_dubie/" target="_blank">
           <v-icon name="brands/instagram" scale="2"></v-icon>  
           </a>
      </li>
      <li>
        <a  style="color: black;" href="https://twitter.com/juan_dubie" target="_blank">
           <v-icon name="brands/twitter-square" scale="2"></v-icon>
           </a>
      </li>
      <li>
        <a  style="color: black;" href="https://github.com/dubiejuan" target="_blank">
           <v-icon name="brands/github" scale="2"></v-icon>    
           </a>    
      </li>
</ul>
</div>
</template>

<script>

import { mapState, mapActions,mapMutations,mapGetters } from 'vuex'
import modalView from './Modal'

export default {
  name: 'Info',
  components: {
    modalView
  },
  data:()=>{
      return {
      error:{
        message:false,
        email:false
      },
      validated:false,
      }
  },
  methods:{
      ...mapMutations([
      'openModalVuex',
    ]),

     checkData(){
    if(this.mail.email.length<=1){
      this.error.email=true
      return false
    } else if (!this.validEmail(this.mail.email)) {
      this.error.email=true
      return false
      }else{
      this.error.email=false 
    }
    if(this.mail.message.length>=1){
      this.error.message=false
    }else{
      this.error.message=true
      return false
    }
    return true
    },
  async formData(){
    if(this.checkData() === true){
      this.openModalVuex()
    }  
  },
   validEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
      return re.test(email)
    }

  },
  computed:{
 ...mapGetters({
     mail: 'mail',
     modal:'modal'
  })

  }
}
</script>

