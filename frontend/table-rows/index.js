'use strict';

import template from './table-rows.hbs';
import './table-rows.scss';

export default class TableControllers {
  constructor(data) {
    this.elem = document.createElement('div');
    this.elem.className = 'table-rows';

    this.elem.innerHTML = template(data);
  }
}
