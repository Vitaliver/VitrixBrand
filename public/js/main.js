// ===== ДАНІ =====
const products = [
  {
    id: 1,
    name: 'PLAN_X',
    tag: '🔥 Хіт',
    shortDesc: '15 помилок планування, які змінюють гру.',
    fullDesc: `
      <p>Я зібрав <strong>15 помилок і фішок планування</strong>, які реально змінили мій підхід до часу за останні 5 років.</p>
      <p>📣 У цьому файлі ти дізнаєшся:</p>
      <ul>
        <li>➕ чому більшість людей планують неправильно</li>
        <li>➕ як перестати втрачати дні, тижні і місяці</li>
        <li>➕ як зробити так, щоб день уже був успішним після 1 задачі</li>
        <li>➕ як прибрати хаос у голові і почати рухатись до своїх цілей</li>
      </ul>
      <p>Це обширний і максимально концентрований матеріал, без води.</p>
      <p>⚠️ Багато людей витрачають роки, щоб зрозуміти ці речі. Ти можеш отримати це за 10 хвилин читання.</p>
    `,
    price: '250 грн',
    image: '📋' // або 'img/plan_x.jpg'
  },
  {
    id: 2,
    name: 'CONTROL_X',
    tag: '⚡ Система',
    shortDesc: 'Як перебудувати звички без боротьби з собою.',
    fullDesc: `
      <p>Я зібрав систему <strong>CONTROL_X</strong>, яка допомагає зрозуміти і перебудувати свої звички так, щоб ти почав діяти стабільно без постійної боротьби з собою.</p>
      <p>🎙 У цьому матеріалі ти зрозумієш:</p>
      <ul>
        <li>✔️ чому твої звички не приживаються і ти постійно повертаєшся до старого</li>
        <li>✔️ як мозок реально приймає рішення і чому ти обираєш не те, що потрібно</li>
        <li>✔️ чому ти починаєш, але не доводиш до результату</li>
        <li>✔️ як прибрати внутрішній опір і зробити дію природною</li>
        <li>✔️ як побудувати систему з 3 правил, яка тримає тебе в русі кожен день</li>
      </ul>
      <p>Проста система, яка змінює твою поведінку через умови, а не через силу волі.</p>
      <p>🚫 Більшість людей роками намагаються “взяти себе в руки”, але причина завжди одна і та сама – неправильна система звичок. Це можна виправити набагато швидше, якщо зрозуміти як це працює насправді.</p>
    `,
    price: '100 грн',
    image: '🎯'
  },
  {
    id: 3,
    name: 'RESET_X',
    tag: '🧠 Відновлення',
    shortDesc: 'Вихід зі стресу та втрати контролю.',
    fullDesc: `
      <p>Я зібрав систему <strong>RESET_X</strong>, яка допомагає вийти зі стану постійного стресу, тривоги і втрати контролю, в якому зараз живе більшість людей.</p>
      <p>🆒 У цьому матеріалі ти зрозумієш:</p>
      <ul>
        <li>➕ чому ти постійно в напрузі навіть коли навколо тихо</li>
        <li>➕ що відбувається з твоєю психікою і тілом під час війни</li>
        <li>➕ чому зникає мотивація і здається, що ти “зламався”</li>
        <li>➕ як повернути відчуття контролю, навіть коли повна невизначеність</li>
        <li>➕ як поступово відновити енергію і нормальний стан</li>
      </ul>
      <p>Це не мотивація і не “поради з інтернету”. Це чітке пояснення + система дій, яку можна одразу застосувати.</p>
      <p>⚠️ Більшість людей роками живуть у цьому стані і не розуміють, що з ними відбувається. Ти можеш розібратись у цьому за короткий час і почати змінювати свій стан.</p>
    `,
    price: '150 грн',
    image: '🧘'
  },
  {
    id: 4,
    name: 'MASK_X',
    tag: '🚀 Скоро',
    shortDesc: 'Новий продукт – стежте за анонсами!',
    fullDesc: `
      <p><strong>MASK_X</strong> – це щось особливе.</p>
      <p>Над цим я працюю прямо зараз, щоб дати тобі максимум цінності.</p>
      <p>✨ Підпишись на Telegram-канал, щоб не пропустити реліз.</p>
    `,
    price: 'Ціна не сформована',
    image: '❓',
    isSoon: true
  }
];

