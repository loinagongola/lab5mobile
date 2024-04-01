import React from 'react';
import { Button, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = ({ navigation }) => {
  return (
    <MainLayout> {/* Wrap content with MainLayout */}
    <View>
      <Text>This is the About Screen</Text>
      {/* Button to navigate back to the Home screen */}
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')} // Navigate back to the Home screen
      />
    </View>
    </MainLayout>
  );
};

export default AboutScreen;
