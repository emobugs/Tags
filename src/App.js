import "./App.css";
import Tags from "./Tags";
import React, { useState } from "react";


function App() {
  const [tags, mapTags] = useState(["boomdotdev", "task", "tags", "react"]);
  //   // console.log(tags);
  //   // tags.map((tag) => {
  //   //   return `#${tag}`;
  //   // });
  // };

  return (
    <div className="App">
      <Tags tags={tags}/>
    </div>
  );
}

export default App;
