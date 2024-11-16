const input = document.querySelector('#task-input');
const button = document.querySelector('#task-btn');
const task = document.querySelector('.list-task');

window.addEventListener('load', () => {
    const name = prompt('Hello, May I know your name!')
    if (name.trim() == '') {
        document.getElementById('intro').innerHTML = "Thank you for using my to-do list";
    } else {
        document.getElementById('intro').innerHTML = "Hi " + name + "! Thank you for using my to-do list";
    }
    
})

button.addEventListener('click', () => {
    if (input.value.trim() == '') {
        alert('No item to add..!')
        input.value = '';
    } else {
        task.innerHTML += 
        `
        <div class="list-task-cont">
        <span class="list-task-cont-item">${input.value}</span>
        <button class="remove-btn"><i class="fa-solid fa-trash"></i></button>
        </div>
        `;
        input.value = '';
        

        //delete an item from the list
        const removeBtn = document.querySelectorAll('.remove-btn');
        for (let i = 0; i < removeBtn.length; i++) {
            removeBtn[i].addEventListener('click', () => {
                removeBtn[i].parentElement.remove();
            })
        }

        //mark as done / strike a line-through
        const item = document.querySelectorAll('.list-task-cont-item');
        for(let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', () => {
                item[i].classList.toggle('line-through');
            })
        }



    }
    
})
