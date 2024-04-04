import {FlatList, Text, View} from 'react-native';
import styles from './Messages.style';
import FloatingButton from '../../components/FloatingButton';
import React, {useState, useEffect} from 'react';

import ContentInput from '../../components/Modal/ContentInput';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/MessageCard';

const Messages = () => {
  const [inputModelVisible, setInputModelVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  const handleSendContent = content => {
    handleInputToggle();
    sendContent(content);
  };

  const sendContent = content => {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
    };
    database().ref('messages/').push(contentObject);
  };

  const handleInputToggle = () => {
    setInputModelVisible(!inputModelVisible);
  };

  const renderContent = ({item}) => <MessageCard message={item} />;
  return (
    <View style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />

      <FloatingButton text="+" onPress={handleInputToggle} />
      <ContentInput
        visible={inputModelVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      />
    </View>
  );
};

export default Messages;
