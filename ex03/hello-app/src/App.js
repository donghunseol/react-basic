import './App.css';
import React from 'react';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Body2 from './components/Body2.js';
import Post from './components/Post.js';

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Body2 username={"ssar"} password={"1234"} />
      <Post />
    </div>
  );
}

export default App;