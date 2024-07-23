import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
 
    },
    Celcius: {
        flexDirection:'row',
        margin: 10,
        backgroundColor: '#88C0D0',
        padding: 12,
        borderRadius: 10,
        width:300,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation:5,
        shadowColor:'#ffffff'
    },
    Farhenite: {
        flexDirection:'row',
        margin: 10,
        backgroundColor: '#88C0D0',
        padding: 12,
        borderRadius: 10,
        width:300,
        justifyContent:'space-between',
        elevation:5,
        shadowColor:'#ffffff'
    },  
    City: {
        flexDirection:'row',
        margin: 10,
        backgroundColor: '#88C0D0',
        padding: 12,
        borderRadius: 10,
        width:300,
        justifyContent:'space-between',
        elevation:5,
        shadowColor:'#ffffff'
    },
    Country: {
        flexDirection:'row',
        margin: 10,
        backgroundColor: '#88C0D0',
        padding: 12,
        borderRadius: 10,
        width:300,
        justifyContent:'space-between',
            elevation:5,
        shadowColor:'#ffffff'
    },
    CelciusText: { 
        color: '#4C566A',
        fontSize:18,
        textAlign:'center',

     },
    FarheniteText: { 
        color: '#4C566A',
        fontSize:18,
        textAlign:'center'
    },
    CityText: { color: '#4C566A',
        fontSize:18,
        textAlign:'center'
     },
    CountryText: { color: '#4C566A',
        fontSize:18,
        textAlign:'center'
     }
})