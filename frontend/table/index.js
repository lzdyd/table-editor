"use strict";

import getData from "./get-data";
import saveData from "./save-data";

import "./table.scss";

import template from "./table.hbs";

export default class Table {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.className = 'table';

    this.elem.innerHTML = template();

    this.getDataBtn = this.elem.querySelector("#load-data");
    this.saveData = this.elem.querySelector("#save-data");

    this.getDataBtn.onclick = () => {
      this.elem.innerHTML = template(getData());
      let mainTable = this.elem.querySelector("#main-table");
      mainTable.classList.add("active");
    };
    this.saveData.onclick = () => alert("save-data");
  }
}


