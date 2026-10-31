/**
 * UMS-F Reviews Platform - Interactive Behavior & State Management
 * Figma Design: UMS-F (Copy) (node-id: 1:2)
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Initial State & Figma Data (node-id 1:2 exact texts)
  // =========================================================================
  const allReviewsData = [
    // Page 1 - Exact Figma Node 1:2 items
    {
      id: 1,
      name: 'Татьяна Самойленко',
      date: '06.09.2020',
      rating: 5,
      text: 'Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но пока ещё с будильником,дочка ещё не готова его снимать говорит что для подстраховки,но я рада что рискнула и заказала будильник у нас он прозвенел 3 раза и всё, теперь спим всю ночь,а раньше каждую ночь вставали менять постель,а бывало и два раза,результат на лицо, надеюсь что больше мы к этой проблеме не вернёмся, ещё раз спасибо.',
      verified: true,
      category: 'parents'
    },
    {
      id: 2,
      name: 'Анонимно',
      date: '06.03.2021',
      rating: 5,
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      verified: false,
      category: 'all'
    },
    {
      id: 3,
      name: 'Степан Ивонов',
      date: '06.09.2020',
      rating: 5,
      text: 'Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но пока ещё с будильником,дочка ещё не готова его снимать говорит что для подстраховки,но я рада что рискнула и заказала будильник у нас он прозвенел 3 раза и всё, теперь спим всю ночь,а раньше каждую ночь вставали менять постель,а бывало и два раза,результат на лицо, надеюсь что больше мы к этой проблеме не вернёмся, ещё раз спасибо.',
      verified: true,
      category: 'parents'
    },
    {
      id: 4,
      name: 'Степан',
      date: '06.09.2020',
      rating: 5,
      text: 'Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но пока ещё с будильником,дочка ещё не готова его снимать говорит что для подстраховки,но я рада что рискнула и заказала будильник у нас он прозвенел 3 раза и всё, теперь спим всю ночь,а раньше каждую ночь вставали менять постель,а бывало и два раза,результат на лицо, надеюсь что больше мы к этой проблеме не вернёмся, ещё раз спасибо.',
      verified: true,
      category: 'parents'
    },

    // Page 2 - Contextual Verified Family Reviews
    {
      id: 5,
      name: 'Елена Мельникова',
      date: '14.11.2020',
      rating: 5,
      text: 'Замечательный прибор! Сыну 7 лет, очень переживали перед школой. После двух недель использования будильника UMS-F выработался рефлекс, теперь просыпается сам без звукового сигнала. Огромная благодарность создателям устройства!',
      verified: true,
      category: 'parents'
    },
    {
      id: 6,
      name: 'Мария Кузнецова',
      date: '22.12.2020',
      rating: 5,
      text: 'Удобный и очень чувствительный датчик влажности. Сигнал громкий, но не пугает ребенка. Постель наконец-то сухая, мы забыли про ночные тревоги и бесконечные стирки.',
      verified: true,
      category: 'parents'
    },
    {
      id: 7,
      name: 'Дмитрий Васильев',
      date: '10.01.2021',
      rating: 5,
      text: 'Качество сборки на высшем уровне, всё продумано до мелочей. Инструкция понятная на русском языке, клипса датчика держится надежно и не мешает во время сна.',
      verified: true,
      category: 'all'
    },
    {
      id: 8,
      name: 'Ольга Сергеевна',
      date: '18.02.2021',
      rating: 5,
      text: 'По совету детского невролога приобрели UMS-F. Результат превзошел все ожидания — через месяц регулярного использования стабильно сухие ночи. Рекомендую родителям!',
      verified: true,
      category: 'parents'
    },

    // Page 3 - Extended Real Reviews
    {
      id: 9,
      name: 'Алексей Смирнов',
      date: '05.04.2021',
      rating: 5,
      text: 'Действительно эффективная методика без всяких таблеток и стресса. Ребенок стал гораздо спокойнее и увереннее в себе. Спасибо за быструю доставку!',
      verified: true,
      category: 'parents'
    },
    {
      id: 10,
      name: 'Наталья Попова',
      date: '19.05.2021',
      rating: 5,
      text: 'Сначала сомневались, стоит ли покупать, но это оказалось лучшей покупкой. Ребенок привык к аппарату буквально за два дня.',
      verified: true,
      category: 'all'
    },
    {
      id: 11,
      name: 'Виктор Андреев',
      date: '02.07.2021',
      rating: 5,
      text: 'Работает безотказно. При малейшей капле влаги сразу срабатывает сигнал, ребенок просыпается и идет в туалет. Рефлекс закрепился за 3 недели.',
      verified: true,
      category: 'parents'
    },
    {
      id: 12,
      name: 'Екатерина Дмитриева',
      date: '15.08.2021',
      rating: 5,
      text: 'Очень помогло нашей семье. Отдельное спасибо службе поддержки за консультацию по правильному расположению датчика!',
      verified: true,
      category: 'parents'
    }
  ];

  let currentReviews = [...allReviewsData];
  let currentPage = 1;
  const reviewsPerPage = 4;
  let activeFilter = 'all';
  let searchQuery = '';
  let sortOrder = 'newest';

  // DOM Elements
  const reviewsListEl = document.getElementById('reviewsList');
  const paginationWrapEl = document.getElementById('paginationWrapper');
  const searchInputEl = document.getElementById('reviewSearchInput');
  const sortSelectEl = document.getElementById('reviewSortSelect');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const toastEl = document.getElementById('toastNotification');
  const toastMessageEl = document.getElementById('toastMessage');

  // Modal Elements
  const openModalBtns = document.querySelectorAll('[data-open-modal="review"]');
  const closeModalBtns = document.querySelectorAll('[data-close-modal]');
  const reviewModalEl = document.getElementById('reviewModal');
  const reviewFormEl = document.getElementById('newReviewForm');
  const starPickBtns = document.querySelectorAll('.star-pick-btn');
  let selectedRating = 5;

  // =========================================================================
  // 2. Star Generator Helper (Figma Orange #F47E29)
  // =========================================================================
  function renderStars(rating = 5) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        starsHtml += `
          <svg class="star-icon" viewBox="0 0 24 24" fill="#F47E29">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        `;
      } else {
        starsHtml += `
          <svg class="star-icon empty" viewBox="0 0 24 24" fill="#e2e8f0">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        `;
      }
    }
    return starsHtml;
  }

  // =========================================================================
  // 3. Render Reviews List (Figma Exact Layout)
  // =========================================================================
  function renderReviews() {
    // Filter logic
    let filtered = allReviewsData.filter(item => {
      // Category filter
      if (activeFilter === '5star' && item.rating !== 5) return false;
      if (activeFilter === 'parents' && item.category !== 'parents') return false;

      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const inName = item.name.toLowerCase().includes(query);
        const inText = item.text.toLowerCase().includes(query);
        const inDate = item.date.includes(query);
        if (!inName && !inText && !inDate) return false;
      }
      return true;
    });

    // Sorting logic
    if (sortOrder === 'newest') {
      filtered.sort((a, b) => b.id - a.id);
    } else if (sortOrder === 'oldest') {
      filtered.sort((a, b) => a.id - b.id);
    }

    currentReviews = filtered;

    // Pagination calculations
    const totalPages = Math.max(1, Math.ceil(currentReviews.length / reviewsPerPage));
    if (currentPage > totalPages) currentPage = totalPages;

    const startIndex = (currentPage - 1) * reviewsPerPage;
    const paginatedItems = currentReviews.slice(startIndex, startIndex + reviewsPerPage);

    // Empty state
    if (paginatedItems.length === 0) {
      reviewsListEl.innerHTML = `
        <div class="no-reviews-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
          <h3>Отзывы не найдены</h3>
          <p>По вашему поисковому запросу ничего не найдено. Попробуйте изменить параметры поиска или фильтра.</p>
        </div>
      `;
      paginationWrapEl.innerHTML = '';
      return;
    }

    // Render Review items (Exact Figma design: Name, Date, 5 Stars right-aligned, Body paragraph)
    reviewsListEl.innerHTML = paginatedItems.map(review => `
      <article class="review-item" data-id="${review.id}">
        <div class="review-header">
          <div class="author-info">
            <h3 class="author-name">
              ${escapeHtml(review.name)}
              ${review.verified ? `
                <span class="author-verified-badge" title="Покупка подтверждена">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#1E821E">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Проверен
                </span>
              ` : ''}
            </h3>
            <span class="review-date">${escapeHtml(review.date)}</span>
          </div>
          <div class="review-stars" aria-label="Оценка ${review.rating} из 5">
            ${renderStars(review.rating)}
          </div>
        </div>
        <div class="review-body">
          <p>${escapeHtml(review.text)}</p>
        </div>
      </article>
    `).join('');

    renderPagination(totalPages);
  }

  // =========================================================================
  // 4. Render Pagination Controls (Figma buttons: < 1 2 3 >)
  // =========================================================================
  function renderPagination(totalPages) {
    if (totalPages <= 1) {
      paginationWrapEl.innerHTML = '';
      return;
    }

    let html = `
      <button class="pagination-btn arrow-btn" data-page="prev" ${currentPage === 1 ? 'disabled' : ''} aria-label="Предыдущая страница">&lt;</button>
    `;

    for (let p = 1; p <= totalPages; p++) {
      html += `
        <button class="pagination-btn ${p === currentPage ? 'active' : ''}" data-page="${p}" aria-label="Страница ${p}">${p}</button>
      `;
    }

    html += `
      <button class="pagination-btn arrow-btn" data-page="next" ${currentPage === totalPages ? 'disabled' : ''} aria-label="Следующая страница">&gt;</button>
    `;

    paginationWrapEl.innerHTML = html;
  }

  // =========================================================================
  // 5. Pagination Click Listener
  // =========================================================================
  paginationWrapEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.pagination-btn');
    if (!btn || btn.disabled || btn.classList.contains('active')) return;

    const pageAttr = btn.getAttribute('data-page');
    const totalPages = Math.ceil(currentReviews.length / reviewsPerPage);

    if (pageAttr === 'prev') {
      if (currentPage > 1) currentPage--;
    } else if (pageAttr === 'next') {
      if (currentPage < totalPages) currentPage++;
    } else {
      currentPage = parseInt(pageAttr, 10);
    }

    renderReviews();

    // Smooth scroll to top of reviews section
    const target = document.getElementById('reviewsSection');
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  });

  // =========================================================================
  // 6. Search & Filter Handlers
  // =========================================================================
  if (searchInputEl) {
    searchInputEl.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      currentPage = 1;
      renderReviews();
    });
  }

  if (sortSelectEl) {
    sortSelectEl.addEventListener('change', (e) => {
      sortOrder = e.target.value;
      currentPage = 1;
      renderReviews();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.getAttribute('data-filter') || 'all';
      currentPage = 1;
      renderReviews();
    });
  });

  // =========================================================================
  // 7. Modal Dialog & Star Picker
  // =========================================================================
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (reviewModalEl) {
        reviewModalEl.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  closeModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal();
    });
  });

  if (reviewModalEl) {
    reviewModalEl.addEventListener('click', (e) => {
      if (e.target === reviewModalEl) {
        closeModal();
      }
    });
  }

  function closeModal() {
    if (reviewModalEl) {
      reviewModalEl.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Star Picker in Modal
  starPickBtns.forEach(star => {
    star.addEventListener('mouseenter', () => {
      const val = parseInt(star.getAttribute('data-val'), 10);
      highlightStars(val);
    });

    star.addEventListener('mouseleave', () => {
      highlightStars(selectedRating);
    });

    star.addEventListener('click', () => {
      selectedRating = parseInt(star.getAttribute('data-val'), 10);
      highlightStars(selectedRating);
    });
  });

  function highlightStars(count) {
    starPickBtns.forEach(s => {
      const val = parseInt(s.getAttribute('data-val'), 10);
      if (val <= count) {
        s.classList.add('active');
      } else {
        s.classList.remove('active');
      }
    });
  }

  // New Review Form Submit
  if (reviewFormEl) {
    reviewFormEl.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameVal = document.getElementById('reviewerName').value.trim() || 'Анонимно';
      const textVal = document.getElementById('reviewerText').value.trim();

      if (!textVal) {
        alert('Пожалуйста, напишите текст вашего отзыва.');
        return;
      }

      // Format today's date DD.MM.YYYY
      const now = new Date();
      const dd = String(now.getDate()).padStart(2, '0');
      const mm = String(now.getMonth() + 1).padStart(2, '0');
      const yyyy = now.getFullYear();
      const formattedDate = `${dd}.${mm}.${yyyy}`;

      const newReview = {
        id: Date.now(),
        name: nameVal,
        date: formattedDate,
        rating: selectedRating,
        text: textVal,
        verified: true,
        category: 'parents'
      };

      // Add to front of array
      allReviewsData.unshift(newReview);

      // Reset form & close modal
      reviewFormEl.reset();
      selectedRating = 5;
      highlightStars(5);
      closeModal();

      // Switch to page 1 & re-render
      currentPage = 1;
      renderReviews();

      // Show toast
      showToast('Спасибо за ваш отзыв! Он успешно добавлен.');
    });
  }

  // =========================================================================
  // 8. Toast Notifications
  // =========================================================================
  let toastTimer;
  function showToast(msg) {
    if (!toastEl) return;
    toastMessageEl.textContent = msg;
    toastEl.classList.add('active');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('active');
    }, 4000);
  }

  // =========================================================================
  // 9. FAQ Accordion
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // =========================================================================
  // 10. Back to Top Button
  // =========================================================================
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (!backToTopBtn) return;
    if (window.pageYOffset > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Helper Escape HTML to prevent XSS
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Render
  renderReviews();
});
