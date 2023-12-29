import { Image, StyleSheet,view } from "react-native";

const App = ()=>{
  return(
    <view style={styles.container}>
      <image 
      style={{
        width:"100%",
        height: 180,
        borderWidth:2,
        borderColor:"red",
      }}
      source={{
        uri: "https://media.istockphoto.com/photos/stockholm-sweden-scenic-summer-sunset-view-with-"
      }}
      />
    </view>
  );
};

const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",

  },
});