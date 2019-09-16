<template>
<div id="profile">
<div class="profile-title">
  <h2>I'm a full-stack developer</h2>
</div>
<div class="profile-div">
<div>
<article >
  <h3>About me</h3>
  
  <p>  I am a Full-stack developer with Backend and Frontend experience building websites ,web applications , API integration and API Rest.</p>

  <p> I specialize in JavaScript(SSR) and have professional experience working with Nodejs ,Vue, MySQL, mongoDB, Linux,Git and AWS. </p>
  <p>  I am looking forward to learn and work with Tensorflow ML and Backend technologieslike Nodejs , express , graphql ,docker and serverless</p>
  
</article>
</div>
<div >
<img alt="Juan Dubie Photo" width="350" height="400" src=" /images/profile.jpg">
</div>
</div>
<div>
  <ul>
      <li>
          Comida Favorita:      
      </li>
      <li>
          Lugar Favorito:      
      </li>
      <li>
          Lenguage Favorito:      
      </li>
</ul>
</div>
</div>

</template>

<script>
export default {
  name: 'Profile',
  props: {
    msg: String
  }
}
</script>

