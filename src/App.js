import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('ボタンがクリックされました！');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>こんにちは、訪問介護アプリへようこそ！</h1>
        <p>これは自分で作って公開したReactアプリです。</p>

        {/* 👇 ここが新しく追加する部分 */}
        <button onClick={handleClick}>クリックしてメッセージ表示</button>
        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
