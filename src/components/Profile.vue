<script setup lang="ts">
import Links from './Links.vue'
</script>

<template>
  <div class="profile-header">
    <img src="/PP.jpg" alt="Profile picture" />
    <div class="profile-info">
      <div class="name-links-container">
        <h1>Hey, I'm Lespilette Colin 👋</h1>
        <div class="links-wrapper">
          <Links />
        </div>
      </div>
      <h2>A <span class="highlight">Junior Data Engineer</span> </h2>
    </div>
  </div>
  
  <div class="profile-content">
    <div class="location-badge">
      <img src="/pin.svg"/>
      <p>Toulouse, France</p>
    </div>
      <p class="bio-text">I'm 19 years old and currently in my second year of a Bachelor of Technology in Computer Science.</p>
  </div>
  
</template>

<style scoped>
.profile-header{
  display: flex;
  align-items: center;
  margin : 0;
}
.profile-header img {
  width: 128px;
  height: 128px;
  border-radius: 90%;
  object-fit: cover;
  will-change: filter;
  transition: filter 300ms;
  margin-right: 1em;
}
.profile-header img:hover {
  filter: drop-shadow(0 0 1em #686868aa);
}
.profile-info {
  width: 100%;
}
.profile-content{
  margin-left: 9em;
  max-width: 25em;
}
.location-badge{
  border: solid 1px;
  border-radius: 8px;
  border-color:rgba(255, 255, 255, 0.5);
  padding: 2px;
  display: flex;
  align-items: center;
  width:fit-content;
}
.location-badge img{
  width: 16px;
  height: 16px;
}
.location-badge p{
  margin: 0;
}
.highlight{
  color: rgba(99, 98, 98, 0.87);
}
.name-links-container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.links-wrapper {
  margin-left:auto;
}
.bio-text {
  margin-top: 1em;
}
h1, h2, h3, div {
  margin: 0;
}
</style>