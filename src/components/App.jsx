import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";
function getEmoji(Emoji) {
  return (
    <Entry
      key={Emoji.id}
      emoji={Emoji.emoji}
      name={Emoji.name}
      meaning={Emoji.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(getEmoji)}</dl>
    </div>
  );
}

export default App;
