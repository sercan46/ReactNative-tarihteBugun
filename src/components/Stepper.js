import React, { useState } from 'react';
import Stepper from "react-native-stepper-ui";
import { ScrollView } from "react-native";
import FirstStepper from './steppersteps/FirstStepper'
import SecondStepper from './steppersteps/SecondStepper'
import ThirdStepper from './steppersteps/ThirdStepper'
import { StackActions } from '@react-navigation/native';

const content = [
    <FirstStepper />,
    <SecondStepper />,
    <ThirdStepper />
];

const StepperComponent = ({ navigation }) => {
    const [active, setActive] = useState(0);
  
    return (
        <ScrollView style={{ marginVertical: 80, marginHorizontal: 20}}>
            <Stepper
                active={active}
                content={content}
                onNext={() => setActive((p) => p + 1)}
                onBack={() => setActive((p) => p - 1)}
                onFinish={() => navigation.dispatch(StackActions.push('tarihteBugun', { user: 'Wojtek' }))}
                buttonStyle={{display:'flex',flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:'10%', borderRadius: 4, backgroundColor: '#6C63FF'}}
                stepStyle={{backgroundColor: '#6C63FF', width: 30, height: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center', opacity: 1}}
                buttonTextStyle={{color:'white',fontWeight:'bold',fontSize:15}}      
            />
        </ScrollView>)
}

export  default   StepperComponent;
