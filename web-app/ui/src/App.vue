<template>
<div>
  
    <!-- <Nav></Nav>
    <LandingPage/> -->
        <router-view></router-view>
</div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
</template>

<script>
// import Nav from './components/Nav.vue'
// import LandingPage from './components/Landing.vue'

export default {
  name: 'App',
  // components: {
  //   Nav,LandingPage
  // }
}
</script>

<style>
h1,h2, p {
    font-family: 'Red Hat Mono', monospace;

}
#app {
  font-family: 'Red Hat Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
color: #222222;  
margin-top: 0px;
}
</style>
