const navBtn = document.querySelector('#nav-btn');
const listContainer = document.querySelector('.list-container');
const list = document.querySelector('.list');
const navBar = document.querySelector('.nav-container');
const header = document.getElementById('home');
const arrow = document.querySelector('.arrow');
const links = document.querySelectorAll('.items');
const navHeight = navBar.getBoundingClientRect().height;
const date = document.getElementById('date');

date.innerHTML = new Date().getFullYear();

navBtn.addEventListener('click',()=>{
    let containerHeight = listContainer.getBoundingClientRect().height;
    let listHeight = list.getBoundingClientRect().height;
    listContainer.style.height = (containerHeight == 0) ? `${listHeight}px`: 0;
});

window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset;
    if(scrollHeight > navHeight){
        navBar.classList.add('fixed-nav');
        listContainer.style.height = 0;
    }else
        navBar.classList.remove('fixed-nav');
});

window.addEventListener('scroll',()=>{
    const scrollHeight = window.pageYOffset;
    arrow.style.display = (scrollHeight > header.style.height) ? 'block' : 'none';
});

links.forEach((link)=>{
    link.addEventListener('click',(e)=>{
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const item = document.getElementById(id);
        let position = item.offsetTop - navHeight;
        window.scrollTo({left: 0, top: position});
    });
});
