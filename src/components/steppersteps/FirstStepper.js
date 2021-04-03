import React from 'react';
import { View, Text, Image,StyleSheet } from "react-native";
import { STEPFIRST } from '../../assets/index';

const FirstStepper = (props) => {
    return (
        <View>
            <Image source={ STEPFIRST } style={styles.image}  />
            <Text style={styles.textHeaderCustom}>Hoşgeldiniz</Text>
            <Text style={styles.textDescCustom}>Uygulamamızda tarihde bugün gerçekleşen tanınmış kişilerin doğum,ölüm ve ses getiren olaylar tarihsel olarak sıralı bir şekilde gösterilmektedir.</Text>
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
          fontSize:17,
          marginTop:15
      }
})
export default FirstStepper;


