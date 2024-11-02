const container = document.querySelector('.container');
const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const listItems = document.querySelectorAll('li');
const year = document.querySelector('.year')

year.innerText = new Date().getFullYear();

openBtn.addEventListener('click', () => {
  container.classList.add('show-nav');
  //   listItems.forEach((item, index) => {
  //     item.style.transitionDelay = `${index * 0.1}s`;
  //   });
});

closeBtn.addEventListener('click', () => {
  container.classList.remove('show-nav');
  //   listItems.forEach((item) => {
  //     item.style.transitionDelay = '0s';
  //   });
});


//可以应用在profolio页面的导航栏上，简洁