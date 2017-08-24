'use strict';

// TODO: render table dynamically (require.ensure)

import Table from './table';

const table = new Table();

document.body.appendChild(table.elem);
