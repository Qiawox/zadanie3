const todo = {
  action(e) {
    const target = e.target;
    if (target.classList.contains('create')) {
      console.log('123');
      this.add();
      this.save();
    }
  },
  add() {
    const elemText = document.querySelector('.name');
    document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create(elemText.value));
    elemText.value = '';
    const elemDesc = document.querySelector('.desc')
    document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create1(elemDesc.value));
    elemDesc.value = '';
    const elemNumber = document.querySelector('.number');
    document.querySelector('.todo__items').insertAdjacentHTML('beforeend', this.create2(elemNumber.value));
  },
  create(text) {
    return `<li class="todo__item" data-todo-state="active">
    <span class="todo__task">${text}</span></li>`;
  },
  create1(desc) {
    return `<li class="todo__item">
      <span class="todo__task">${desc}</span></li>`;
  },
  create2(number) {
    return `<li class="todo__item">
      <span class="todo__task">${number}</span></li>`;
  },
  init() {
    const fromStorage = localStorage.getItem('todo');
    if (fromStorage) {
      document.querySelector('.todo__items').innerHTML = fromStorage;
    }
  },
  save() {
    localStorage.setItem('todo', document.querySelector('.todo__items').innerHTML);
  }
}
todo.init();