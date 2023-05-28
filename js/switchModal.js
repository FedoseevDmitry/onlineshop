const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__btn');

modalCloseBtn.addEventListener("click", () => {
  modal.style.display = 'none';
});

const showBuyModal = () => {
  modal.style.display = 'flex';
}