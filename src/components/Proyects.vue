<template>
<div class="proyects">
<ul>
<transition-group  v-if="window.flag"  name="bounce">
 <li  v-for="item in filtered_proyects" v-bind:key="item.id">
  
   <div class="proyects-name">
      <h3>
       {{item.name}}
      </h3>
    </div>
  <div class="proyects-image" > 
    <img v-if="window.flag" width="350px" height="200px"  :src="item.img"> 
    <img v-else width="415px" height="250px"  :src="item.img">   
   <div class="middle">
    <div class="proyect-info">
     <div>
      <h4>
       About
      </h4>
       <p style="margin-top:10px">{{item.about}} </p>
    </div>
    <div>
      <h4>
        Stacks
      </h4>
      <div class="stacks"> 
      <p  v-for="stacks in item.stacks" v-bind:key="stacks.id">
        <span>{{stacks.name}}</span>       
      </p>
      </div>
      </div>
    </div>
  </div> 
  </div> 
  
</li>
 </transition-group>
 <div style=" display: contents; " v-if="!window.flag">
  <li  v-for="item in filtered_proyects" v-bind:key="item.id">
  
   <div class="proyects-name">
      <h3>
       {{item.name}}
      </h3>
    </div>
  <div class="proyects-image" > 
    <img v-if="window.flag" width="350px" height="200px"  :src="item.img"> 
    <img v-else width="415px" height="250px"  :src="item.img">   
   <div class="middle">
    <div class="proyect-info">
     <div>
      <h4>
       About
      </h4>
       <p style="margin-top:10px">{{item.about}} </p>
    </div>
    <div>
      <h4>
        Stacks
      </h4>
      <div class="stacks"> 
      <p  v-for="stacks in item.stacks" v-bind:key="stacks.id">
        <span>{{stacks.name}}</span>       
      </p>
      </div>
      </div>
    </div>
  </div> 
  </div> 
  
</li>
</div>
</ul>
<div class="seeMore"  v-if="window.flag">
  <p style="font-size: small;">See more</p>
  <button v-on:click="next">
    <v-icon name="arrow-down" scale="1 "></v-icon>
  </button>
</div>
</div>
</template>

<script>
export default {
  name: 'Proyects',
data:() =>{
return {
  window:{
    width:0,
    flag:false
  },
  filter:{
    start:0,
    limit:2

  },
proyects: [
            {
            id:1,
            name: "Donde lo veo",
            about:"DONDELOVEO is a project which includes a platform that seeks to combat content piracy. It is an effort of the media, television and entertainment industry so that users can know the many LEGAL alternatives - and often free - to find their favorite content.",
            stacks: [{id:1,name:"Nodejs"},{id:2,name:"AngularJS"},{id:3,name:"MongoDB"},{id:4,name:"Mysql"},{id:5,name:"Materialize"}],
            img: '/images/dondeloveo.png'
          },
          {
            id:2,
             name: "Deportes Corrientes",
             about:"DEPORTES CORRIENTES is an app that shows everything related with sports that take place in this province.",
            stacks: [{id:1,name:"Nodejs"},{id:2,name:"AngularJS"},{id:3,name:"MongoDB"},{id:4,name:"Mysql"},{id:5,name:"Materialize"}],
            img: '/images/deportes.jpeg'
          },
          {
            id:3,
             name: "Banco Macro Tucuman",
             about:"BANCO MACRO TUCUMAN is an CRM that helps employees of banco macro to automate processes and make them easier and more dynamic.",
              stacks: [{id:1,name:"Nodejs"},{id:2,name:"AngularJS"},{id:4,name:"Mysql-Server"},{id:5,name:"Material"}],
               img: '/images/macro.png'
          },
          { 
            id:4,
             name: "Cultura Corrientes",
             about:"CULTURA CORRIENTES is an app that shows events that take place in Corrientes through an agenda.",
              stacks: [{id:1,name:"Nodejs"},{id:2,name:"AngularJS"},{id:4,name:"MongoDB"},{id:5,name:"Materlize"}],
              img: '/images/agenda.jpeg'
          },
           {
            id:5,
             name: "Central de ofertas",
             about:"Central de Oferta is an ideal mobile tool for you to do your shopping and compare prices. Created specifically for newsagents / warehousemen with the objective of focusing and speeding up the ordering process.",
              stacks: [{id:1,name:"Nodejs"},{id:2,name:"BackboneJs"},{id:4,name:"Mysql"},{id:5,name:"Bootstrap"}],
              img: '/images/cdo.png'
         
          },
          {
            id:6,
           name: "Turismo Corrientes",
             about:"TURISMO CORRIENTES is an app to find the best places to enjoy and discover Corrientes. Hospitality, Catering and Tourism at your fingertips.",
             stacks: [{id:1,name:"Nodejs"},{id:2,name:"AngularJS"},{id:4,name:"MongoDB"},{id:5,name:"Materlize"}],
              img: '/images/turismo.jpeg'
          }
          ]
}
  },
created() {
  window.addEventListener("resize", this.myEventHandler)
  this.handleResize();
},

destroyed() {
  window.removeEventListener("resize", this.myEventHandler)
  this.handleResize();
},
methods:{
      next() {
            this.filter.limit = this.filter.limit + 2
            this.filter.start = this.filter.start + 2
            if(this.filter.limit===8){
            this.filter.limit = 2
            this.filter.start = 0
            } 
        },

   handleResize() {
      this.window.width = window.innerWidth;
       this.window.flag = this.window.width <= 700 ? true:false
      
    }

  },
  computed: {
       filtered_proyects(){
            if(this.window.width <= 700 ){
            return this.proyects.slice(this.filter.start ,this.filter.limit )
            }else{
             return this.proyects
            }
        }
    }
}






</script>


