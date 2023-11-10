let inputElement = document.getElementById('input-field');
let addBtn = document.querySelector('.btn-add');
let ulElement = document.querySelector('.ul-list');

addBtn.addEventListener('click', function () {
    let value = inputElement.value.trim();

    if (value !== '') {
        let li = document.createElement('li');
        
      
        let deleteIcon = document.createElement('img');
        deleteIcon.setAttribute('src', 'js/sasa.svg'); 
        deleteIcon.setAttribute('alt', ''); 
        
        
        let deleteBtn = document.createElement('button');
        deleteBtn.appendChild(deleteIcon);
        
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });
        
        li.textContent = value;
        li.appendChild(deleteBtn);
        ulElement.appendChild(li);
        inputElement.value = '';
    }
});
