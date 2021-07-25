// api url: https://jsonplaceholder.typicode.com/users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => {
    if (resp.status >= 200 && resp.status < 400) return resp.json();
  })
  .then(datas =>{
    let div = document.createElement('div')
    for (data of datas) {
      div.innerHTML += `<li>${data.name} / ${data.company.name} / ${data.email} <button class='delete'>刪除</button></li>`
    }
    document.querySelector('ol').appendChild(div)
    document.querySelector('ol').addEventListener('click', e => {
      if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove()
      }
    })
  });
