// Desenvolva sua lógica aqui
const button = document.querySelector('.main__add')
const main = document.querySelector('main')

button.addEventListener('click', () => {
    const input = document.querySelector('#task')
    const ul = document.createElement('ul')
    ul.classList.add("main__list")
    const li = document.createElement('li')
    const excluir = document.createElement('button')
    li.innerText = input.value
    main.append(ul, li, excluir)
})

