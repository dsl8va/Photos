import React, {useState} from 'react';

const App = () => {
  const [photos, setPhotos] = useState([]);

  return (
    <div>
      <div>
        Image 1
      </div>
      <div>
        Image 2
      </div>
      <div>
        Image 3
      </div>
    </div>
  )
}

export default App;