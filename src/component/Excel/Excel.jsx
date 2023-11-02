/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { OutTable, ExcelRenderer } from "react-excel-renderer";

const Excel = ({ excelFile }) => {
  const renderExcel = () => {
    ExcelRenderer(excelFile, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        const { rows } = resp;
        return <OutTable data={rows} />;
      }
    });
  };

  return <div>{renderExcel()}</div>;
};

export default Excel;
