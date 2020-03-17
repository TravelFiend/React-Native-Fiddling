import React, { useState } from 'react';
import PickView from './Buttons/PickView';

export default function App() {
  let [selectedImage, setSelectedImage ] = useState(null);

  if(selectedImage){
    return (
      <ShareView selectedImage={selectedImage} />
    );
  }

  return (
    <PickView setSelectedImage={setSelectedImage} />
  );
}
