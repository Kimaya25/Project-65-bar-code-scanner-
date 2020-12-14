import * as React from "react";
import {Button, Text, View, Image, TouchableOpacity} from "react-native";
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions : null,
            scanned : false,
            scannedData : '',
            buttonState : 'normal'
        }
    }

      render(){
          return(
              <View>
                  <Image source = {require("../assets/barcode_scanner.jpg")}
                style = {styles.image}/>
              
             <TouchableOpacity>
                 onPress = {this.getCameraPermissions}
                 style = {styles.scanButton}
                 title = "Bar Code Scanner" 
                 <Text style = {style.buttonText}>Scan QR code</Text>


              </TouchableOpacity>
              </View>
          )
      }


    getCameraPermissions = async()=>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions : status === "granted",
            buttonState : 'clicked',
            scanned : false
        })
  
      }

      handleBarCodeScanned = async ({type, data}) =>{
        this.setState({
            scanned : true,
            scannedData : data,
            buttonState : 'normal'
        })

       
        if(buttonState === 'clicked'){
            this.state({
                scanned : true,
                buttonState : 'normal'
            })
        }

       
            }
        }
    

