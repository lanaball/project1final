function formSubmitted() {
  const input = document.querySelector('[data-input]').value;
  const li = document.querySelector('[data-text]');
  li.innerHTML = input;
}

function formSubmitted() {
  const text = document.querySelector("[data-input").value;
  const li = document.createElement('li');
  li.textContent = text;
  const ul = document.querySelector('[data-list]');
  ul.appendChild(li)
  document.querySelector("[data-input").value = '';
}