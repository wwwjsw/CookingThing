import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
interface IAddButtonProps {
  handlePress: () => void;
}

const AddButton = (props: IAddButtonProps) => {
  const {handlePress} = props;

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        width={32}
        height={32}
        source={require('../images/AddButton.png')}
      />
    </TouchableOpacity>
  );
};

export default AddButton;
