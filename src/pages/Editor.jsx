import React from "react";
import {
  HtmlEditor,
  Image,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-richtexteditor";
import { Header } from "../components";

const Editor = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Editor" category="App" />
      <RichTextEditorComponent>
        <Inject services={[Toolbar, Link, Image, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
