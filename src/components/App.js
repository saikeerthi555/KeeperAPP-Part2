import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

function createNotes(noteItem) {
  return (
    <Note
      key={noteItem.key}
      title={noteItem.title}
      Content={noteItem.content}
    />
  );
}
function App() {
  return (
    <div>
      <Header />
      {notes.map(createNotes)}
      <Footer />
    </div>
  );
}

export default App;
