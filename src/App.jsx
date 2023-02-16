import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import uuid from "react-uuid";
import {BrowserRouter as  Router,
  Routes,
  Route,
  Link,
  Navigate
  } from 'react-router-dom'
import Reg from './components/Reg';
import Log from './components/Log';
import Basket from './components/Basket';

function App() {

  let initProducts = [
    {id:id(), name:'Тимур обычный', price: 50, description: 'Тимур обычный, всем нравится', num:0},
    {id:id(), name:'Тимур лесной', price: 75, description: 'Тимур отвратительный, бээээ', num:0},
    {id:id(), name:'Тимур черный', price: 60, description: 'Тимур черноватый', num:0},
    {id:id(), name:'Тимур кокосовый', price: 100, description: 'Он реально кокс ТИМУУУР', num:0}
  ]

  let [products, setProduct] = useState(initProducts)

  function id() {
    return uuid()
  }

  let initAccounts = [
    {id:1, name: 'Timur', age:10, pass: '123123', basket: []},
    {id:2, name: 'Amir',age:1010, age:10, pass: '123123', basket: []},
    {id:3, name: 'Sasha',age:16, age:10, pass: '123123', basket: []}
  ]
  const [accounts, setAccounts] = useState(initAccounts)
  const [user, setUser] = useState(null)


    return <Router>
      <header>
        <nav>
          <ul>
            {user !== null ? <><li><button onClick={() => setUser(null)}>Выйти</button></li> <li><Link to='Basket'>Корзина</Link></li></> : <><li><Link to='reg'>Регистрация</Link></li>
            <li><Link to='log'>Войти</Link></li></>}
          </ul>
        </nav> 
      </header>
      <Routes>
        <Route path='/' element={<Home user={user} initProducts={products} setUser={(copy) => setUser(copy)} />} />
        <Route path='reg' element={user ? <Navigate to="/" replace /> :  <Reg accounts={accounts} user={user} setUser={(copy) => setUser(copy)} setAccounts={(copy) => setAccounts(copy)}/>} />
        <Route path='log' element={user ? <Navigate to="/" replace /> :  <Log accounts={accounts} user={user} setUser={(copy) => setUser(copy)} setAccounts={(copy) => setAccounts(copy)}/>} />
        <Route path='basket'element={!user ? <Navigate to="/" replace /> : <Basket user={user} initProducts={products} setUser={(copy) => setUser(copy)} setProducts={setProduct}/>} />
      </Routes>
    </Router>  
}
export default App;
