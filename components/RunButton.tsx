import React from 'react';
import {View, Image} from 'react-native';

export default () => {
  return (
    <View>
      <Image
        width={48}
        height={48}
        source={require('../images/RunButton.png')}
      />
    </View>
  );
};
