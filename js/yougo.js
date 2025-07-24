document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.term-card');

  // 🔍 検索機能
  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();
    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      const isMatch = text.includes(keyword);
      card.style.display = isMatch ? 'block' : 'none';
    });
  });

  // 🔃 並び替え機能
  const termList = document.getElementById('termList');
  const sortToggle = document.getElementById('sortToggle');
  let isAscending = true;

  if (sortToggle && termList) {
    sortToggle.addEventListener('click', () => {
      const sortedCards = Array.from(termList.querySelectorAll('.card')).sort((a, b) => {
        const titleA = a.querySelector('.card-title').innerText;
        const titleB = b.querySelector('.card-title').innerText;
        return isAscending
          ? titleA.localeCompare(titleB, 'ja')
          : titleB.localeCompare(titleA, 'ja');
      });

      termList.innerHTML = '';
      sortedCards.forEach(card => termList.appendChild(card));

      isAscending = !isAscending;
      sortToggle.textContent = isAscending ? '昇順で並び替え' : '降順で並び替え';
    });
  }

  // 📘 用語クリックで説明表示
  document.querySelectorAll('.term').forEach(term => {
    term.addEventListener('click', function (e) {
      document.querySelectorAll('.term.active').forEach(el => {
        if (el !== term) el.classList.remove('active');
      });

      term.classList.toggle('active');
      e.stopPropagation();
    });
  });

  // 🧹 外部クリックで閉じる
  document.addEventListener('click', () => {
    document.querySelectorAll('.term.active').forEach(el => el.classList.remove('active'));
  });
});
