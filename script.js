// 創建星星的函數
function createStars() {
  const numberOfStars = 100; // 可以調整星星的數量
  const body = document.body;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`; // 隨機生成X坐標
    star.style.top = `${Math.random() * 100}vh`;  // 隨機生成Y坐標
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // 隨機閃爍速度

    body.appendChild(star);
  }
}

// 在頁面載入時創建星星
window.onload = createStars;
