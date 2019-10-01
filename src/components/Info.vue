<template>

<div id="contact">
<div class="title-contact">
<p class="titles">Contact Me</p>  
</div>

<div class="email" > 
  <div>
    <input  v-model="mail.name" type="text" placeholder="Name" > 
  </div>
  <div>
    <input  v-model="mail.email" type="text" placeholder="Email*" > 
  </div>
  <div>
   <textarea v-model="mail.message" rows="10"  placeholder="Message*"></textarea>  
   </div>
   <div>
   <button  class="button-send" v-on:click="sendData(mail)" >Send</button> 
  </div>
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


export default {
  name: 'Info',
  props: {
    
  },
  data:()=>{
      return {

      }

      

  },
  methods:{

     ...mapActions([
      'sendEmail'
    ]),

  async sendData(mailParams){
    let response =  await this.sendEmail(mailParams)
  }

  },
  computed:{
 ...mapGetters({
     mail: 'mail'
  })

  }
}
</script>

