import React from 'react';
import '../styles/Editor.css';

const Editor = ({ markdown, onChange }) => {
  return (
    <div className="editor-container">
      <h2 className="panel-title">Editor</h2>
      <textarea
        id="editor"
        value={markdown}
        onChange={onChange}
        className="editor"
      />
    </div>
  );
};

export default Editor;