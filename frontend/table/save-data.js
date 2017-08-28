const saveData = (html) => {
  const newJSONData = {
    people: []
  };

  for (let i = 0; i < html.length; i++) {
    const tableCellData = html[i].querySelectorAll('.table-cell-data');
    newJSONData.people.push({});

    for (let j = 0; j < tableCellData.length; j++) {
      const key = tableCellData[j].classList[2].split('-')[2];
      const keyValue = tableCellData[j].firstChild.data;
      newJSONData.people[i][key] = keyValue;
    }
  }

  return newJSONData;
};

export default function(html) {
  return saveData(html);
};
