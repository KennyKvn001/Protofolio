const mainMenu = document.querySelector('.navicon');
const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.menu-icon');
const menu_items = document.querySelectorAll('.navicon a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    mainMenu.style.right = '0';
    openMenu.style.display = 'none';
}
function close(){
    mainMenu.style.right = '-100%';
    openMenu.style.display = 'block';
}