
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import Split from 'react-split'

//Components

//CSS
import "../Components_CSS/CodeEditor.css"

//JSON


export const CodeEditor = () => {
  return (
    <div className="CodeEditor">
      <Split
          className="split"
          direction="vertical"
          id="Vertical-Split"
      >
          <div>Upper</div>
          <div>Lower</div>
      </Split>
    </div>
  )
}
