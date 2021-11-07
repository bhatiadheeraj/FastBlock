const express = require('express');
const bodyParser = require("body-parser");
var cors = require('cors');
path = require('path');

const app = express();

const port = 8000;
var fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()) // Use this after the variable declaration

app.get('/', (req, res) => {
    res.send("Hello world, from express");
});

app.post('/contractadd', (req, res) => {
    console.log("we got something"+req);
    console.log('Got body:', req.body);
    const contractObjects = req.body.data;
    console.log('Got data', Object.keys(contractObjects));
    let Name = req.body.name;
    const Filename = Name+".sol";
    let stream = fs.createWriteStream("fileGen/"+Filename);
    stream.once('open', function(fd) {
        stream.write("pragma solidity ^0.6.0;\n");
        stream.write("pragma experimental ABIEncoderV2;\n");
        stream.write("contract "+Name+"{\n");

        stream.write("\t struct Tracker{\n");
        console.log(contractObjects.data);
        let String = [];
        let dictObj = [];
        Object.keys(contractObjects).forEach(object => {
            if((contractObjects[object].type == "STRING")) {
                stream.write("\t string "+contractObjects[object].name.replace(/ /g,"_")+";\n")
                String.push("string memory _"+contractObjects[object].name.replace(/ /g,"_")); 
                dictObj.push(contractObjects[object].name.replace(/ /g,"_"));
            }
            else {
                stream.write("\t uint "+contractObjects[object].name.replace(/ /g, "_")+";\n");
                String.push("uint _"+contractObjects[object].name.replace(/ /g,"_")); 
                dictObj.push(contractObjects[object].name.replace(/ /g,"_"));
            }

                // stream.write("\t uint public "+contractObjects[object].name.replace(/ /g, "_")+";\n");
                // stream.write("\t string public "+contractObjects[object].name.replace(/ /g,"_")+";\n")
            // else stream.write("\t uint public "+contractObjects[object].name.replace(/ /g, "_")+";\n");
        });
        stream.write("\t}\n");
        stream.write("\t Tracker[] public book; \n");
        console.log(String);
        let functionVal = String;
        stream.write("function AddData("+functionVal.join(",")+ ") public { \n");
        stream.write("\tTracker memory track;"+"\n");
        // underScoreVal.forEach(_value=>{
        //     dictObj.forEach(dicObject=>{
        //         stream.write("Tracker."+dicObject+"= _"+_value+";\n");
        //     });
        // });
        for (let i = 0; i < dictObj.length; i++) {
            // console.log(arr[i]);
                stream.write("\ttrack."+dictObj[i]+"= _"+dictObj[i]+";\n");
          }
        stream.write("\tbook.push(track); \n")
        stream.write("\t}\n");
        stream.write("function getAllData() public view returns(Tracker[] memory) { \n");
        stream.write("\treturn book;\n");
        stream.write("\t}\n");
        stream.write("}\n");
        stream.end();
      });
      
      res.setHeader('Content-type', "application/octet-stream");

      res.setHeader('Content-disposition', 'attachment; filename='+Filename);

      const data = fs.readFileSync(path.resolve('fileGen/'+Filename)).toString('utf8');

      res.send(data);

    //   res.send(p);
    // res.send("GOt it bro");
});



app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
