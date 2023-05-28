const formatDate = (dateString) => {
  const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = [
    "Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", 
    "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
  ];
  const [day, month, year] = dateString.split('.').map(Number);
  const date = new Date(year, month - 1, day);
  const dayNumber = date.getDay();
  const weekNumber = Math.ceil(day / 7);
  return `${days[dayNumber]}, ${weekNumber} неделя ${months[month - 1]} ${year} года`;
}

const fetchData = async () => {
  try {
    const response = await fetch('../db/items.json');
    const data = await response.json();
    renderData(data);
  } catch (error) {
    console.log('Error:', error);
  }
}

const renderData = data => {
  const container = document.querySelector('#catalog-container');
  container.innerHTML = '';

  data.forEach(category => {
    const categoryBlock = `
      <article class="catalog__category category" id="${category.categoryId}">
        <h2 class="category__title">${category.categoryName}</h2>
        <ul class="category__list">
          ${category.items
            .map(item => `
              <li class="category__card card">
                <figure class="card__image-block">
                  <img class="card__img" src="${item.image}" alt="${item.description}">
                  <figcaption class="card__description">${item.description}</figcaption>
                </figure>
                <div class="card__wrapper">
                  <p class="card__date">${formatDate(item.date)}</p>
                  <button class="card__btn" onclick="showBuyModal()">Купить</button>
                </div>
              </li>
            `)
            .join('')}
        </ul>
      </article>
    `;

    container.innerHTML += categoryBlock;
  });
}

fetchData();
