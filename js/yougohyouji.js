
//他ウィンドウ時のjs

document.addEventListener('DOMContentLoaded', () => {
    const tooltips = document.querySelectorAll('.term');

    tooltips.forEach(tooltip => {
      tooltip.addEventListener('click', function (e) {
        e.stopPropagation(); // 他のクリックを止める
        const isShown = this.classList.contains('show');
        document.querySelectorAll('.tooltip').forEach(t => t.classList.remove('show'));
        if (!isShown) this.classList.add('show');
      });
    });

    // 画面のどこかをタップしたら全て閉じる
    document.addEventListener('click', () => {
      document.querySelectorAll('.term').forEach(t => t.classList.remove('show'));
    });
  });
