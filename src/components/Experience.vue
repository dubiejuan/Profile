<template>
    <div class="exp-component">
    <div class="exp-section">
      <p class="section-title">EDUCATION</p>
      <ul class="section-education">
        <li v-for="item in education" v-bind:key="item.id">
          <div>
          <p class="titles btn-2" style="color:black;"> {{item.name}} </p>
          <span  class="stacks btn-2" style="color:black;" v-for="type in item.types" v-bind:key="type.id">{{type.name}}</span>
        </div>
        </li>
      </ul>
    </div>
    <div class="exp-section">
      <p class="section-title">CAREER</p>
     <ul class="section-career">
        <li v-for="data in career">
          <div>
          <p class="titles btn-2" style="color:black;"> {{data.name}} </p>
          <span class="activity btn-2 "  v-for="activity in data.activity" v-bind:key="activity.id">{{activity.name}}</span>
          <p class="stack-title ">Stacks:</p>
          <span  class="stacks btn-2 "  style="color:black;" v-for="stacks in data.stacks" >{{stacks.type}}:&nbsp;{{stacks.name}}</span>
        </div>
        </li>
      </ul>
    </div>
  </div>

  
</template>
<script>
  export default {
    name: 'Experience',
    data:()=>{
      return {

        education:[
           {
           id:1,
            name:'Online course @udemy',
            types:[
              {
              id:1,
              name:'Machine learning tensorlow'},
              {
              id:2,
              name:'Serveless'
              }
            ]
          },
          {
            id:2,
            name:'TRAINING COURSE @ Educación IT ',
            types:[
              {
              id:1,
              name:'JavaScript'
              },
              {
              id:2,
              name:'PHP'
              },
               {
              id:3,
              name:' Node JS'
              },
              {
              id:4,
              name:'Mongo DB'
              }
            ]
          },
           {
           id:3,
            name:'LIC. EN GESTIÓN DE TECNOLOGÍA DE LA INFORMACIÓN @ UADE',
            types:[
              {
              id:1,
              name:'2015 - Now'},
            ]
          },
          {
           id:4,
            name:'Bachelor Degree @ All Saints’ School',
            types:[
              {
              id:1,
              name:'International Bachelor (IB)'},
            ]
          }
        ],

        career:[
           {
           id:1,
            name:'FULLSTACK WEB DEVELOPER @ Grava Digital & Appterix',
             stacks:[
                {id:1,
                name:"AngularJS, HTML5, Materialize, CSS",
                type:'Front-End'
                },
                {id:2,
                name:"NodeJS,ExpressJS,MySQL,MongoDB",
                type:'Back-End'
                },
                {
                  id:3,
                  name:'GitLab',
                  type:'Source',
                },
                {
                  id:4,
                  name:'GitLab Agile',
                  type:'Agile',
                },
                 {
                  id:5,
                  name:'Digital Ocean',
                  type:'Cloud',
                },
                {
                  id:6,
                  name:'Linux',
                  type:'OS',
                }
             ],
            activity:[
              {
              id:1,
              name:'APIS & WEB pages development and maintenance'
                },
                {
                  id:2,
                  name:'Database architecture'
                },
                {
                  id:3,
                  name:'Server maintenance'
                }
            ]
               
            
          },
          {
           id:2,
            name:'FULLSTACK WEB DEVELOPER @ BP4',
             stacks:[
                {id:1,
                name:"AngularJS, HTML5, Material, CSS",
                type:'Front-End'
                },
                {id:2,
                name:"NodeJS,SQL-SERVER,ExpressJS",
                type:'Back-End'
                },
                {
                  id:3,
                  name:'Atlassian Git',
                  type:'Source',
                },
                {
                  id:4,
                  name:'Jyra',
                  type:'Agile',
                },
                 {
                  id:5,
                  name:'Windows Server',
                  type:'Cloud',
                },
                {
                  id:6,
                  name:'Windows',
                  type:'OS',
                }

             ],
            activity:[
              {
              id:1,
              name:'BANCO DE TUCUMAN(CRM) development and maintenance'
                },
                {
                  id:2,
                  name:'(ISS) package development'
                },
                {
                  id:3,
                  name:'Store Procedure development'
                },
                {
                  id:4,
                  name:'Training Workshop'
                }
            ]
               
            
          },
          {
           id:2,
            name:'FULLSTACK WEB DEVELOPER @ Central de ofertas',
             stacks:[
                {id:1,
                name:"HTML5, VueJS, Bootstrap,BackboneJS, CSS",
                type:'Front-End'
                },
                {id:2,
                name:"NodeJS,ExpressJS,SailsJS,MySQL",
                type:'Back-End'
                },
              {
                  id:3,
                  name:'GitLab',
                  type:'Source',
                },
                {
                  id:4,
                  name:'GitLab Agile,ClickUp',
                  type:'Agile',
                },
                {
                  id:4,
                  name:'GitLab Agile,ClickUp',
                  type:'Agile',
                },
                 {
                  id:5,
                  name:'AWS',
                  type:'Cloud',
                },
                {
                  id:6,
                  name:'Linux',
                  type:'OS',
                }
             ],
            activity:[
              {
              id:1,
              name:'APIS & CRM development and maintenance'
                },
                {
                 id:2,
                 name:"APIS's integration"
                },
                {
                  id:3,
                  name:'Scripts  review , maintenance and development'
                },
                {
                  id:4,
                  name:'Code base & Arquitecture development and documentation'
                },
                {
                  id:5,
                  name:'Users solutions development and implementation '
                }
            ]
               
            
          }
        ]

      }
    }
  }
</script>
