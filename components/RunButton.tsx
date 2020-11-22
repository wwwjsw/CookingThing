import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

interface IRunButton {
  handlePress: () => void;
}
const RunButon = (props: IRunButton) => {
  const {handlePress} = props;

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        width={48}
        height={48}
        source={require('../images/RunButton.png')}
      />
    </TouchableOpacity>
  );
};

export default RunButon;
