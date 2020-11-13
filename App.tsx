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

declare const global: {HermesInternal: null | {}};

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
            <View style={{...styles.sectionContainerList, backgroundColor: colors.weakBlue}}>
              <AddButton />
              <Text style={{...constrains._F1, ...constrains._MH10}}>
                Describe Your Food
              </Text>
              <Text>0 Min</Text>
            </View>
            {mock.map((i) => {
              return (
                <View key={i.id} style={styles.sectionContainerList}>
                  <RemoveButton />
                  <Text style={{...constrains._F1, ...constrains._MH10}}>
                    {i.description}
                  </Text>
                  <Text>{i.time}</Text>
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

const AddButton = () => {
  return (
    <View>
      <Image
        width={32}
        height={32}
        source={require('./images/AddButton.png')}
      />
    </View>
  );
};

const RemoveButton = () => {
  return (
    <View>
      <Image
        width={32}
        height={32}
        source={require('./images/RemoveButton.png')}
      />
    </View>
  );
};

const RunButton = () => {
  return (
    <View>
      <Image
        width={48}
        height={48}
        source={require('./images/RunButton.png')}
      />
    </View>
  );
};

const colors = {
  black: '#2F2F2F',
  weakBrown: 'rgba(126, 96, 96, 0.2)',
  gray: '#EEEEEE',
  white: '#FFFFFF',
  blue: '#43B1EF',
  weakBlue: '#99CCE9',
};

const constrains = StyleSheet.create({
  /**
   * Align Items Center
   */
  _AIC: {
    alignItems: 'center',
  },
  /**
   * Justify content in center!
   */
  _JC: {
    justifyContent: 'center',
  },
  /**
   * Justify content in space between!
   */
  _JCSB: {
    justifyContent: 'space-between',
  },
  /**
   * Flex 1
   */
  _F1: {
    flex: 1,
  },
  /**
   * Flex Direction Row
   */
  _FDR: {
    flexDirection: 'row',
  },
  /**
   * Height of 100%
   */
  _H100: {
    height: '100%',
  },
  /**
   * Top left and right border radius with 25
   */
  _BRT25: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  /**
   * Border Radius 5
   */
  _BR5: {
    borderRadius: 5,
  },
  /**
   * Margin Horizontal 10
   */
  _MH10: {
    marginHorizontal: 10,
  },
  /**
   * Margin Top 10
   */
  _MT10: {
    marginTop: 10,
  },
  /**
   * Padding 25
   */
  _P25: {
    padding: 25,
  },
  /**
   * Padding Bottom 10
   */
  _PB10: {
    paddingBottom: 10,
  },
  /**
   * Padding Horizontal 10
   */
  _PH10: {
    paddingHorizontal: 10,
  },
});

const styles = StyleSheet.create({
  safeArea: {
    ...constrains._H100,
    backgroundColor: colors.black,
  },
  scrollView: {
    backgroundColor: colors.gray,
  },
  body: {
    ...constrains._PB10,
    backgroundColor: colors.gray,
  },
  sectionContainerMenu: {
    backgroundColor: colors.black,
    minHeight: 50,
    ...constrains._PH10,
    ...constrains._JC,
  },
  sectionContainerList: {
    backgroundColor: colors.weakBrown,
    minHeight: 60,
    ...constrains._MT10,
    ...constrains._MH10,
    ...constrains._BR5,
    ...constrains._FDR,
    ...constrains._PH10,
    ...constrains._JCSB,
    ...constrains._AIC,
  },
  sectionContainerFooter: {
    height: 100,
    backgroundColor: colors.black,
    ...constrains._BRT25,
    ...constrains._AIC,
    ...constrains._JC,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.white,
  },
});

export default App;
