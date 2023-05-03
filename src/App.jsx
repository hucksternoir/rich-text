import { useState } from "react";
import "./App.css";
import {
  bold,
  italic,
  title,
  blockquote,
  orderedList,
  unorderedList,
  justifyLeft,
  justifyCenter,
  justifyRight,
  justifyFull,
} from "./functions";

function App() {
  function Container({ children }) {
    return <div id="container">{children}</div>;
  }

  function ButtonFlex({ children }) {
    return <div id="buttonFlex">{children}</div>;
  }

  function ButtonGroup({ children }) {
    return <div className="buttonGroup">{children}</div>;
  }

  function TextArea({ children }) {
    return (
      <div
        contentEditable="true"
        id="textArea"
        placeholder="Enter your text here"
      >
        {children}
      </div>
    );
  }

  return (
    <Container>
      <ButtonFlex>
        <ButtonGroup>
          <button onClick={bold}>
            <i className="bx bx-bold"></i>
          </button>
          <button onClick={italic}>
            <i className="bx bx-italic"></i>
          </button>
          <button onClick={title}>
            <i className="bx bx-text"></i>
          </button>
          <button onClick={blockquote}>
            <i className="bx bxs-quote-left"></i>
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button onClick={justifyLeft}>
            <i className="bx bx-align-left"></i>
          </button>
          <button onClick={justifyCenter}>
            <i className="bx bx-align-middle"></i>
          </button>
          <button onClick={justifyRight}>
            <i className="bx bx-align-right"></i>
          </button>
          <button onClick={justifyFull}>
            <i className="bx bx-align-justify"></i>
          </button>
        </ButtonGroup>
        <ButtonGroup>
          <button onClick={unorderedList}>
            <i class="bx bx-list-ul"></i>
          </button>
          <button onClick={orderedList}>
            <i class="bx bx-list-ol"></i>
          </button>
        </ButtonGroup>
      </ButtonFlex>
      <TextArea></TextArea>
    </Container>
  );
}

export default App;