// ===== ВІДГУКИ ПРО ПРОДУКТИ =====
const reviews = [
  {
    name: 'Олена К.',
    date: '15.07.2026',
    stars: 5,
    text: 'PLAN_X – це відкриття! Раніше я постійно планувала, але нічого не встигала. Після прочитання зрозуміла свої помилки, тепер день проходить продуктивніше. Дякую!'
  },
  {
    name: 'Максим Д.',
    date: '10.07.2026',
    stars: 5,
    text: 'CONTROL_X реально змінив моє ставлення до звичок. Перестав боротися з собою, почав діяти через систему. Рекомендую всім, хто хоче стабільних результатів.'
  },
  {
    name: 'Анна В.',
    date: '02.07.2026',
    stars: 4,
    text: 'RESET_X допоміг вийти з тривожного стану. Дуже доступно пояснено, що відбувається з психікою, і головне – дано чіткі кроки для відновлення. Стало легше.'
  },
  {
    name: 'Ігор С.',
    date: '20.06.2026',
    stars: 5,
    text: 'Взяв одразу три продукти – PLAN_X, CONTROL_X, RESET_X. Комплексно змінив підхід до життя. VITRIX – це якісно, без води, супер концентровано.'
  }
];

// ===== РЕНДЕР ПРОДУКТІВ =====
const productsGrid = document.getElementById('productsGrid');

function renderProducts() {
  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card fade-up';
    card.innerHTML = `
      <div class="product-card__image">
        ${p.image && p.image.startsWith('<') ? p.image : `<span style="font-size:64px;">${p.image || '📦'}</span>`}
      </div>
      <div class="product-card__tag ${p.isSoon ? 'soon' : ''}">${p.tag}</div>
      <h3 class="product-card__title">${p.name}</h3>
      <p class="product-card__description">${p.shortDesc}</p>
      <div class="product-card__price ${p.isSoon ? 'soon-price' : ''}">${p.price}</div>
      <button class="product-card__btn" data-id="${p.id}" ${p.isSoon ? 'disabled' : ''}>
        ${p.isSoon ? 'Скоро' : 'Деталі'}
      </button>
    `;
    productsGrid.appendChild(card);
  });

  // Підписка на кнопки "Деталі"
  document.querySelectorAll('.product-card__btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      const product = products.find(p => p.id === id);
      if (product) openModal(product);
    });
  });
}

// ===== РЕНДЕР ВІДГУКІВ =====
const reviewsGrid = document.getElementById('reviewsGrid');

function renderReviews() {
  if (!Array.isArray(reviews) || reviews.length === 0) {
    console.warn('Немає відгуків для відображення');
    return;
  }

  reviews.forEach(r => {
    const card = document.createElement('div');
    card.className = 'review-card fade-up';
    const starsStr = '⭐'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
    card.innerHTML = `
      <div class="review-card__header">
        <div class="review-card__avatar">${r.name[0]}</div>
        <div>
          <div class="review-card__name">${r.name}</div>
          <div class="review-card__date">${r.date}</div>
        </div>
      </div>
      <div class="review-card__stars">${starsStr}</div>
      <p class="review-card__text">${r.text}</p>
    `;
    reviewsGrid.appendChild(card);
  });
}

// ===== МОДАЛКА =====
const modal = document.getElementById('productModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(product) {
  const isSoon = product.isSoon || false;
  modalBody.innerHTML = `
    <h3>${product.name}</h3>
    ${product.fullDesc}
    <div class="price">${product.price}</div>
    <button class="modal__order-btn" ${isSoon ? 'disabled' : ''}>
      ${isSoon ? '🚀 Скоро' : '📲 Замовити в Telegram'}
    </button>
  `;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (!isSoon) {
    const orderBtn = modalBody.querySelector('.modal__order-btn');
    orderBtn.addEventListener('click', () => {
      window.open('https://t.me/your_username', '_blank');
    });
  }
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ===== АНІМАЦІЯ ПРИ СКРОЛІ =====
function initScrollAnimations() {
  const elements = document.querySelectorAll('.fade-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -30px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// ===== ЗАПУСК =====
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderReviews();
  initScrollAnimations();

  // Додаємо клас fade-up для елементів, які вже є в HTML
  document.querySelectorAll('.about__inner, .reviews__telegram').forEach(el => {
    if (!el.classList.contains('fade-up')) el.classList.add('fade-up');
  });
  // Повторна ініціалізація для нових елементів
  setTimeout(initScrollAnimations, 150);
});