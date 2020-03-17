import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import * as Sharing from 'expo-sharing';

const ShareView = ({ selectedImage }) => {
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
      return;
    }

    Sharing.shareAsync(selectedImage.remoteUri || selectedImage.localUri);
  };

  return (
  <View style={styles.container}>
    <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />

    <TouchableOpacity onPress={openShareDialogAsync} style={styles.button}>
      <Text style={styles.buttonText}>Share this photo</Text>
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: 'contain'
  }
}
