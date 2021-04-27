import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList,Button} from 'react-native';
import Svg,{Circle} from 'react-native-svg'
import ProfilePicture from 'react-native-profile-picture'
import { Searchbar, IconButton, TouchableRipple } from 'react-native-paper';
import { availabilityStyles, theme } from '../constants/Styles'
import Icon from 'react-native-vector-icons/Ionicons'
import Colors from '../constants/Colors'

const Status = ()=>{
  const data = [
   {
    name:"Raghuveer",
    department:"C.S.E",
    status:true, 
    key:Math.random().toString()
   },
   {
     name:"rohon jioji",
     department:"M.E.C",
     status:false,
     key:Math.random().toString()
   },
   {
     name:"anirudh noob",
     department:"EEE",
     status:false,
     key:Math.random().toString()
   },
   {
     name:"koushik Topper",
     department:"civil",
     status:true,
     key:Math.random().toString()
   },
   {
     name:"koushik Topper",
     department:"civil",
     status:true,
     key:Math.random().toString()
   },
   {
     name:"koushik Topper",
     department:"civil",
     status:true,
     key:Math.random().toString()
   },
   {
     name:"koushik Topper",
     department:"civil",
     status:true,
     key:Math.random().toString()
   },
   {
     name:"koushik Topper",
     department:"civil",
     status:true,
     key:Math.random().toString()
   },
   {
     name:"koushik Topper",
     department:"civil",
     status:true,
     key:Math.random().toString()
   },
   {
     name:"koushik Topper",
     department:"civil",
     status:true,
     key:Math.random().toString()
   }
   
 ]
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query); 
 
    return (
      <View style={availabilityStyles().container}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginBottom:20}}>
            <View style={{width:"70%"}}>
            <Searchbar
              placeholder="Search"
              iconColor={theme().iconColor}
              onChangeText={onChangeSearch}
              placeholderTextColor={theme().text}
              value={searchQuery}
              style={availabilityStyles().searchBar}
              />
            </View>
            <View>
              <TouchableRipple>
              <IconButton 
                icon='filter'
                size={30}
                borderless={true}
                onPress={()=>{}}
              />
            </TouchableRipple>
            </View>
          </View>
          <ScrollView>
            {data.filter((val)=>{
                if(searchQuery == ""){
                    return val
                } else if(val.name.toLowerCase().includes(searchQuery.toLowerCase())){
                    return val
                }
            }).map((val,key)=>{
                return (
                  <View style={availabilityStyles().statusEntry} key={key}>
                    <View style={{marginRight:5}}>
                      <ProfilePicture
                        isPicture={true}
                        requirePicture={require('../assets/bulusu.jpeg')}
                        shape='circle'
                      />
                    </View>
                    <View style={availabilityStyles().personName}>
                      <Text style={{fontSize:18, fontWeight:'bold',marginRight:20, color:theme().text}}>{val.name}</Text> 
                    </View> 
                    <View style={availabilityStyles().personDepartment}>
                      <Text style = {{fontSize:13, fontWeight:'bold', color:theme().text}}>{val.department}</Text>
                    </View>
                    <View >
                      {val.status &&
                        <View style={availabilityStyles(val.status).statusIcon}>
                          <Icon
                            name="checkmark-circle"
                            size={25}
                            color='green'
                            style={{marginLeft:1.5}}
                          />
                        </View>
                      }
                      {!val.status &&
                        <View style={availabilityStyles(val.status).statusIcon}>
                          <Icon
                            name="checkmark-circle"
                            size={25}
                            color='red'
                            style={{marginLeft:1.5}}
                          />
                        </View>
                      }
                    </View>
                    {/* <Svg height="50" width="35">
                      {val.status &&  
                        <Circle cx="25" cy="25" r="10" fill="green" />
                      }
                      {!val.status &&
                        <Circle cx="25" cy="25" r="10" fill="red" />
                      }
                    </Svg> */}
                  </View>
                );
            })}
            </ScrollView>

      </View>
    );
} 


export default Status;
