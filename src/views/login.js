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

export default Login = ({ navigation}) => {
    {
        const [getPasswordVisible, setPasswordVisible]= useState(false)
        const [getUser, setUser] =useState('')
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
                        height: '20%', width: '100%', marginTop: 0.03 * windowHeight, 
                        alignItems:'center', justifyContent: 'center'
                        }}>
                           <View style={{width:'80%', height:40,marginBottom:30}}>
                                <TextInput 
                                    style={{ width:'100%',color:'black', borderBottomWidth:1, textDecorationLine:'none',
                                    borderBottomColor:'9c9c9c',padding:0,fontSize:20,fontWeight:"400", paddingBottom:2
                                    }} 
                                    
                                    placeholder="User Name"
                                    value={getUser}
                                    onChangeText={setUser}
                                    />
                           </View>
                           <View style={{width:'80%',height:40}}>
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
                    </View>

                    {/* button */}
                    <View style={{
                        height: '30%', width: '100%', marginTop: 0.1 * windowHeight, 
                        alignItems:'center'
                        }}>
                            <View style={{width:'80%', height:'50%',marginBottom:30,alignItems: 'center'}}>
                                <TouchableOpacity style={{width:'100%', height:50, backgroundColor:'#9747FF', borderRadius:5}}
                                                  onPress= {() =>{
                                                    navigation.navigate('Home', {
                                                        user:getUser
                                                    })
                                                  }}>
                                    <View style={{width:'100%', height:'100%', alignItems: 'center', justifyContent:'center'}}>
                                        <Text style={{color:'#ffffff' , fontSize:18, fontWeight:'bold'}}>Đăng nhập</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text style={{marginTop:10, fontSize:12, fontWeight:'bold', color:'#012D51'}}>Quên mật khẩu?</Text>
                                <View style={{height:30, width:'100%', marginTop: 20, justifyContent:'center'}}>
                                    <View style={{width:'100%', height:1, borderWidth:0.5}}></View>
                                    <Text style={{width:'20%',textAlign:'center',position:'absolute',left:'40%',backgroundColor:'#ffffff',color:'#000000',fontWeight:'400'}}>hoặc</Text>
                                </View>
                            </View>

                           <TouchableOpacity style={{width:'80%', height:50, backgroundColor:'#E14918', borderRadius:5}}
                                             onPress= {() =>{
                                                navigation.navigate('Registration')
                                              }}>
                                <View style={{width:'100%', height:'100%', alignItems: 'center', justifyContent:'center'}}>
                                    <Text style={{color:'#ffffff' , fontSize:18, fontWeight:'bold'}}>Đăng ký</Text>
                                </View>
                            </TouchableOpacity>
                    </View>

                </View>
           </SafeAreaView>
        );
    }
}