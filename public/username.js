const _ = (selector) => document.querySelector(selector);
const $ = (selector) => document.querySelectorAll(selector);

/*
 *  Handle form submission to set the username
 */

let name = '';

_('#user-details').style.display = 'none';
_('#chat-form').style.display = 'none';

const nameForm = _('#name-form');

nameForm.addEventListener('submit', (event) => {
  event.preventDefault();

  name = _('#name-input').value;

  if (name) {
    _('#user-details').style.display = 'block';
    _('#name').innerText = name;
    document.title = 'Chat App ' + name;
    _('#name-input').value = '';
    nameForm.style.display = 'none';
    _('#chat-form').style.display = 'block';
  }
});
