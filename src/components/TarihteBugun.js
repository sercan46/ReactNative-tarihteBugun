import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import moment from "moment";
import 'moment/locale/tr';
import axios from 'axios';
import _ from "lodash";

const momentNow = () => {
    moment.locale('tr');
    return moment().format("DD.MMMM.YYYY");
}

export default class TarihteBugunComponent extends Component {
    state={
        responseData:[]
    }
    
    componentDidMount() {
        this.getData();
    }
    getData = () => {
       axios.get('https://api.ubilisim.com/tarihtebugun/',{
        headers: {
            'Accept-Encoding': 'identity'
        }}).then((resp) => {
           console.log('res',resp.data)
            this.setState({
                responseData: resp.data.tarihtebugun
            })

        });
    }
    renderFlatListData = ({ item, index }) => {
        return (
            <View style={{ display:'flex',flex:1,borderWidth:1,borderColor:'black',backgroundColor:item.Durum=='Ölüm'?'black':item.Durum=='Doğum'?'#2668e2':'#7f00ff' }} >
                <View style={styles.dateContiner}>
                   <Text style={styles.textHeader}>{item.Yil}</Text>
                </View>
                <View style={styles.durumContainer}>
                <Text style={{fontSize:16,fontWeight:'bold',color:'yellow'}}>{item.Durum}</Text>
                </View>
                <Text style={{paddingTop:15,fontSize:16,paddingLeft:5,paddingRight:5,paddingBottom:15,color:'white'}}>{item.Olay}</Text>
            </View>
        )
    }

    render() {

        return (
            <SafeAreaView >
                <Text style={styles.dateText}>{momentNow()}</Text>
                <FlatList
                    data={this.state.responseData}
                    renderItem={this.renderFlatListData}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>)
    }

}
const styles = StyleSheet.create({
    dateText: {
        marginTop: 15,
        marginBottom:15,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'brown',
        fontSize: 18,
        fontFamily: 'Arial'
    },
    dateContiner:{
     flexDirection:'row',
     justifyContent:'center'

    },
    textHeader:{
        fontWeight:'bold',
        fontSize:18,
        color:'#b0e0e6'
    },
    durumContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight:20,
    }
})
