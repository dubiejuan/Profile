<template>
<div class="wrapper">
  <header class="page-header">
   <nav>
     <h2 class="logo">
      LOGO
    </h2>
    <ul >
      <li>
          <a  v-bind:class="[component.profile===true?'active':'']" v-on:click="changeComponents('profile')">
            Profile
          </a>
      
      </li>
      <li>    
        <a  v-bind:class="[component.experience===true?'active':'']" v-on:click="changeComponents('experience')">
               Experience
          </a>
      </li>
      <li>         
        <a v-bind:class="[component.proyects===true?'active':'']" v-on:click="changeComponents('proyects')">
               Proyects
          </a>
      </li>
       <li> 
          <a  v-bind:class="[component.skills===true?'active':'']" v-on:click="changeComponents('skills')">
            Skills
          </a>
      </li>
      <li>  
        <a v-bind:class="[component.info===true?'active':'']" v-on:click="changeComponents('info')">Contact</a>
      </li>
    </ul>
  </nav>
  </header>

  <main class="page-main">
    <vue-canvas-nest :config="config" ></vue-canvas-nest>
    <div  class="all-components" v-show="component.profile" >
    <Profile/>
    </div>
    <div class="all-components" v-show="component.experience" >
    <Experience/>
    </div>
    <div class="all-components" v-if="component.skills" >
    <Skills/>
    </div>
    <div class="all-components" v-show="component.proyects" >
    <Proyects/>
    </div>
    <div class="all-components" v-show="component.info">
    <Info/>
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
    config: {
         color: '0,0,0',
          count: 350,
          opacity: 1,
          zIndex: -1
      }
    }
    

    
  },
  methods:{

     ...mapMutations([
      'change'
    ]),

     changeComponents (data){
      this.change(data)
  }

  },
  computed:{

 ...mapGetters({
     component: 'components'
  })

  }

}
</script>

