const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    alert('Veuillez saisir une tâche.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Supprimer';

  deleteBtn.addEventListener('click', () => {
    li.style.animation = 'fadeOutLeft 0.5s forwards';
    li.addEventListener('animationend', () => {
      taskList.removeChild(li);
    });
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // forcer le recalcul du style pour déclencher l'animation (reflow)
  void li.offsetWidth;
  li.style.animation = 'fadeInUp 0.5s forwards';

  taskInput.value = '';
  taskInput.focus();
}

taskInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    addTask();
  }
});
