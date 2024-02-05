import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click this ...</Button>
      <Button>... and this</Button>
      <Button>... maybe that?</Button>
      <Button>What about this button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
