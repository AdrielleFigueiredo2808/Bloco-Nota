const notepad = document.getElementById('notepad');
const saveBtn = document.getElementById('saveBtn');

window.onload = () => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    notepad.value = savedNotes;
  }
};

notepad.addEventListener('input', () => {
  localStorage.setItem('notes', notepad.value);
});

saveBtn.addEventListener('click', () => {
  const blob = new Blob([notepad.value], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'nota.txt';
  link.click();
});
