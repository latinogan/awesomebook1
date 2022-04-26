import { DateTime } from './luxon.js';

export default function timenow() {
  const time = DateTime.now();
  document.querySelector('.date').innerHTML = time.toLocaleString(DateTime.DATETIME_MED);
}
setInterval(timenow, 1000);