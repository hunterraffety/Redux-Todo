// dependencies
import React from 'react';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';

// components
import Form from './components/Form';

// styles
import './App.css';

const App = () => (
  <div className='App'>
    <header className='App-header'>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </header>
  </div>
);

export default App;
