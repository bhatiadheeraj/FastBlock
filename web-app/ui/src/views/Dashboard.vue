<template>
    <div class="container">
        
        <div class="row">
            <div class="col-sm"></div>
            <div class="col-sm">
                <br>
                <div v-if="this.state != 'DOWNLOAD'" style="text-align: center;"><img height="250" src="../assets/puzzle-dynamic-premium.png"></div>
                <div v-if="this.state == 'DOWNLOAD'" style="text-align: center;"><img height="250" src="../assets/folder-dynamic-premium.png"></div>
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

                <div v-if="this.state == 'DOWNLOAD'" style="text-align: center;">
                        <!-- {{fileContent}} -->
                        <button type="button" @click="downloadFile" class="btn btn-success btn-lg">Download Contract</button>
                        <br>
                        <br>
                        <hr>
                        <!-- <button type="button" class="btn btn-primary btn-lg">Connect to Contract</button>
                        <p>Connects to Contract deployed on Ropstein</p> -->
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
                <div>
                    <ul>
                        <li v-if="nextbtn"><button type="button" @click="changeState" class="btn btn-secondary btn-lg">NEXT</button></li>
                        <li v-if="addbutton">&nbsp;<button type="button" @click="addField" class="btn btn-success btn-lg"> ADD FIELD</button></li>
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
import axios from "axios"

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
        nextbtn:true,
        fileContent: "",
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
         if(this.state == 'OBJECT_ADDER') {
             axios.post('http://localhost:8000/contractadd', {"data" : this.dataobject, "name": this.ContractName},{headers: {
            'Content-Type': 'application/json'
            }})
                .then((res)=> {
                    console.log(res.data);
                    this.state = "DOWNLOAD";
                    this.addbutton = false;
                    this.nextbtn = false;
                    this.setDownload(res.data);
                }).catch((error)=> console.log(error));
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
     setDownload(data) {
         this.fileContent = data;
         console.log(data);
     },
     downloadFile() {
            var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.fileContent));
    element.setAttribute('download', this.ContractName+'.sol');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
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