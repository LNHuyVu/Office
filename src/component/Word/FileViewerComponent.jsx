/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import FileViewer from "react-file-viewer";

const FileViewerComponent = () => {
  const file = "http://localhost:5173/public/gogo.docx";
  const type = "docx";

  return (
    <div>
      <FileViewer fileType={type} filePath={file} />
    </div>
  );
};

export default FileViewerComponent;
