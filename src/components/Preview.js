import React from 'react';
import { marked } from 'marked';
import '../styles/Preview.css';

const Preview = ({ markdown }) => {
  marked.setOptions({
    breaks: true, // Optional bonus for line breaks
  });

  const createMarkup = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="preview-container">
      <h2 className="panel-title">Preview</h2>
      <div
        id="preview"
        dangerouslySetInnerHTML={createMarkup()}
        className="preview"
      />
    </div>
  );
};

export default Preview;