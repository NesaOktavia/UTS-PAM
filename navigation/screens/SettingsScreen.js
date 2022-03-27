import React, { useEffect, useState } from 'react';
 
import { ActivityIndicator, View, StyleSheet, SafeAreaView, FlatList, Text } from 'react-native';
import Jadwal from './Jadwal';
export default function App() {
 
  const [JSON_DATA, setJSON_DATA] = useState('');
 
  const [showIndicator, setShowIndicator] = useState(true);
 
  useEffect(() => {
    async function fetchData() {
      fetch('https://mocki.io/v1/a830e151-3fb2-48c1-b926-4677088cbd8c')
        .then((response) => response.json())
        .then((responseJson) => {
          setJSON_DATA(responseJson);
          setShowIndicator(false);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchData();
 
  }, []);
 
  const ItemRender = ({ title }) => (
    <View style={styleSheet.listItem}>
      <Text style={styleSheet.itemText}> {title} </Text>
    </View>
  );
 
  const header = () => {
    return (
      <View style={{
        height: 110,
        width: "100%",
        backgroundColor: "blue",
        justifyContent: 'center',
        alignItems: 'center'
      }}>
 
        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold', top:20}}> Daftar Pembatalan </Text>
 
      </View>
    );
  }
 
  const divider = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: 'black',
        }}
      />
    );
  }
 
  return (
    <SafeAreaView style={styleSheet.MainContainer}>
 
      <ActivityIndicator
        size="large"
        color="red"
        animating={showIndicator}
        style={styleSheet.activityIndicator} />
 
      <FlatList
        data={JSON_DATA}
        renderItem={({ item }) => <ItemRender title={item.title} />}
        ItemSeparatorComponent={divider}
        keyExtractor={item => item.id}
        ListHeaderComponent={header}
      />
 
    </SafeAreaView>
  );
}
 
const styleSheet = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
 
  listItem: {
    paddingLeft: 12,
    paddingTop: 10,
    paddingBottom: 10,
  },
 
  itemText: {
    fontSize: 24,
    color: 'black',
  },
 
  activityIndicator: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  }
 
});