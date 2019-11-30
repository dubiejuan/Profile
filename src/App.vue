<template>
<div class="wrapper">
  <header class="page-header">
   <nav>
     <div class="logo-container">
          <img src="../public/images/logo.png" >
     </div>
    <ul >
      <li>  
           <router-link  v-bind:class="[component.profile===true?'active':'']" to="/profile" v-on:click="changeComponents('profile')" > Profile</router-link>  
      </li>
      <li> 
         <router-link  v-bind:class="[component.experience===true?'active':'']" to="/experience" v-on:click="changeComponents('experience')" > Experience</router-link>       

      </li>
      <li> 
         <router-link  v-bind:class="[component.proyects===true?'active':'']" to="/proyects" v-on:click="changeComponents('proyects')" >Proyects</router-link>            
      </li>
       <li> 
          <router-link  v-bind:class="[component.skills===true?'active':'']" to="/skills" v-on:click="changeComponents('skills')" > Skills</router-link>    

      </li>
      <li> 
         <router-link v-bind:class="[component.info===true?'active':'']"  to="/contact" v-on:click="changeComponents('info')" > Contact</router-link>     
      </li>
    </ul>
  </nav>
  </header>

  <main   class="page-main">
     <!-- <div class="pc-canvas" >
       <vue-canvas-nest  :config="{color: '0,0,0',count: 250,opacity: 1, zIndex: -1}" ></vue-canvas-nest>
     </div> -->
     
      <!-- <div class="mobile-canvas">
        mobile
        <vue-canvas-nest   :config="{color: '0,0,0',count: 250,opacity: 1, zIndex: -1}" ></vue-canvas-nest> 
      </div>  -->
     
      <Profile class="all-components" />
     <Experience class="all-components" />
     <Proyects class="all-components" />
     <Skills class="all-components" />
     <Info class="all-components"/>
  
     
  </main>
  <footer class="page-footer">
     <small>© Copyright 2019. All rights reserved.</small>
     <small>developed by Juan Dubie</small>
  </footer>
</div>
  
</template>

<script>
import Profile from './components/Profile.vue'
import Experience from './components/Experience.vue'
import Info from './components/Info.vue'
import Proyects from './components/Proyects.vue'
import Skills from './components/Skills.vue'
import { mapState, mapActions,mapMutations,mapGetters } from 'vuex'
import vueCanvasNest from 'vue-canvas-nest'



export default {
  name: 'app',
  components: {
    Profile,
    Experience,
    Proyects,
    Skills,
    Info,
    vueCanvasNest
  },

  data: () => {
    return {
      flag :false
    }
    
  },
  methods:{

     ...mapMutations([
      'change'
    ]),

     changeComponents (data){
      this.change(data)
  },


  },
  computed:{

 ...mapGetters({
     component: 'components'
  })

  }

}
</script>

