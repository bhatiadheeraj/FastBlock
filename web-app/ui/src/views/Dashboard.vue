<template>
    <div class="container">
        
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <br>
                <div style="text-align: center;"><img height="250" src="../assets/puzzle-dynamic-premium.png"></div>
                
                <div v-if="this.state =='NAME_SETUP'">
                    <div class="alert alert-success" role="alert">
                        <h4 class="alert-heading">Welcome!</h4>
                        <p>Let's begin your Project and give it a name</p>
                    </div>
                    <div class="input-group input-group-lg">
                        <input type="text" class="form-control" v-model="ContractName" aria-label="Large" aria-describedby="inputGroup-sizing-sm">
                    </div>
                </div>
                <div v-else></div>

                <div v-if="this.state =='OBJECT_ADDER'">
                        <h3 class="alert-heading">Let's Design the Contract with Data OBjects!</h3>
                        <p>We have set up Document Object Identifier (DOI) Sample Contract's DataObjects for you</p>
                        <p>Modify as you like</p>
                        <!-- {{dataobject}} -->
                        <div v-for="(input, index) in dataobject" :key="index">
                            <div class="input-group">
                                <input type="text" v-model="input.name" aria-label="Text input with dropdown button">
                                <select v-model="input.type">
                                    <option disabled value="">Please select one</option>
                                    <option>PDF</option>
                                    <option>VIDEO</option>
                                    <option>STRING</option>
                                    <option>Audio</option>
                                    <option>PubLicKey</option>
                                </select>
                            </div>
                            <br>
                        </div>
                        <!-- <div class="input-group">
                            <input type="text" v-model="dataobject.input1.name" class="form-control" aria-label="Text input with dropdown button">
                            <select v-model="dataobject.input1.type">
                            <option disabled value="">Please select one</option>
                            <option>PDF</option>
                            <option>VIDEO</option>
                            <option>STRING</option>
                            </select>
                           
                        </div> -->
                </div>

                <p class="text-danger">{{errorMessage}}</p>
                <br>
                <div style="text-align:center">
                    <ul>
                        <li><button type="button" @click="changeState" class="btn btn-secondary btn-lg">NEXT</button></li>
                        <li v-if="addbutton">&nbsp;<button type="button" @click="addField" class="btn btn-success btn-lg"> ADD</button></li>
                    </ul>
                </div>
                <br>
            </div>
            <div class="col-sm"></div>
        </div>      
    </div>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'
// import Nav from '../components/Nav.vue'
// import firebase from "firebase"
import Vue from "vue"


export default {
 name:'Dashboard',
 components: {
    // Nav
  },
 data() {
    return {     
        ContractName : "",
        errorMessage: "",
        state: "NAME_SETUP",
        dataobject :{},
        addbutton: false,
    }
 },
 methods : {
     changeState() {
         if(this.state == "NAME_SETUP") {
             this.setDOIOBJ();
             this.state = "OBJECT_ADDER";
             this.addbutton = true;
             console.log(this.state);
             this.$nextTick();
         }
     },
     setDOIOBJ() {
         this.dataobject = {
             input1 : {
                 name : "Authors",
                 type : "STRING",
             },
             input2 : {
                 name : "DOCUMENT",
                 type : "PDF",
             },
             input3 : {
                 name : "Object Identifier",
                 type : "STRING",
             },
         }
         console.log(this.dataobject);
     },
     addField() {
        let count = Object.keys(this.dataobject).length + 1;
        console.log(count); 
        
        // this.dataobject["input"+count+".name"] = "SAMPLE NAME";
        // this.dataobject["input"+count+".type"] = "STRING";
        Vue.set(this.dataobject, 'input'+count,{
            "name" : "SAMPLE", 
            "type" : "STRING"},
        );
        console.log(this.dataobject); 
        this.$forceUpdate();
        // Vue.set(this.dataobject,this.dataobject)
     }
 },
 watch : {
    ContractName : function() {
        console.log("HEEERE");
        if(this.state == 'NAME_SETUP' && (/\s/).test(this.ContractName)) this.errorMessage ="Please no whitespaces please";
        else this.errorMessage = "";
    },
    state : function() {
        if(this.state == 'NAME_SETUP') {
            this.setDOIOBJ();
            this.$nextTick();
        }
    }



}
}
</script>

<style scoped>
ul, li {
    display:inline
}
</style>