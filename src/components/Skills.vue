<template>
  <div id="skills">
    <div style="margin-top: 200px;">
      <ul class="each-skill">
        <li class="skills-container" v-for="skill in skills" v-bind:key="skill.lang">
          <img :src="skill.img" class="image-lang" width="64px" height="64px">
          <div class="loading-bar">
             
            <div class="percentage" :style="{'width' : skill.percent + '%'}"> 
              <p  class="skill-name"> {{skill.lang}}</p>
              <p  class="skill-porcent"> {{skill.percent}}%&nbsp;</p>
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
        skills: [{
            lang: "Nodejs",
            percent: 0,
            percentMax: 90,
            color: "#ec407a",
            img: '/images/node.png'
          },
          {
            lang: "Html",
            percent: 0,
            percentMax: 40,
            color: "#f4511e",
            img: '/images/html.png'
          },
          {
            lang: "Javascript",
            percent: 0,
            percentMax: 90,
            color: "#512da8",
            img: '/images/javascript.png'
          },
          {
            lang: "Mysql",
            percent: 0,
            percentMax: 90,
            color: "#388e3c",
            img: '/images/mysql.png'
          },
           {
            lang: "MacOS",
            percent: 0,
            percentMax: 70,
            color: "#388e3c",
            img: '/images/macos.png'
          },
          {
            lang: "MySQL",
            percent: 0,
            percentMax: 80,
            color: "#f57c00",
            img: '/images/css.png'
          },
          {
            lang: "VueJs",
            percent: 0,
            percentMax: 90,
            color: "#0288d1",
            img: '/images/vuejs.png'
          },
          {
            lang: "MongoDB",
            percent: 0,
            percentMax: 60,
            color: "#388e3c",
            img: '/images/mongo.png'
          },
          {
            lang: "AWS",
            percent: 0,
            percentMax: 40,
            color: "#388e3c",
            img: '/images/aws.png'
          },
          {
            lang: "GraphQL",
            percent: 0,
            percentMax: 30,
            color: "#388e3c",
            img: '/images/grapqhl.png'
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