import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,ImageBackground,Image ,TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PasswordInputText from 'react-native-hide-show-password-input';
import { PasswordStrengthChecker,PasswordStrength} from 'react-native-password-strength-checker';
import RNPasswordStrengthMeter from 'react-native-password-strength-meter';
import FileViewer from 'react-native-file-viewer';
import DocumentPicker from 'react-native-document-picker';

  const selectOneFile = async () => {
    //handler to Select File
    try {
      const res = await DocumentPicker.pick({
        //Provide which type of file you want user to pick
        type: [DocumentPicker.types.images],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      if (res) {
        let uri = res.uri;
        if (Platform.OS === 'windows') {
          //After picking the file we need to remove 'file://' from file path
          //Because FileViewer will not show the file with 'file://' prefix
          uri = res.uri.replace('file://', '');
        }
        console.log('URI : ' + uri);
        FileViewer.open(uri)
          .then(() => {
            //Can do anything you want after opening the file successfully
            console.log('Success');
          })
          .catch(_err => {
            //Handle failure here
            console.log(_err);
          });
      }
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
function Mainscreen({navigation}){
  return(
    <View>
   
   <View style={(styles.playingSpace)} >
     
   <Image
      style={{ width: 890, height: 800, }}
      resizeMode="contain"
      source={require('./assets/blotter_hand-removebg-preview.png')}
          />
          
   </View>
    <View style={[styles.controlSpace]}>
      <Text>          </Text>
      
 <Button
  title="         Login         "
 style={{ height: 60,
  width: 30,}}
  color="black"
  onPress={()=>navigation.navigate('loginpage')}
  accessibilityLabel="Click here to login into your existing account"
/>
<Text>                           </Text>
<br></br>
<Button
  title="       Signup         "
  color="black"
  onPress={()=>navigation.navigate('signuppage')}

  accessibilityLabel="Click here to create a new account"
/>
    </View>
    
    </View>
  )
}
function LoginPage({navigation}){
  return(
    <View style={{ flex: 1,backgroundColor:'#101820FF', alignItems: 'center', justifyContent: 'center' }}>

<Image
      style={{ width: 800, height: 350, }}
      resizeMode="contain"
      source={require('./assets/only_logo.png')}
          />
     <TextInput
          placeholder="Enter email address:"
          underlineColorAndroid="transparent"
          style={styles.TextInput}
       
        />
        <br></br>
        <TextInput
       
          placeholder="Password"
          underlineColorAndroid="transparent"
          style={styles.TextInput}
        />
         
    
    <br></br>
    <Button
    title="     LOGIN      "
    color="black"
    onPress={()=> navigation.navigate('Blotter-Home')}></Button>
    
    </View>
  )
}


function SignupPage({navigation}){
  

  return(
    <View style={{ flex: 1, alignItems: 'center', backgroundColor:'#101820FF',justifyContent: 'center' }}>
      <Image
      style={{ width: 800, height: 350, }}
      resizeMode="contain"
      source={require('./assets/only_logo.png')}
          />
   <TextInput
          placeholder="Enter email address:"
          underlineColorAndroid="transparent"
          style={styles.TextInput}
        />
<TextInput
          placeholder="Enter Password"
          underlineColorAndroid="transparent"
          style={styles.TextInput}
        />
    <TextInput
          placeholder="Confirm Password"
          underlineColorAndroid="transparent"
          style={styles.TextInput}
        /><br></br>
        <Button
    title="     SIGNUP       "
    color="black"
    onPress={()=> navigation.navigate('creationpage')}></Button>
     
       
    </View>
  )
}
function CreationPage({navigation}){
  return(
    <View style={{ flex: 1,backgroundColor:'#101820FF', alignItems: 'center', justifyContent: 'center' }}>
      
          <TouchableOpacity activeOpacity={0.5} >
            <Image 
            source={ require('./assets/profile_pic_default.png')}
            style={{
              paddingVertical: 30,
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            onPress={selectOneFile}
            ></Image>
            </TouchableOpacity>
    
   <br></br>
     <TextInput 
          placeholder="Tell us about yourself"
          underlineColorAndroid="transparent"
          style={{height:70, width:"40%",paddingLeft: 5,
          borderWidth: 1,
          marginTop: 15,
          borderRadius: 20,
          borderColor: '#606070',}}
        />
        <br></br>
        
    
    <br></br>
    <Button
    title="     Proceed      "
    color="black"
    onPress={()=> navigation.navigate('Blotter-Home')}></Button>
    
    </View>
  )
}
function Genres({navigation}){
  

  return(
    <View >
    <View style={{ flex: 1, alignItems: 'flex-start', backgroundColor:'',justifyContent: 'space-around',flexDirection:'row' }}>
       <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('ActionGenre')} >
            <Image 
            source={ require('./assets/action.png')}
            
            style={{
              paddingVertical: 30,
              width: 200,
              height: 200,
              borderRadius: 40
            }}           
            ></Image>
            
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('AdventureGenre')} >
            <Image 
            source={ require('./assets/adventure.png')}
            style={{
              paddingVertical: 30,
              width: 200,
              height: 200,
              borderRadius: 40
            }}
            ></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('ComedyGenre')}>
            <Image 
            source={ require('./assets/comedy.png')}
            style={{
              paddingVertical: 30,
              width: 200,
              height: 200,
              borderRadius: 40
            }}
           
            ></Image>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('FantasyGenre')} >
            <Image 
            source={ require('./assets/fantasy.png')}
            style={{
              paddingVertical: 30,
              width: 200,
              height: 200,
              borderRadius: 40
            }}
           
            ></Image>
            </TouchableOpacity>
           

            <TouchableOpacity activeOpacity={0.5} onPress={()=> navigation.navigate('HorrorGenre')} >
            <Image 
            source={ require('./assets/horror.png')}
            style={{
              paddingVertical: 30,
              width: 200,
              height: 200,
              borderRadius: 40
            }}
           
            ></Image>
            </TouchableOpacity>
            
    </View>
    
    </View>
  )
}
function ActionGenre(navigation){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stories of action genre</Text>
    </View>
  );
}
function AdventureGenre(navigation){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stories of adventure genre</Text>
    </View>
  );
}
function ComedyGenre(navigation){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stories of comedy genre</Text>
    </View>
  );
}
function FantasyGenre(navigation){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stories of fantasy genre</Text>
    </View>
  );
}
function HorrorGenre(navigation){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Stories of horror genre</Text>
    </View>
  );
}
//After logging in
function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}
function Search({navigation}) {
  return (
    <View style={{ flex: 1, alignItems:'center',flexDirection:'column'}}>
      <TextInput 
          placeholder="What do you want to search for?"
          underlineColorAndroid="transparent"
          style={{height:30, width:"80%",paddingLeft: 5,
          borderWidth: 1,
          marginTop: 15,
          borderRadius: 0,
          borderColor: '#606070',}}
        />
        <br></br>
        
       <Button
     
       title="     Search     "
       color="black"></Button>
       <br></br>
       <Button
     style={{justifyContent:'center',flexDirection:'row',
     flexDirection:'row',
     paddingVertical: 30,
     paddingLeft:30,
     width: 150,
     height: 150,
     borderRadius: 75}}
     title="     Explore genres      "
     color="black"
   onPress={()=> navigation.navigate('Genre-page')}
    >
     </Button>
    </View>
  );
}
function Add() {
  return (
    <View style={{ flex: 1, flexDirection:'column',justifyContent: 'center', alignItems: 'center' }}>
      <TextInput 
          placeholder="Begin writing..."
          underlineColorAndroid="transparent"
          style={{height:500, width:"80%",paddingLeft: 5,
          borderWidth: 1,
          marginTop: 15,
          borderRadius: 0 ,
          borderColor: '#606070',}}
        />
        <br></br>
       
        <Button
       
    title="     Upload     "
    color="black"
    
    ></Button>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, flexDirection:'row' ,backgroundColor:''}}>
      <Image 
            source={ require('./assets/profile_pic_default.png')}
            style={{
              flexDirection:'row',
              paddingVertical: 30,
              paddingLeft:30,
              width: 150,
              height: 150,
              borderRadius: 75
            }}
            ></Image>
    
   
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  
  return (
   
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="red"
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={'#101820FF'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-search" color={'#101820FF'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="upload" color={'#101820FF'} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={'#101820FF'} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={'#101820FF'} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
    
  );
}

