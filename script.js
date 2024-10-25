const btnContainer = document.getElementById('btn-container');
const dashboard = document.getElementById('dashboard');
const performance = document.getElementById('performance');
const attendance = document.getElementById('attendance');
const tasks = document.getElementById('tasks');
const help = document.getElementById('help');

const sections = [dashboard, attendance, tasks, performance, help];




for (let i = 0; i < btnContainer.children.length; i++) {
    const btn = btnContainer.children[i];
    const section = sections[i]
    btn.addEventListener('click', (e) => {
        Array.from(btnContainer.children).forEach((button, index) => {
            sections[index].classList.add('hidden');
            button.classList.remove('active');
        })
        section.classList.remove('hidden');
        e.target.classList.add('active');
    });
}

