const todo = {
    //   main() {

    // //   this.save();
    // // },




    action(e) {
        const target = e.target;
        if (target.classList.contains('todo__action')) {
            const action = target.dataset.todoAction;
            const elemItem = target.closest('.todo__item');

            if (action === 'deleted' && elemItem.dataset.todoState === 'deleted') {
                elemItem.remove();
            } else {
                elemItem.dataset.todoState = action;
            }
            this.save();
        } else if (target.classList.contains('create')) {
            console.log('rrr');
            this.add();
            this.save();
        } else if (target.classList.contains('save')) {
            console.log('rrr');
            this.add();
            this.save();
        }
    },
    add() {
        const elemDesc = document.querySelector('.rrr');
        const divik = document.createElement('div');
        divik.classList.add('divik');
        const spic = document.createElement('li');
            spic.insertAdjacentHTML('beforeend', this.create1(elemDesc.value));
            const elemNumber = document.querySelector('.number');
            spic.insertAdjacentHTML('beforeend', this.create2(elemNumber.value));
            const elemText = document.querySelector('.name');
            divik.insertAdjacentHTML('afterbegin', this.create(elemText.value));
            elemText.value = '';
            divik.appendChild(spic);
            document.querySelector('.result').appendChild(divik);
            divik.insertAdjacentHTML('beforeend', this.create3());
            const desc = document.querySelector('.rrr').value;
            const number = document.querySelector('.number').value;
            const object = {
                desc: desc,
                number: number
            }
            localStorage.setItem('value', JSON.stringify(object));

            document.querySelector('.bl').style.display = 'none';
            console.log('win2');
            localStorage.setItem('todo', document.querySelector('.result').innerHTML);
            document.querySelector('.bl').setAttribute('data-todo-state', 'off');
    },
    create(text) {
        return `<span class="todo__task"><b class="t1">${text}</b></span><br>`;
    },
    create1(desc) {
        return `<span class="t2">${desc}`;
    },
    create2(number) {
        return `<span> - <p class="t3">${number}</p>h</span><br><br>`;
    },
    create3() {
        return `<button class="bts" onclick="click1(event)">Load</button>
        <button class="bts1" onclick="Delete(event)">Delete</button>`;
    },
    init() {
        const fromStorage = localStorage.getItem('todo');
        if (fromStorage) {
            document.querySelector('.result').innerHTML = fromStorage;
        }
        // document.querySelector('.todo__options').addEventListener('change', this.update);
        document.addEventListener('click', this.action.bind(this));
    },
    update() {
        const option = document.querySelector('.todo__options').value;
        document.querySelector('.todo__items').dataset.todoOption = option;
        document.querySelector('.todo__text').disabled = option !== 'active';
    },
    save() {
        localStorage.setItem('todo', document.querySelector('.result').innerHTML);
    }
}
$("button.mmm").on('click', function() {
    localStorage.clear();
    document.querySelector('.todo__items').innerHTML = '';
})

todo.init();