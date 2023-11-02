/* eslint-disable no-unused-vars */
import "./App.css";
import Word from "./component/Word/index";
import Excel from "./component/Excel/index";
// import DocViewerOffice from "./component/DocViewer/index";
import DocViewerOffice from "./component/DocViewer/DocViewerOffice";
function App() {
  return (
    <>
      <div>
        {/* <Word /> */}
        {/* <Excel excelFile={xlsxFile} /> */}
        <DocViewerOffice />
      </div>
    </>
  );
}

export default App;
