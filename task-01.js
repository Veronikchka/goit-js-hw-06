const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
const itemTitle = item.querySelector('h2').textContent;
const itemElements = item.querySelectorAll('li').length;
console.log(`Category: ${itemTitle}`);
console.log(`Elements: ${itemElements}`);
});


//Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
// елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).