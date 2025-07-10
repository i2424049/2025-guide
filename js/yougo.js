document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const cards = document.querySelectorAll('.term-card');

  searchInput.addEventListener('input', () => {
    const keyword = searchInput.value.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      const isMatch = text.includes(keyword);
      card.style.display = isMatch ? 'block' : 'none';
    });
  });
});

const termList = document.getElementById('termList');
const sortToggle = document.getElementById('sortToggle');
let isAscending = true;

sortToggle.addEventListener('click', () => {
  const sortedCards = Array.from(termList.querySelectorAll('.card')).sort((a, b) => {
    const titleA = a.querySelector('.card-title').innerText;
    const titleB = b.querySelector('.card-title').innerText;
    return isAscending
      ? titleA.localeCompare(titleB, 'ja')
      : titleB.localeCompare(titleA, 'ja');
  });

  // 一度全部削除して並べ直す
  termList.innerHTML = '';
  sortedCards.forEach(card => termList.appendChild(card));

  // ボタンのテキストを更新
  isAscending = !isAscending;
  sortToggle.textContent = isAscending ? '昇順で並び替え' : '降順で並び替え';
});
