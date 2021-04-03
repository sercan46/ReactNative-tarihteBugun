import React from 'react';
import { View, Text, Image,StyleSheet } from "react-native";
import { STEPTHIRD } from '../../assets/index';

const ThirdStepper = (props) => {
    return (
        <View>
            <Image source={ STEPTHIRD } style={styles.image}  />
            <Text style={styles.textHeaderCustom}>Son!</Text>
            <Text style={styles.textDescCustom}>Hadi uygulamaya kullanmaya başlayalım.</Text>
        </View>
    );
};
const styles=StyleSheet.create({
    image: {
        marginTop:'15%',
        width:'100%',
        height:220,   
        resizeMode: 'stretch'
      },
      textHeaderCustom:{
            marginTop:'5%',
            fontWeight:'bold',
            textAlign:'center',
            fontSize:22,
            color:'#6C63FF',
            fontFamily:'Arial'
      },
      textDescCustom:{
          color:'tomato',
          fontSize:20,
          marginTop:25,
          textAlign:'center'
      }
})
export default ThirdStepper;


