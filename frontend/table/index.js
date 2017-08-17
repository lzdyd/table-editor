'use strict';

// TODO: create new component which handles only editable data to avoid re-rendreing full page (table-rows dir)
// TODO: Save editted table (save-data.js)

import getData from './get-data';
import saveData from './save-data';
import sortTable from './sort-table';

import './table.scss';

import template from './table.hbs';

export default class Table {
  constructor() {
    let tableData;

    this.elem = document.createElement('div');
    this.elem.className = 'table';

    this.elem.innerHTML = template();

    this.getDataBtn = this.elem.querySelector('#load-data');
    this.saveData = this.elem.querySelector('#save-data');

    this.getDataBtn.onclick = () => {
      tableData = getData();
      this.elem.innerHTML = template(tableData);

      addEventListeners(); // Don't get why I need to do so

      const mainTable = this.elem.querySelector('#main-table');
      mainTable.classList.add('active');
    };

    this.saveData.onclick = () => {

    };

    let sortHandler = (sortFieldId) => {
      this.elem.innerHTML = template(sortTable(tableData, sortFieldId));
      addEventListeners();
    };

    let addEventListeners = () => {
      this.sortButtons = this.elem.querySelectorAll('.table-header');

      Array.from(this.sortButtons).forEach(element => {
        element.addEventListener('click', () => {
          sortHandler(element.id); // TODO: bumbling
        });
      });
    };

  }
}
