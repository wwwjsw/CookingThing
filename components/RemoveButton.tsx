import React from 'react';
import {View, Image} from 'react-native';

export default () => {
  return (
    <View>
      <Image
        width={32}
        height={32}
        source={require('../images/RemoveButton.png')}
      />
    </View>
  );
};
