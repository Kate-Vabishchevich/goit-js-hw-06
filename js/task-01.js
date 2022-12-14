// HTML містить список категорій ul#categories.

// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).


const categoryEl = document.querySelectorAll('#categories > .item');
console.log('Number of categories:', categoryEl.length);

// category.forEach((element) => {
//     console.log('Category: ', element.querySelector('h2').textContent);
//     console.log('Elements: ', element.querySelectorAll('li').length)
// });

categoryEl.forEach(sorting);

function sorting(category) {
    const categoryTitle = category.firstElementChild;
    console.log('Category: ',categoryTitle.textContent);
    
    const categoryEl = categoryTitle.nextElementSibling;
    console.log('Elements: ',categoryEl.children.length);
}