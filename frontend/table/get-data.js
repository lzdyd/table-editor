'use strict';

// TODO: create custom error handler

let obj;
const getData = new XMLHttpRequest();

getData.open('GET', '../data.json');

getData.onload = () => {
  if (getData.status >= 200 && getData.status < 400) {
    obj = JSON.parse(getData.responseText);
  } else {
    throw new Error('Something went wrong');
  }
};

getData.onerror = () => {
  console.log('Connection error');
};

getData.send();

export default function() {
  return obj;
}
