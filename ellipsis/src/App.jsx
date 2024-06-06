import './App.css';

function App() {
  const texts = [
    "내 비밀은 바로 바지에 똥을 쌌다는 것이다",
    "illy_coffee_ill",
    "llll_coffee_lll",
    "ㄱㄴㄷㄹ_coffee_ㄱㄴㄷ"
  ];

  return (
    <div className="App">
      <header className="App-header">
        {texts.map((text, index) => (
          <div key={index} className="text-ellipsis">{text}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
