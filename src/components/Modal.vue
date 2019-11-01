<template>
<transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header  class="modal-header">
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

        <section class="modal-body">  
    
    <button  class="button-send-type"   v-on:click="sendData(1)" >Rest</button> 
    <div class="divider"></div>
    <button  class="button-send-type"   v-on:click="sendData(2)" >Graph</button> 
        </section>
        <footer>
            
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState, mapActions,mapMutations,mapGetters } from 'vuex'
export default {
  name: 'Modal',
  props: {
  },
   data:()=>{
       return {
           sendtype:null
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
    let response =  await this.sendEmailGraphql(this.mail)
    this.closeModalVuex()
    }else{
     let response =  await this.sendEmailRest(this.mail) 
     this.closeModalVuex()
    }
    console.log('response!',response)
  }catch(error){
    console.log('error',error)
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
