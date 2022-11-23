'use strict';

const yearly = document.getElementById('yearly');
const monthly = document.getElementById('monthly');

const low = document.getElementById('low');
const middle = document.getElementById('middle');
const high = document.getElementById('high');

yearly.onclick = () => {
  low.textContent = '$12';
  middle.textContent = '$36';
  high.textContent = '$56';
  yearly.className = 'page__body--btn active-btn';
  monthly.className = 'page__body--btn';
}

monthly.onclick = () => {
  low.textContent = '$19';
  middle.textContent = '$54';
  high.textContent = '$89';
  yearly.className = 'page__body--btn';
  monthly.className = 'page__body--btn active-btn';
}
