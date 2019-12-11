<template>
 <!-- <a v-bind:class="[component.info===true?'active':'']" v-on:click="changeComponents('info')">Contact</a> -->
<div class="wrapper">
  <header class="page-header">
   <nav>
     <div class="logo-container">
          <img src="../public/images/logo.png" >
     </div>
    <ul >
      <li>
        
        <router-link    v-on:click="changeComponents('profile')"  :to="{ name: 'profile' }">Profile</router-link>
      </li>
      <li>    
        
           <router-link  v-on:click="changeComponents('experience')" :to="{ name: 'experience' }">Experience</router-link>
      </li>
      <li>         
       
           <router-link v-on:click="changeComponents('proyects')" :to="{ name: 'proyects' }">Proyects</router-link>
      </li>
       <li> 
        
           <router-link  v-on:click="changeComponents('skills')" :to="{ name: 'skills' }">Skills</router-link>
      </li>
      <li> 
          <router-link    v-on:click="changeComponents('info')" :to="{ name: 'info' }">Contact</router-link>
      
      </li>
    </ul>
  </nav>
  </header>

  <main   class="page-main">
        <vue-particles
        color="#ffa500"
        :particleOpacity="1"
        :particlesNumber="50"
        shapeType="circle"
        :particleSize="4"
        linesColor="#000000"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="3"
      >
   </vue-particles> 
   <div class="all-components">
  <router-view ></router-view>
    </div> 
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

export default {
  name: 'app',
  components: {
    Profile,
    Experience,
    Proyects,
    Skills,
    Info,
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

