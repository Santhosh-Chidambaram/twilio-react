import React from 'react';
import './App.css';
import AppChat from './AppChat';
import ChatApp from './ChatUI';
import VideoChat from './VideoChat';
import '@progress/kendo-theme-material/dist/all.css';

const App = () => {
  return (
    <div className="app">

      <main>
        <VideoChat />
        {/* <AppChat /> */}
      </main>
  
    </div>
  );
};

export default App;
