// 把程式碼寫在這檔案裡面

const randomFoods = ['拉麵', '泡麵', '乾麵', '陽春麵', '牛肉麵'];
document.querySelector('.btn__add').addEventListener('click', e => {
  let val = document.querySelector('input').value;
  let div = document.createElement('div');
  div.innerHTML = `<li>${val} <button class='del'>刪除</button></li>`;
  if (val.length > 0) {
    document.querySelector('ol').appendChild(div);
    document.querySelector('input').value = '';
  }
});

document.querySelector('.delete__all').addEventListener('click', e => {
  document.querySelector('ol').innerHTML = '';
});

document.querySelector('ol').addEventListener('click', e => {
  if (e.target.classList.contains('del')) {
    e.target.parentNode.remove();
  }
});

document.querySelector('.luck').addEventListener('click', e => {
  let rand = getRandomInt(5)
  if (rand === 0) {
    val = randomFoods[0]
  }
  if (rand === 1) {
    val = randomFoods[1]
  }
  if (rand === 2) {
    val = randomFoods[2]
  }
  if (rand === 3) {
    val = randomFoods[3]
  }
  if (rand === 4) {
    val = randomFoods[4]
  }
  let div = document.createElement('div');
  div.innerHTML = `<li>${val} <button class='del'>刪除</button></li>`;
  if (val.length > 0) {
    document.querySelector('ol').appendChild(div);
    document.querySelector('input').value = '';
  }
})

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}