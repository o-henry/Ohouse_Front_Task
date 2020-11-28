import React, { lazy, Suspense } from 'react';

const PhotoList = lazy(() => import('containers/PhotoList/photo.list'));

function App() {
  return (
    <>
      <Suspense fallback="Loading ...">
        <div className="container">
          <PhotoList />
        </div>
      </Suspense>
    </>
  );
}

export default App;
