/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import cssConstrains from './constrains/Css.constrains';
import AddButton from './components/AddButton';
import RemoveButton from './components/RemoveButton';
import RunButton from './components/RunButton';

const mock = [
  {id: 1, description: 'Egg 🍳', time: '12 Min'},
  {id: 2, description: 'Eggplant 🍆', time: '22 Min'},
  {id: 3, description: 'Banana 🍌', time: '5 Min'},
  {id: 4, description: 'Pumpkin 🎃', time: '25 Min'},
  {id: 5, description: 'Carrot 🥕', time: '15 Min'},
  {id: 6, description: 'Broccoli 🥦', time: '7 Min'},
];

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.sectionContainerMenu}>
          <Text style={styles.sectionTitle}>COOKING THING</Text>
        </View>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View
              style={{
                ...styles.sectionContainerList,
                backgroundColor: colors.weakBlue,
              }}>
              <Text style={{...cssConstrains._F1, ...cssConstrains._MH10}}>
                Describe Your Food
              </Text>
              <Text style={{...cssConstrains._MR10}}>0 Min</Text>
              <AddButton />
            </View>
            {mock.map((i) => {
              return (
                <View key={i.id} style={styles.sectionContainerList}>
                  <Text style={{...cssConstrains._F1, ...cssConstrains._MH10}}>
                    {i.description}
                  </Text>
                  <Text style={{...cssConstrains._MR10}}>{i.time}</Text>
                  <RemoveButton />
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.sectionContainerFooter}>
          <RunButton />
        </View>
      </SafeAreaView>
    </>
  );
};

const colors = {
  black: '#2F2F2F',
  weakWhite: '#f2f2f2',
  red: '#c13232',
  white: '#FFFFFF',
  blue: '#407694',
  weakBlue: '#99CCE9',
};

const styles = StyleSheet.create({
  safeArea: {
    ...cssConstrains._H100,
    backgroundColor: colors.red,
  },
  scrollView: {
    backgroundColor: colors.red,
  },
  body: {
    ...cssConstrains._PB10,
    backgroundColor: colors.red,
  },
  sectionContainerMenu: {
    backgroundColor: colors.red,
    minHeight: 50,
    ...cssConstrains._PH10,
    ...cssConstrains._JC,
  },
  sectionContainerList: {
    backgroundColor: colors.weakWhite,
    minHeight: 60,
    ...cssConstrains._MT10,
    ...cssConstrains._MH10,
    ...cssConstrains._BR5,
    ...cssConstrains._FDR,
    ...cssConstrains._PH10,
    ...cssConstrains._JCSB,
    ...cssConstrains._AIC,
  },
  sectionContainerFooter: {
    height: 100,
    backgroundColor: colors.red,
    ...cssConstrains._AIC,
    ...cssConstrains._JC,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
  },
});

export default App;
