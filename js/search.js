let inp = document.querySelector('#inp');
let list = document.querySelector('.list .list-group').querySelectorAll('li');

function filter_list() {
  let re = new RegExp(inp.value, 'i');
  list.forEach((x) => {
    if (re.test(x.textContent)) {
      x.innerHTML = x.textContent.replace(re, '<b>$&</b>');
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  });
}
