import React, { useState } from 'react';
import Input from './components/Input'; 
import Button from './components/Button';
import Table from './components/Table';
import './App.css';


function App  () {
  const [inputValue, setInputValue] = useState('');

  function enterText  (value: string) {
    setInputValue(value);
  };

  function clickMe  () {
    alert(`Input value is: ${inputValue}`);
  };

  const columns = [
    { displayName: 'Name', key: 'name' },
    { displayName: 'Age', key: 'age' },
    { displayName: 'Email', key: 'email' },
  ];

  const data = [
    { name: 'Huzaifa', age: 24, email: 'huzaifa@gmail.com' },
    { name: 'Abuzar', age: 23, email: 'abuzar@gmail.com' },
    { name: 'Bilal', age: 23, email: 'bilal@gmail.com' },
  ];

  return (
    <div>
      <h1>Functional Components Via Props</h1>
      <Input
        label="Enter Text:"
        type="text"
        className="input-class"
        placeholder="Type something..."
        change={enterText}
        value={inputValue}
        required={true}
      />
      <Button label="Click Me" click={clickMe} className="btn-class" />
      <h1>My Data Table</h1>
      <Table cols={columns} datasource={data} />
    </div>
  );
};

export default App;
