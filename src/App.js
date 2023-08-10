import React, { useState } from 'react';
import './App.css';
import '../src/components/table.css';

const App = () => {
  const [input, setInput] = useState([
    {
      fullname: '',
      email: '',
      salary: '',
    },
  ]);

  const handleAdd = () => {
    let Row = { fullname: '', email: '', salary: '' };
    let data = [...input, Row];
    setInput(data);
  };

  const handleDelete = (index) => {
    let data = [...input];
    data.splice(index, 1);
    setInput(data);
  };

  const handleInput = (index, e) => {
    let data = [...input];
    data[index][e.target.name] = e.target.value;
    setInput(data);
  };

  return (
    <div className="App">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Add</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {input.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    name="fullname"
                    value={item.fullname}
                    onChange={(e) => handleInput(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="email"
                    value={item.email}
                    onChange={(e) => handleInput(index, e)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="salary"
                    value={item.salary}
                    onChange={(e) => handleInput(index, e)}
                  />
                </td>
                <td>
                  <button onClick={() => handleAdd()}>Add</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
