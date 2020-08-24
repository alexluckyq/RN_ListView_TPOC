import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, PixelRatio } from 'react-native'
import { withNavigation } from 'react-navigation';

const color = {
  theme: '#06C1AE',
  border: '#e0e0e0',
  background: '#f3f3f3'
}

class Cell extends PureComponent {

  render() {
    console.log('render cell')
    let { info } = this.props

    // info.imageUrl = info.imageUrl.replace('w.h', '160.0')

    return (
      <TouchableOpacity style={styles.container} onPress={() => this.clickedRow(info)}>
        <Image source={{ uri: info.imageUrl }} style={styles.icon} />

        <View style={styles.rightContainer}>
          <Text style={styles.h1}>{info.title}</Text>
          <View>
          </View>
          <Text style={styles.p} numberOfLines={0} style={{ marginTop: 8 }}>{info.subtitle}</Text>
          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Text style={[styles.h1, styles.status]}>Status: {info.status}</Text>
          </View>

        </View>
      </TouchableOpacity>
    )
  }

  clickedRow(rowData) {
    this.props.navigation.navigate('DetailActivity', { ListViewClickItemHolder: rowData });
    // alert('people\' + s name is' + rowData.title);
  }
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: color.border,
    backgroundColor: 'white',
  },
  icon: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 10,
  },
  status: {
    color: color.theme
  },
  h1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  p: {
    fontSize: 13,
    color: '#777777',
  },
})

export default withNavigation(Cell)
