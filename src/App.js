import { useState } from "react";
import { marked } from "marked";
import './App.css';

function App() {
  const [text, setText] = useState(`
  # This is a H1.

  ## This is a H2

  You can also make text **bold**... whoa!

  > Example of a blockquote

  - And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

  \`console.log(''hello, world);\`

  There's also [links](https://www.freecodecamp.org)

  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`

  ![freeCodeCamp Logo](https://cdn.freecodecamp.org)
  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <div id="title">What you type :</div>
      <textarea id="editor" onChange={(event) => {
        setText(event.target.value);
      }}
      value={text}></textarea>
      <div id="title">The output you get :</div>
     <div
        id="preview" 
        dangerouslySetInnerHTML={{
          __html: marked(text),
         }}
      ></div>
    </div>
    
  );
 
}

export default App;
