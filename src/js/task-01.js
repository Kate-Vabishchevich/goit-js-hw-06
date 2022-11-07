const category = document.querySelectorAll('#categories > .item');
console.log('Number of categories:', category.length);

// const categoryTitle = document.querySelector('.h2');
// console.log(categoryTitle);

category.forEach((element) => {
    console.log('Category: ', element.querySelector('h2').textContent);
    console.log('Elements: ', element.querySelectorAll('li').length)
});