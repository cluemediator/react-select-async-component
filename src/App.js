import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

function App() {
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  }

  // load options using API call
  const loadOptions = (inputValue) => {
    return fetch(`http://jsonplaceholder.typicode.com/posts?userId=${inputValue}`).then(res => res.json());
  };

  return (
    <div className="App">
      <h3>React-Select Async Dropdown - <a href="https://www.cluemediator.com/" target="_blank">Clue Mediator</a></h3>
      <pre>Input Value: "{inputValue}"</pre>
      <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.title}
        getOptionValue={e => e.id}
        loadOptions={loadOptions}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      <pre>Selected Value: {JSON.stringify(selectedValue || {}, null, 2)}</pre>
    </div>
  );
}

export default App;
