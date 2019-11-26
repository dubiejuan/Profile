<template>
  <div id="skills">
    <div class="skills-component">
        <p >  Get to know me  . . . </p>
      <ul class="each-skill">
        <li class="skills-container" v-for="skill in skills" v-bind:key="skill.id">
          <img :src="skill.img" class="image-lang" width="64px" height="64px">
          <div class="bar-container" >
            <div  class="skill-name" >
              <p > {{skill.lang}}</p>       
            </div>
            <div class="loading-bar">
            <div class="percentage" :style="{'width' : skill.percent + '%'}"> 
              <p  class="skill-porcent"> {{skill.percent}}%&nbsp;</p>
            </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Skills',
    data: () => {
      return {
        skills: [
            {
            id:1,
            lang: "Nodejs",
            percent: 0,
            percentMax: 90,
        
            img: '/images/node.png'
          },
          {
            id:2,
            lang: "Html",
            percent: 0,
            percentMax: 40,
        
            img: '/images/html.png'
          },
          {
            id:3,
            lang: "Javascript",
            percent: 0,
            percentMax: 90,
          
            img: '/images/javascript.png'
          },
          { 
            id:4,
            lang: "Mysql",
            percent: 0,
            percentMax: 90,
        
            img: '/images/mysql.png'
          },
           {
            id:5,
            lang: "MacOS",
            percent: 0,
            percentMax: 70,
     
            img: '/images/macos.png'
          },
          {
            id:6,
            lang: "CSS",
            percent: 0,
            percentMax: 80,
         
            img: '/images/css.png'
          },
          {
            id:7,
            lang: "VueJs",
            percent: 0,
            percentMax: 90,
      
            img: '/images/vuejs.png'
          },
          {
            id:8,
            lang: "MongoDB",
            percent: 0,
            percentMax: 60,
          
            img: '/images/mongo.png'
          },
          {
            id:9,
            lang: "AWS",
            percent: 0,
            percentMax: 40,
            img: '/images/aws.png'
          },
          {
            id:10,
            lang: "Jyra",
            percent: 0, 
            percentMax: 30,
           
            img: '/images/jyra.png'
          },
           {
            id:11,
            lang: "GraphQL",
            percent: 0,
            percentMax: 30,
           
            img: '/images/grapqhl.png'
          },
           {
            id:12,
            lang: "GIT",
            percent: 0,
            percentMax: 100,
            
            img: '/images/git.png'
          } 
        ]
      }

    },
    created() {
      for (let i = 0; i <= this.skills.length - 1; i++) {
        var intval = setInterval(() => {
          if (this.skills[i].percent < this.skills[i].percentMax) {
            this.skills[i].percent += 1;
          } else {
            clearInterval(intval);
          }
        }, 10);

      }

    }
  }
</script>