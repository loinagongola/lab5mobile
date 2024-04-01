import React from 'react';
import { StyleSheet, View } from 'react-native';
import Footer from './Footer'; // Import Footer component

const MainLayout = ({ children }) => {
	return (
		<View style={styles.container}>
			{/* Header component */}
			<Header />
			{children}
			{/* Footer component */}
			<Footer />
		</View>
	);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MainLayout;
