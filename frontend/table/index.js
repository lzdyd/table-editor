'use strict';

// TODO: CSS - position: fix TH onscroll

// TODO: bubbling for buttons

// TODO: add row to table
// TODO: delete row from table
// TODO: prevent adding invalid data
// TODO: move renderTableData to separated controller

import TableControllers from '../table-controllers';
import TableRows from '../table-rows';

import getData from './get-data';
import sortData from './sort-data';

export default class Table {
  constructor() {
    let JSONData;

    this.elem = document.createElement('div');
    this.elem.className = 'table';

    const tableControllers = new TableControllers();
    this.elem.appendChild(tableControllers.elem);

    const renderTableData = (data) => {
      JSONData = data || getData();
      const tableRows = new TableRows(JSONData);
      const tableRowsElems = tableRows.elem.querySelectorAll('.table-row');
      const tableRowsArray = Array.from(tableRowsElems);

      const tableRowsContainer = this.elem.querySelector('#main-table');

      // If table is not rendered
      if (!tableRowsContainer.querySelector('.table-row-data')) {
        tableRowsArray.forEach((item) => {
          tableRowsContainer.appendChild(item);
        });
      }

      // If table is rendered
      // If we want to sort it, this code updates HTML instead of re-rendering
      // Decrease this block - work with currentTableRowsData straightly
      if (data) {
        // Get array of objects
        const dataArray = data.people;
        const sortState = data.sortState || null;

        // Creates array of .table-row-data elements to change its HTML
        let currentTableRows = tableRowsContainer.querySelectorAll('.table-row-data');
        currentTableRows = Array.from(currentTableRows);

        // Gets every TR, then gets TR's TD Collection and changes their HTML
        currentTableRows.forEach((item, i) => {
          const currentTableRowsData = Array.from(currentTableRows[i].children);
          const updatedData = Object.keys(dataArray[i]).map((key) => {
            return dataArray[i][key];
          });

          currentTableRowsData.forEach((dataItem, ii) => {
            const currentTableData = dataItem;
            currentTableData.firstChild.data = updatedData[ii];
          });
        });

        this.elem.querySelector(`#${sortState.sortFieldId}`).dataset.sortState = sortState.currentSortState;
      }
    };

    renderTableData.addRow = () => {
      JSONData.people.push({
        name: '',
        age: '',
        city: ''
      });
    };

    // Receives data
    this.getDataBtn = this.elem.querySelector('#load-data');

    this.getDataBtn.onclick = () => {
      renderTableData();
    };

    // Sorts data
    this.sortDataBtns = this.elem.querySelectorAll('.table-header');
    this.sortDataBtnsArray = Array.from(this.sortDataBtns);

    this.sortDataBtnsArray.forEach((item) => {
      item.addEventListener('click', () => {
        const sortedData = sortData(JSONData, item.id, item.dataset.sortState);
        renderTableData(sortedData);
        this.elem.querySelector('#main-table').classList.add('active');
      });
    });

    // Add row
    this.addRowBtn = this.elem.querySelector('#add-row');

    this.addRowBtn.onclick = () => {


      //renderTableData(JSONData);
    };
  }
}
