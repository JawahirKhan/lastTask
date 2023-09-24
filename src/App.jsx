import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState(['', '', '', '', '', '']);
  const  [mergedText, setMergedText] = useState();

  const handleInputChange = (e, index) => {
    const newText = [...inputText];
    newText[index] = e.target.value;
    setInputText(newText);
  };

  const submit = () => {
    setMergedText(inputText.join('')); // Merge text with spaces
    console.log(mergedText); // You can do something with the merged text here
  };

  return (
    <div>
      {inputText.map((text, index) => (
        <input
          key={index}
          type="text"
          value={text}
          onChange={(e) => handleInputChange(e, index)}
        />
      ))}
      <button onClick={submit}>Submit</button>
      <p>{mergedText}</p>
    </div>
  );
};

export default App;
