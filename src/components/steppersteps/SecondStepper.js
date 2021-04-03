import React from 'react';
import { View, Text, Image,StyleSheet } from "react-native";
import { STEPSECOND } from '../../assets/index';

const SecondStepper = (props) => {
    return (
        <View style={styles.container}>
            <Image source={ STEPSECOND } style={styles.image}  />
            <Text style={styles.textHeaderCustom}>Uygulama Nasıl Kullanılır?</Text>
            <Text style={styles.textDescCustom}>Uygulamamız liste sırasını yıl olarak filtrelemektedir. En küçük yıldan başlayarak
            liste ilerlemektedir.</Text>
            <Text  style={{paddingTop:5}}>Liste renkleri ile ilgili bilgi aşağıda gösterilmektedir.</Text>
            <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                    <View style={{backgroundColor:'black',width:'100%',height:30}}> 
                    <Text style={{textAlign:'center',color:'white',fontWeight:'bold',paddingTop:5}}>Ölüm</Text>
                    </View>
            </View>
            <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                    <View style={{backgroundColor:'#2668e2',width:'100%',height:30}}> 
                    <Text style={{textAlign:'center',color:'white',fontWeight:'bold',paddingTop:5}}>Doğum</Text>
                    </View>
            </View>
            <View style={{flex:1,flexDirection:'row',marginTop:10}}>
                    <View style={{backgroundColor:'#7f00ff',width:'100%',height:30}}> 
                    <Text style={{textAlign:'center',color:'white',fontWeight:'bold',paddingTop:5}}>Olay</Text>
                    </View>
            </View>
        </View>
    );
};
const styles=StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    },
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
          marginTop:10
      }
})
export default SecondStepper;