export default function App() {

  
  
  const Stack = createStackNavigator();
  const remote='./assets/bgimage.png'
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Please login or signup to continue:" component={Mainscreen}/>
        <Stack.Screen name="loginpage" component={LoginPage}/>
        <Stack.Screen name="signuppage" component={SignupPage}/>
        <Stack.Screen name="creationpage" component={CreationPage}/>

        <Stack.Screen name="Blotter-Home" component={MyTabs}/>
        <Stack.Screen name="Genre-page" component={Genres}/>
        <Stack.Screen name="ActionGenre" component={ActionGenre}/>
        <Stack.Screen name="AdventureGenre" component={AdventureGenre}/>
        <Stack.Screen name="ComedyGenre" component={ComedyGenre}/>
        <Stack.Screen name="FantasyGenre" component={FantasyGenre}/>
        <Stack.Screen name="HorrorGenre" component={HorrorGenre}/>
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({
 
  backgroundImage:{
    flex:1,
  },
    controlSpace: {
      height:'30%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      
      borderColor: '#ff7f50',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: -100,
    flexDirection:"row",
    paddingHorizontal: 20,
    backgroundColor:'white'
    
   
},
playingSpace: {
  height:'40%',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'white',
  borderColor: '#ff7f50',
  paddingVertical:80
  
},
TextInput: {
  width: '40%',
  height: 40,
  paddingLeft: 5,
  borderWidth: 1,
  marginTop: 15,
  borderRadius: 20,
  borderColor: '#606070',
}

});
  
