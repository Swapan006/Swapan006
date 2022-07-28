import { StyleSheet } from "react-native";
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from "../style/responsiveSize";

export const styles = StyleSheet.create({
  buttonView:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  textView:{
    fontSize:textScale(20),
    backgroundColor:'#fffdcf',
    textAlign:'center',
    padding:10,
    // marginVertical:moderateScaleVertical(20)
    
  },
 
});