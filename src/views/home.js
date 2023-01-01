import {
    Text,
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import React, { Component } from 'react'

const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;

export default Home = ({route,navigation}) => {
  {
    const { user } =route.params;
    return (
      <SafeAreaView>
        <View style={{height:'100%', width:'100%'}}>
            {/* app name */}
            <View style={{height:'20%', width:'100%', marginTop:0.1 * windowHeight, alignItems:'center', justifyContent: 'center'}}>
                <Text style={{fontSize:60, color:'#9747FF', fontFamily:'Area', fontWeight:'bold'}}>
                    T-VPN
                </Text>
            </View>

            {/* user name */}
            <View style={{height:'20%', width:'100%', marginTop:0.05 * windowHeight, alignItems:'center', justifyContent: 'center'}}>
                <Text style={{fontSize:30, color:'#000000', fontFamily:'Area', fontWeight:'400'}}>
                    {user}
                </Text>
            </View>

            {/* logout */}
            <TouchableOpacity style={{height:'20%', width:'100%', marginTop:0.05 * windowHeight, alignItems:'center', justifyContent: 'center'}}
                              onPress={() => {
                                navigation.goBack() // trở lại trang trước
                                //navigation.pop(number) trở lại number trang trước
                                //navigation.popToTop() trở lại trang đầu tiên
                              }}>
                <View style={{height:50, width:'80%', alignItems:'center', justifyContent: 'center', backgroundColor:'#9747FF', borderRadius:5}}>
                    <Text style={{fontSize:18, color:'#ffffff', fontFamily:'Area', fontWeight:'bold'}}>
                        Đăng xuất
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})