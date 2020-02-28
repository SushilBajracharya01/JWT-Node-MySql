import React from 'react';

import './App.css';

const App = ({
  values,
  handleChange
}) => {
  return (
    <div className="App">
      <input type="email" name="email" id="email" placeholder="Email" value={values.email} onChange={handleChange} />
      <input type="password" name="password" id="password" placeholder="******" value={values.password} onChange={handleChange} />
    </div>
  );
}

export default App;
