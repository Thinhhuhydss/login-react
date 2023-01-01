import React, { Component } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Dimensions,
    TextInput,
    Image
} from "react-native"
import { useState } from "react";
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

export default Registration = ({ navigation}) => {
    {
        const [getPasswordVisible, setPasswordVisible]= useState(false)
        const [getPasswordVisible1, setPasswordVisible1]= useState(false)
        return (
            <SafeAreaView>
                <StatusBar barStyle="light-content"/>
                <View style={{height:'100%', width:'100%',backgroundColor:'#ffffff'}}>
                    {/* name app */}
                    <View style={{
                        height: '20%', width: '100%', marginTop: 0.1 * windowHeight,
                        alignItems:'center', justifyContent: 'center'
                        }}>
                            <Text style={{fontSize:60, color:'#9747FF', fontFamily:'Area', fontWeight:'bold'}}>
                                T-VPN
                            </Text>
                    </View>

                    {/* user & pass */}
                    <View style={{
                        height: '30%', width: '100%', marginTop: 0.03 * windowHeight, 
                        alignItems:'center', justifyContent: 'center'
                        }}>
                           <View style={{width:'80%', height:40,marginBottom:30}}>
                                <TextInput 
                                    style={{ width:'100%',color:'black', borderBottomWidth:1, textDecorationLine:'none',
                                    borderBottomColor:'9c9c9c',padding:0,fontSize:20,fontWeight:"400", paddingBottom:2
                                    }} 
                                    
                                    placeholder="User Name"/>
                           </View>
                           <View style={{width:'80%',height:40,marginBottom:30}}>
                                <TextInput 
                                    style={{ width:'100%',color:'black', borderBottomWidth:1, textDecorationLine:'none',
                                    borderBottomColor:'9c9c9c',padding:0,fontSize:20,fontWeight:"400", paddingBottom:2, paddingRight:35
                                    }} 
                                    placeholder="Password"
                                    secureTextEntry={getPasswordVisible? false : true}
                                    />
                                <TouchableOpacity style={{height:'50%', width:30, position:'absolute', right:0, top:5, aspectRatio:1}}
                                                  onPress={() => {
                                                    setPasswordVisible(!getPasswordVisible)
                                                  }}
                                >
                                    <Image 
                                        source={getPasswordVisible? require('../images/visibility.png') : require('../images/visibility_off.png')}
                                        style={{height:'100%', width:'100%'}}
                                        resizeMethod='auto'>
                                    </Image>
                                </TouchableOpacity>
                           </View>
                           <View style={{width:'80%',height:40}}>
                                <TextInput 
                                    style={{ width:'100%',color:'black', borderBottomWidth:1, textDecorationLine:'none',
                                    borderBottomColor:'9c9c9c',padding:0,fontSize:20,fontWeight:"400", paddingBottom:2, paddingRight:35
                                    }} 
                                    placeholder="Comfirm Password"
                                    secureTextEntry={getPasswordVisible1? false : true}
                                    />
                                <TouchableOpacity style={{height:'50%', width:30, position:'absolute', right:0, top:5, aspectRatio:1}}
                                                  onPress={() => {
                                                    setPasswordVisible1(!getPasswordVisible1)
                                                  }}
                                >
                                    <Image 
                                        source={getPasswordVisible1? require('../images/visibility.png') : require('../images/visibility_off.png')}
                                        style={{height:'100%', width:'100%'}}
                                        resizeMethod='auto'>
                                    </Image>
                                </TouchableOpacity>
                           </View>
                    </View>

                    {/* button */}
                    <View style={{
                        height: '20%', width: '100%', marginTop: 0.1 * windowHeight, 
                        alignItems:'center'
                        }}>
                            <View style={{width:'80%', height:'50%',marginBottom:30,alignItems: 'center'}}>
                                <TouchableOpacity style={{width:'100%', height:50, backgroundColor:'#9747FF', borderRadius:5}}
                                                  onPress= {() =>{
                                                    navigation.navigate('Login')
                                                  }}>
                                    <View style={{width:'100%', height:'100%', alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={{color:'#ffffff' , fontSize:18, fontWeight:'bold'}}>Đăng ký</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={{height:30, width:'100%', marginTop: 20, justifyContent:'center'}}>
                                    <View style={{width:'100%', height:1, borderWidth:0.5}}></View>
                                    <Text style={{width:'20%',textAlign:'center',position:'absolute',left:'40%',backgroundColor:'#ffffff',color:'#000000',fontWeight:'400'}}>hoặc</Text>
                                </View>
                            </View>

                           <TouchableOpacity style={{width:'80%', height:50, backgroundColor:'#E14918', borderRadius:5}}
                                             onPress= {() =>{
                                                navigation.navigate('Login')
                                              }}>
                                <View style={{width:'100%', height:'100%', alignItems: 'center', justifyContent:'center'}}>
                                    <Text style={{color:'#ffffff' , fontSize:18, fontWeight:'bold'}}>Đăng nhập</Text>
                                </View>
                            </TouchableOpacity>
                    </View>

                </View>
           </SafeAreaView>
        );
    }
}