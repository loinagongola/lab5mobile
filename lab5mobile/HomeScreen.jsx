import React from 'react';
import { Button, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = ({ navigation }) => {
  return (
    <MainLayout>
      <Text>Home Screen</Text>

    <View>
      <Text>This is the Home Screen</Text>
      {/* Button to navigate to the About screen */}
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')} // Navigate to the About screen
      />
    </View>
    </MainLayout>
  );
};

export default HomeScreen;
