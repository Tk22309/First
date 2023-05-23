function addLeadingZero(d) {
    return (d < 10) ? '0' + d : d;
}
const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Cуббота'];
const monce = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'];


function getUserTime(t = new Date()) {
  let Y = t.getFullYear();
  let M = addLeadingZero(t.getMonth() + 1);
  let mt = monce[t.getMonth()];
  let d = days[t.getDay()];
  let h = addLeadingZero(t.getHours());
  let m = addLeadingZero(t.getMinutes());
  let s = addLeadingZero(t.getSeconds());


  return `${h}:${m}:${s}, ${d}, ${M} ${mt} , ${Y} року `
}

console.log(getUserTime());