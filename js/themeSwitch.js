const checkbox = document.querySelector(".theme-switch__checkbox");
const theme = document.querySelector("#theme-link");

checkbox.addEventListener("click", () => {
  if (theme.getAttribute("href") == "style/style-black.css") theme.href = "";
  else theme.href = "style/style-black.css";
});