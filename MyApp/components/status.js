import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,FlatList,Button} from 'react-native';
import Svg,{Circle} from 'react-native-svg'
import ProfilePicture from 'react-native-profile-picture'
import { Searchbar } from 'react-native-paper';
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
      <View style={styles.container}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View style={{width:"70%",marginBottom:20,marginRight:10}}>
           <Searchbar
             placeholder="Search"
             onChangeText={onChangeSearch}
             value={searchQuery}
             />
          </View>
          <View style={{height:"50%",marginBottom:20}}>
          <Button title="filter"/>
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
            <View style={{flexDirection:'row'}} key={key}>
            <View style={{marginVertical:10,marginRight:5}}>
              <ProfilePicture
                isPicture={true}
                requirePicture={require('../assets/bulusu.jpeg')}
                shape='circle'
              />
            </View>
            <View style={styles.personName}>
              <Text style={{fontSize:18,marginRight:20}}>{val.name}</Text> 
            </View> 
            <View style={styles.personDepartment}>
              <Text style = {{fontSize:13,marginRight:10}}>{val.department}</Text>
            </View>
            <Svg height="50" width="35">
              {val.status &&  
              <Circle cx="25" cy="35" r="10" fill="green" />
              }
              {!val.status &&
              <Circle cx="25" cy="35" r="10" fill="red" />
              }
            </Svg>  
       
          </View>
                );
            })}
            </ScrollView>

      </View>
    );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    
    alignItems: 'center',
    //justifyContent: 'center',
    marginTop:20
  },
  personName:{
    padding:10,
    width:'50%',
    marginVertical:10,
    marginRight:10,
    elevation:10,
    backgroundColor:'lightyellow',
    borderRadius:15
    
  },
  personDepartment:{
    padding:10,
    width:'20%',
    marginVertical:15,
    marginRight:10,
    elevation:10,
    justifyContent:'center',
    backgroundColor:'lightyellow',
    borderRadius:20,
    height:40
  },
 
  
});    


export default Status;
