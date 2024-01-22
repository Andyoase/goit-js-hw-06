const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');

console.log(`Număr total de categorii: ${categoryItems.length}`);

categoryItems.forEach((categoryItem, index) => {
  const categoryTitle = categoryItem.querySelector('h2').textContent;
  const subItems = categoryItem.querySelectorAll('ul > li');
  console.log(`Categorie ${index + 1}: ${categoryTitle}`);
  console.log(`Număr de elemente: ${subItems.length}`);
  subItems.forEach((subItem, subIndex) => {
    console.log(`  Element ${subIndex + 1}: ${subItem.textContent}`);
  });
  console.log('\n');
});