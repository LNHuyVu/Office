/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { fabric } from "fabric";
const DocViewerOffice = () => {
  const [files, setFiles] = useState([
    {
      id: 1,
      uri: "https://res.cloudinary.com/duhwcwwyo/image/upload/v1696999766/VTCode/Test_h6uh2z.jpg",
      fileType: "jpeg",
      fileName: "Test.jpeg",
    },
    {
      id: 2,
      uri: "https://res.cloudinary.com/duhwcwwyo/raw/upload/v1696999766/VTCode/Test_r4czpf.ppt",
      fileType: "ppt",
      fileName: "Test.ppt",
    },

    {
      id: 3,
      uri: "https://res.cloudinary.com/duhwcwwyo/image/upload/v1696999766/VTCode/Test_uyljsg.jpg",
      fileType: "jpg",
      fileName: "Test.jpg",
    },
    {
      id: 4,
      uri: "https://res.cloudinary.com/duhwcwwyo/raw/upload/v1696999766/VTCode/Test_ythxlx.pptx",
      fileType: "pptx",
      fileName: "Test.pptx",
    },
    {
      id: 5,
      uri: "https://res.cloudinary.com/duhwcwwyo/image/upload/v1696999767/VTCode/Test_ltzwaa.png",
      fileType: "png",
      fileName: "Test.png",
    },
    {
      id: 6,
      uri: "https://res.cloudinary.com/duhwcwwyo/raw/upload/v1696999766/VTCode/Test_edjfjz.xlsx",
      fileType: "xlsx",
      fileName: "Test.xlsx",
    },
    {
      id: 7,
      uri: "https://res.cloudinary.com/duhwcwwyo/raw/upload/v1696999765/VTCode/Test_lohi3g.html",
      fileType: "html",
      fileName: "Test.html",
    },
    {
      id: 8,
      uri: "https://res.cloudinary.com/duhwcwwyo/raw/upload/v1696999765/VTCode/Test_ilanwv.xls",
      fileType: "xls",
      fileName: "Test.xls",
    },
    {
      id: 9,
      uri: "https://res.cloudinary.com/duhwcwwyo/raw/upload/v1696999765/VTCode/Test_dms3wo.doc",
      fileType: "doc",
      fileName: "Test.doc",
    },
    {
      id: 10,
      uri: "https://res.cloudinary.com/duhwcwwyo/raw/upload/v1696999765/VTCode/Test_h9a5hy.txt",
      fileType: "txt",
      fileName: "Test.txt",
    },
    {
      id: 11,
      uri: "https://res.cloudinary.com/duhwcwwyo/raw/upload/v1696999765/VTCode/Test_zuinuw.docx",
      fileType: "docx",
      fileName: "Test.docx",
    },
    {
      id: 12,
      uri: "http://localhost:5173/public/na2.pdf",
      fileType: "pdf",
      fileName: "TestNew.pdf",
    },
    {
      id: 13,
      uri: "http://localhost:5173/public/test-doc.docx",
      fileType: "docx",
      fileName: "TestNew.docx",
    },
  ]);
  // const [selected, setSelected] = useState(files[0]);

  // console.log("selected", selected);
  const [doc, setDoc] = useState("");
  const onChangeSelect = (event) => {
    console.log(event.target.value, event.target.checked);
    const id = event.target.value;
    let showFile = files.filter((item) => item.id == id);
    console.log("show", showFile);
    setDoc(showFile);
  };
  const onClick = () => {
    const canvas = new fabric.Canvas("canvas");

    const handleMouseDown = (event) => {
      const { offsetX, offsetY } = event.e;
      const line = new fabric.Line([offsetX, offsetY, offsetX, offsetY], {
        stroke: "black",
        strokeWidth: 2,
      });

      canvas.add(line);
      canvas.on("mouse:move", handleMouseMove);
    };

    const handleMouseMove = (event) => {
      const { offsetX, offsetY } = event.e;
      const line = canvas.getObjects().find((obj) => obj.type === "line");

      if (line) {
        line.set({ x2: offsetX, y2: offsetY });
        canvas.renderAll();
      }
    };

    const handleMouseUp = () => {
      canvas.off("mouse:move", handleMouseMove);
    };

    canvas.on("mouse:down", handleMouseDown);
    canvas.on("mouse:up", handleMouseUp);

    return () => {
      canvas.off("mouse:down", handleMouseDown);
      canvas.off("mouse:up", handleMouseUp);
      canvas.dispose();
    };
  };
  // markup
  return (
    <div style={{ height: 1000 }}>
      <div className="row">
        <div className="col-3 text-start ">
          <div className="bg-light">
            {files.map((item, index) => {
              return (
                <div key={index} className="bg-light d-flex align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id={item.id}
                      onChange={onChangeSelect}
                      value={item.id}
                    />
                    <label className="form-check-label" htmlFor={item.id}>
                      {item.fileName}
                    </label>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-9" style={{ height: 650 }}>
          <button onClick={onClick}>Nút</button>
          {doc ? (
            <DocViewer
              documents={doc}
              pluginRenderers={DocViewerRenderers}
              style={{ height: 750 }}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default DocViewerOffice;
