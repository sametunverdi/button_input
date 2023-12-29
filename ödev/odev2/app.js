import{
  StyleSheet,
  view,
  Text,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from "react-native";

const App = () =>{
  const handleClick = () => {
    alert("Merhaba");
  };
  return(
    <view style={styles.container}>
      <button title="Click Button" onPress={handleClick}/>
      <TouchableOpacity onPress={handleClick}>
        <Text>Click TouchableOpacity</Text>
      </TouchableOpacity>
      <TouchableHighlight 
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => alert("Pressed!")}>
        <Text> Click TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableWithoutFeedback onPress={() => alert ("Pressed!")}>
        <Text> Click TouchableWithoutFeedback</Text>
      </TouchableWithoutFeedback>
    </view>

  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",    
  },
});