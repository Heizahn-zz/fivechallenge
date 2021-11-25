const themeDark = document.querySelector('.themeButtom');

themeDark.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  if (document.body.className === 'dark-theme') {
    themeDark.innerHTML = `
            <i class="fas fa-sun"></i>
            Light Mode
        `
  } else {
    themeDark.innerHTML = `
            <i class="far fa-moon"></i>
            Dark Mode
        `
  }
})