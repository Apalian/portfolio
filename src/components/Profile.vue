<template>
  <div class="profile-header">
    <img src="/PP.jpg" alt="Profile picture" />
    <div class="profile-info">
      <div class="name-links-container">
        <h1>Hey, I'm Lespilette Colin 👋</h1>
        <div class="links-wrapper">
          <PropsSwitcher />
          <Links />
        </div>
      </div>
      <h2>A <span class="highlight">Data Engineering Student</span></h2>
    </div>
  </div>

  <div class="profile-content">
    <div class="location-badge">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="location-icon"
      >
        <path
          d="M12 13C14.7614 13 17 10.7614 17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8C7 10.7614 9.23858 13 12 13ZM12 13V21M11 7H11.01"
          class="location-path"
        ></path>
      </svg>
      <p>Toulouse, France</p>
    </div>
    <p class="bio-text">I'm 19 years old and currently in my second year of a Bachelor of Technology in Computer Science.</p>
  </div>
</template>

<script setup lang="ts">
import Links from './Links.vue'
import PropsSwitcher from './PropsSwitcher.vue';
</script>

<style scoped>
.profile-header {
  display: flex;
  align-items: center;
  margin: 0;
}

.profile-header img {
  width: 192px;
  height: 192px;
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

.profile-content {
  margin-left: 9em;
  max-width: 25em;
}

.location-badge {
  display: flex;
  align-items: center;
  width: fit-content;
}

.location-badge p {
  margin: 0;
}

.location-icon {
  width: 16px;
  height: 16px;
  stroke: var(--secondary-color);
}

.location-path {
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.highlight {
  color: rgba(99, 98, 98, 0.87);
}

.name-links-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.links-wrapper {
  margin-left: auto;
  display: flex;
  gap: 16px;
}

.bio-text {
  margin-top: 1em;
}

h1,
h2,
h3,
div {
  margin: 0;
}

p {
  font-size: 1.1em;
}
</style>
