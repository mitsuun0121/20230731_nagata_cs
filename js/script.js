//トップへ戻るボタン
function scrollTop() {
  const target = document.getElementById('button');
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
scrollTop('button');

//モダールウインドウ
const openBtn = document.getElementById('openBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (!e.target.closest('.modal__content') && e.target.id !== "openBtn") {
    modal.style.display = 'none';
  }
});

//ハンバーガーメニュー
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  nav.classList.toggle('show');
});  

//ドロワーメニュー
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});