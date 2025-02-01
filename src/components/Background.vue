<template>
    <div class="black-bg"></div>
    <div class="darkest-blue-bg"></div>
    <div class="dark-blue-bg"></div>
</template>

<style>

/* Infinite Deep Blue Background */
.dark-blue-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 2, 129, 0.5);
  background-size: 400% 400%;
  z-index: -1;
}
.darkest-blue-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(8, 0, 49, 0.3);
  background-size: 400% 400%;
  z-index: -2;
}
.black-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  background-size: 400% 400%;
  z-index: -3; /* Ensure it stays behind other content */
}

</style>