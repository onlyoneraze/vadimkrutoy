import './App.css';
import Likes from './Likes';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./cat.jpg" alt="surfing" style={{width: '300px', alignSelf: 'center'}}/>
            <Likes store={store} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
