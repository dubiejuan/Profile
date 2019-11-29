<template>
<transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header  v-show="!emailsent"  class="modal-header">
          <div> 
          Send Via:
          </div>
          <div class="modal-close"> 
           
          <button  class="button-close"   v-on:click="close()" >
             <v-icon name="times" scale="1">
                </v-icon>
                </button>   
          </div>
        </header>
        <section v-show="!emailsent" class="modal-body">  
    <button  class="button-send-type"   v-on:click="sendData(1)" >Rest</button> 
    <div class="divider"></div>
    <button  class="button-send-type"   v-on:click="sendData(2)" >Graph</button>  
        </section>
        <section v-show="emailsent" class="modal-body-sent">
          Email Sent Successfully ! 
        </section>
        
        <footer>
            
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>

import {   mapActions,mapMutations,mapGetters } from 'vuex'
export default {
  name: 'Modal',
   data:()=>{
       return {
           sendtype:null,
           emailsent:false
       }

   },    
 methods:{
    ...mapActions([
      'sendEmailGraphql',
      'sendEmailRest'
    ]),
      ...mapMutations([
      'closeModalVuex',
    ]),
close() {
    this.closeModalVuex()
    },

async sendData(type){
  this.sendtype= type === 1 ? 1 : 2
  try{
    if(this.sendtype===2){
   await this.sendEmailGraphql(this.mail) 
     this.emailsent=true  
    setTimeout(() => {
        this.emailsent=false
       this.closeModalVuex() 
       }, 2000);
    }else{
      await this.sendEmailRest(this.mail) 
      this.emailsent=true
      setTimeout(() => { 
        this.emailsent=false
        this.closeModalVuex()
         }, 2000);
    }
   
  }catch(error){
  
  
  }

},
  },
  computed :{
    ...mapGetters({
     mail: 'mail',
     modal:'modal'
  }),
  }
}
</script>
