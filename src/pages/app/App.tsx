import React from 'react';
import Productor from "../../components/productor"
import Cart from "../../components/cart"
import { inject, observer } from "mobx-react"
import './App.css';

interface IProps {
  app?: any
}

const App: React.FC<IProps> = (props) => {
  const { app: store } = props
  // type count = Number
  // const [count, setCount] = useState(1)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <p>{store.count}</p>
      <button onClick={() => { store.sub() }}>减</button>
      <button onClick={() => { store.pub() }}>加</button>
      <div>
        <h2>shopping Cart Example</h2>
        <hr />
        <Productor />
        <hr />
        <Cart />
      </div>
    </div>
  );
}

export default (inject('app')(observer(App)));
