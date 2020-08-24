
import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform, SafeAreaView, Image } from 'react-native'

class Detail extends Component {

    static navigationOptions =
  {
     title: 'DetailActivity',
  };

  constructor(props) {
    super(props)
  }

  render()
  {
    let imageUrl = this.props.navigation.state.params.ListViewClickItemHolder.detailImageUrl
    console.log('Image Url:' + imageUrl)

     return(
        <View style = { styles.MainContainer }>
            {/* <Text style = { styles.TextStyle }> { this.props.navigation.state.params.ListViewClickItemHolder.detailImageUrl } </Text> */}
            <Image source={{ uri: imageUrl }} style={styles.backgroundContainer} resizeMode="contain"/> 
        </View>
     );
  }
  
}

const styles = StyleSheet.create(
    {
      MainContainer: {
            justifyContent: 'center',
            flex:1,
            margin: 10
        
        },
      TextStyle: {
            fontSize: 23,
            textAlign: 'center',
            color: '#000',
        },
      backgroundContainer: {
        flex:1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }
    });

    export default Detail