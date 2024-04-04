import {TextInput, View} from 'react-native';
import styles from './ContentInput.style';
import Buton from '../../Button/Button';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
const ContentInput = ({visible, onClose, onSend}) => {
  const [text, setText] = useState(null);

  const handleSend = () => {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  };
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwideComplate={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Eş hadi milleti..."
            onChangeText={setText}
            multiline
          />
        </View>
        <Buton text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentInput;
