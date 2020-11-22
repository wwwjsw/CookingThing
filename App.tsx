/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
} from 'react-native';
import _, {toInteger} from 'lodash';

import cssConstrains from './constrains/Css.constrains';
import AddButton from './components/AddButton';
import RemoveButton from './components/RemoveButton';
import RunButton from './components/RunButton';

interface IItem {
  id: number;
  description: string;
  time: number;
}

const App = () => {
  const [items, setItems] = useState<Array<IItem>>([]);
  const [description, setDescription] = useState('Egg 🥚');
  const [time, setTime] = useState(0);

  const _findMaxTimeInItens = () => {
    const maxDate = _(items).map('time').flatten().max();
    return maxDate;
  };

  const _startTimer = () => {
    // TODO: Agendar Alarme para cada item.
    // TODO: Achar o maior tempo entre os itens.
    const max = _findMaxTimeInItens();
    console.warn(max);
    // TODO: Iniciar timer.
    // TODO: Definir started = true.
  };

  const _newItem = () => {
    const data: IItem = {
      id: Math.random() * 2,
      description: description,
      time: time,
    };

    const newData = items?.concat(data);

    setItems(newData);
  };

  const _removeItem = (id: number) => {
    const filteredItems = items.filter(function (value) {
      return value.id !== id;
    });
    setItems(filteredItems);
  };

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
              <TextInput
                selectTextOnFocus
                style={{
                  ...cssConstrains._F1,
                  ...cssConstrains._MH10,
                  color: colors.white,
                }}
                onChangeText={(text) => setDescription(text)}
                value={description}
              />
              <TextInput
                selectTextOnFocus
                style={{
                  ...cssConstrains._MH10,
                  color: colors.white,
                }}
                onChangeText={(minutes) => setTime(toInteger(minutes))}
                value={time.toString()}
                keyboardType="numeric"
              />
              <Image
                style={{...cssConstrains._MR10}}
                source={require('./images/clock.png')}
              />
              <AddButton handlePress={() => _newItem()} />
            </View>
            {items.map((i) => {
              return (
                <View key={i.id} style={styles.sectionContainerList}>
                  <Text
                    style={{
                      ...cssConstrains._F1,
                      ...cssConstrains._MH10,
                      color: colors.black,
                    }}>
                    {i.description}
                  </Text>
                  <Text style={{...cssConstrains._MR10}}>{i.time}</Text>
                  <Image
                    style={{...cssConstrains._MR10}}
                    source={require('./images/clock.png')}
                  />
                  <RemoveButton handlePress={() => _removeItem(i.id)} />
                </View>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.sectionContainerFooter}>
          <RunButton handlePress={() => _startTimer()} />
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
