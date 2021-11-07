<template>
    <div>
        <Nav></Nav>
        <br>
    <div style="background:#FFFFFF">
        <div class="container">
            <br>
            <br>
<div class="row featurette">
        <div class="col-md-5">
            <img style="width:500px" class="featurette-image img-fluid mx-auto" src="../assets/rocket-dynamic-premium.png" alt="Generic placeholder image">
        </div>
      <div class="col-md-7">
          <h2 class="featurette-heading margin-paragraph-left">Build SmartToken for your Data in Minutes</h2>
          <p>GIVE The Power of Block-Chain to any Data you have</p>
          <p>Make any file format Image to Video secure on Blockchain</p>
          <ul>
              <li><img height="50" src="../assets/camera-dynamic-premium.png"></li>
              <li><img height="50" src="../assets/key-dynamic-premium.png"></li>
              <li><img height="50" src="../assets/card-dynamic-premium.png"></li>
              <li><img height="50" src="../assets/video-dynamic-premium.png"></li>
              <li><img height="50" src="../assets/mic-dynamic-premium.png"></li>
             <li><img height="50" src="../assets/file-text-dynamic-premium.png"></li>
          </ul>
         <br/>
            <router-link to="/login">
            <button type="button" class="btn btn-primary btn-lg btn-block">Get Started</button>
            </router-link>
        </div>
      </div>
      <hr>
            <div class="row featurette">
        <div class="col-md-7">
          <br>
          <h2 class="featurette-heading margin-paragraph-left">Use Templates and Scale</h2>
          <p>Try the Data Object Identifier Ledger DEMO, or the Vehicle Identifier Ledger DEMO</p>
          <p>The opportunities are unlimited</p>
         <br/>
        </div>
        <div class="col-md-5">
            <img style="width:450px" class="featurette-image img-fluid mx-auto" src="../assets/minecraft-dynamic-premium.png" alt="Generic placeholder image">
        </div>
      </div>
      <hr>
      <br>

    </div>
    </div>
    </div>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'HelloWorld',
  components: {
      Nav,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
