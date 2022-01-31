const button = document.querySelector('.button');
const button1 = document.querySelector('.button1');
const buttons = document.querySelectorAll('.buttons');
const main = document.querySelector('.main');
const link = document.querySelector('.link');
const fakeLink = document.querySelector('.fake-link');

function handleClick(event) {
    event.stopPropagation();
    console.log('actual element that was clicked',event.target);
    console.log('this element', event.currentTarget)
    event.target.style.color = 'red'
}
//event.target - element was clicked
//event.currentTarget - element where listener was fired

button.addEventListener('click', handleClick); // binding(привязывание к собитию)
button1.addEventListener('click', handleClick);

button.removeEventListener('click', handleClick); //unbinding



buttons.forEach(function(button) {
    button.addEventListener('click', handleClick)
})

main.addEventListener('click', handleClick)

link.addEventListener('click', event => event.preventDefault())

fakeLink.addEventListener('click', () => location.href = "https://google.com")