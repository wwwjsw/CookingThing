import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

interface IRemoveButtonProps {
  handlePress: () => void;
}

const RemoveButton = (props: IRemoveButtonProps) => {
  const {handlePress} = props;

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        width={32}
        height={32}
        source={require('../images/RemoveButton.png')}
      />
    </TouchableOpacity>
  );
};

export default RemoveButton;
