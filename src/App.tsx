import React from 'react';

import { PhotoList } from 'containers';

function App() {
  return (
    <>
      <header>
        <h1>사진 피드 리스트</h1>
      </header>

      <div className="container">
        <PhotoList />
      </div>
    </>
  );
}

export default App;
