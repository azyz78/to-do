const input = document.querySelector('input')
const addBtn = document.querySelector('button')
const blocks = document.querySelector('.blocks')

let text
input.addEventListener('change', function(e){
    text = e.target.value
})

addBtn.addEventListener('click', function(){
    const todo = document.createElement('h1')
    todo.classList.add('title')
    todo.innerHTML = text

    const btnComplete = document.createElement('button')
    btnComplete.innerHTML = 'Complete'
    
    const btnDelete = document.createElement('button')
    btnDelete.innerHTML = 'Delete'
    

    const container = document.createElement('div')
    container.classList.add('todo-item')

    container.appendChild(todo)
    container.appendChild(btnComplete)
    container.appendChild(btnDelete)
    
    blocks.appendChild(container)

    input.value = ''

    btnDelete.addEventListener('click', function(){
        btnDelete.parentElement.remove()
    })

    btnComplete.addEventListener('click', function(){
        btnComplete.innerHTML = 'Undo'
        todo.style.textDecoration = 'line-through'
    })
})
