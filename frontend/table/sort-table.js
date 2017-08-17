"use strict";

let sortData = (tableData, sortFieldId) => {
  let arr = tableData['people'];
  let sortField = sortFieldId.split('-')[1];

  let compare = (a, b) => {
    return a[sortField] > b[sortField];
  };

  arr.sort(compare);

  tableData.people = arr;

  return tableData;
};

export default function(tableData, sortFieldId) {
  return sortData(tableData, sortFieldId);
}