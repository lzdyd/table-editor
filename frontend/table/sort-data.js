'use strict';

const sortData = (tableData, sortFieldId, sortState) => {
  const data = tableData;
  const arr = tableData.people;
  const sortField = sortFieldId.split('-')[1];

  let currentSortState = sortState;

  const compare = (a, b) => {
    return (sortState === 'ascending') ? a[sortField] < b[sortField] : a[sortField] > b[sortField];
  };

  arr.sort(compare);

  data.people = arr;

  if (currentSortState === 'ascending') {
    currentSortState = 'discending';
  } else {
    currentSortState = 'ascending';
  }

  data.sortState = {
    sortFieldId,
    currentSortState
  };

  return data;
};

export default function(tableData, sortFieldId, sortState) {
  return sortData(tableData, sortFieldId, sortState);
}
