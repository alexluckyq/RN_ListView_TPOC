
import React, { Component } from 'react'
import { View, StyleSheet, Text, Platform, SafeAreaView } from 'react-native'
import RefreshListView, { RefreshState } from 'react-native-refresh-list-view'
import Cell from './Cell'
import testData from './data'

class Demo extends Component {
  state: {
    dataList: Array<any>,
    refreshState: number,
  }

  constructor(props) {
    super(props)

    this.state = {
      dataList: [],
      refreshState: RefreshState.Idle,
    }
  }

  componentDidMount() {
    this.onHeaderRefresh()
  }

  static navigationOptions =
  {
     title: 'ListActivity',
  };

  onHeaderRefresh = () => {
    this.setState({ refreshState: RefreshState.HeaderRefreshing })

    // simulate network request
    setTimeout(() => {
      if (Math.random() < 0.2) {
        this.setState({ refreshState: RefreshState.Failure })
        return
      }

      let dataList = this.getTestList(true)

      this.setState({
        dataList: dataList,
        refreshState: dataList.length < 1 ? RefreshState.EmptyData : RefreshState.Idle,
      })
    }, 2000)
  }

  onFooterRefresh = () => {
    this.setState({ refreshState: RefreshState.FooterRefreshing })

    // simulate network request
    setTimeout(() => {
      // network request failed
      if (Math.random() < 0.2) {
        this.setState({ refreshState: RefreshState.Failure })
        return
      }

      //capture test data
      let dataList = this.getTestList(false)

      this.setState({
        dataList: dataList,
        refreshState: dataList.length > 50 ? RefreshState.NoMoreData : RefreshState.Idle,
      })
    }, 2000)
  }

  // capture test data
  getTestList(isReload: boolean): Array<Object> {
    let newList = testData.map((data) => {
      return {
        imageUrl: data.thumbnail,
        title: data.mname,
        subtitle: data.title,
        status: data.status,
        detailImageUrl: data.detailImageUrl
      }
    })
    return isReload ? (Math.random() < 0.2 ? [] : newList) : [...this.state.dataList, ...newList]
  }

  keyExtractor = (item: any, index: number) => {
    return index.toString()
  }

  renderCell = (info: Object) => {
    return <Cell info={info.item} />
  }

  render() {
    console.log('render scene')
    return (
      <SafeAreaView style={styles.container}>
        <RefreshListView
          data={this.state.dataList}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderCell}
          refreshState={this.state.refreshState}
          onHeaderRefresh={this.onHeaderRefresh}
          onFooterRefresh={this.onFooterRefresh}

          // options
          footerRefreshingText='Loading'
          footerFailureText='Loading Failed'
          footerNoMoreDataText='-End of content-'
          footerEmptyDataText='-Nothing to show here-'
        />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    height: 84,
    textAlign: 'center'
  }
})

export default Demo
