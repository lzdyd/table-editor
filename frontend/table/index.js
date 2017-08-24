'use strict';

// TODO: CSS - fix TH onscroll
// TODO: delete old HTML getDataBtn

import TableControllers from '../table-controllers';
import TableRows from '../table-rows';

import getData from './get-data';

export default class Table {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.className = 'table';

    const tableControllers = new TableControllers();
    this.elem.appendChild(tableControllers.elem);

    this.getDataBtn = this.elem.querySelector('#load-data');

    this.getDataBtn.onclick = () => {
      const tableRows = new TableRows(getData());
      const tableRowsElems = tableRows.elem.querySelectorAll('.table-row');
      const tableRowsArray = Array.prototype.slice.call(tableRowsElems);

      this.tableRowsContainer = this.elem.querySelector('#main-table');
      tableRowsArray.forEach((item) => {
        this.tableRowsContainer.appendChild(item);
      });
    };
  }
}
