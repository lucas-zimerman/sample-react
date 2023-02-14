import React from 'react';
import './App.css';

let initialList = [
  {
    id: 1,
    photo: 'ionic.png',
    name: 'Robin',
  },
];


function App() {
  const [state] = React.useState(99);
  const [list, setList] = React.useState(initialList);

  React.useEffect(() => {
    async function test() {
      try {
        await fetch('/testing');
      } catch {}
    }

    test();

    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={`/logo${state}.png`} alt="" />
        <h1>Our cool React app</h1>
      </header>
      <img src="http://localhost:3000/ionic.png" height="100" width="300"/>

      <grid>
        {list.map((item) =>
              <img height="200" width="300" src={item.photo}/>
        )}
      </grid>

      <form>
        <div>
          <label>Email:</label>
          <input type="email" name="email" placehodler="email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" placehodler="password" />
        </div>
        <div>
          <label>Secret:</label>
          <input
            type="email"
            name="email"
            placehodler="email"
            className="sr-ignore"
          />
        </div>

        <div className="sr-block">
          <p>Secret Block</p>
        </div>
      </form>

      <button
        onClick={() => {
          throw new Error('Example Error');
        }}
      >
        Break Me
      </button>
      <button
        onClick={() => {
          const newList = list.concat({id:initialList.length + 1, photo:'http://localhost:3000/ionic.png', name:'bob'});

          setList(newList);
        }}
      >
        Add Me
      </button>
      <base href="http://localhost/"/>  

    </div>
  );
}

export default App;
