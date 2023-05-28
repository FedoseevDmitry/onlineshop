const scrollToTopBtn = document.querySelector(".scroll-btn");
const scrollBreakpoint = 400;

scrollToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
window.onscroll = () => window.scrollY > scrollBreakpoint ? scrollToTopBtn.style.display = 'block' : scrollToTopBtn.style.display = 'none';