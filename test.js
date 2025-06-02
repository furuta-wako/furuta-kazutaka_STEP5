//設問1
const input = document.getElementById('inputText');
const button = document.getElementById('displayButton');
const output = document.getElementById('outputArea');

button.addEventListener('click', () => {
  const text = input.value.trim();

  if (text === '') {
    alert('入力値が空です。');
    return;
  }

  output.textContent = text;
  addToTable(text);
});

// 設問2
const bgColorButton = document.getElementById('bgColorButton');
const colors = ['lightblue', 'lightgreen', 'lightcoral'];
let colorIndex = 0;

bgColorButton.addEventListener('click', function () {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

//設問３
document.getElementById("highlightButton").addEventListener("click", function () {
    const output = document.getElementById("outputArea");
    if (output.style.backgroundColor === "yellow") {
      output.style.backgroundColor = ""; // ハイライトOFF
    } else {
      output.style.backgroundColor = "yellow"; // ハイライトON
    }
  });

  //設問4
const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
let addCount = 0;

function addToTable(text) {
  const newRow = dataTable.insertRow();
  const textCell = newRow.insertCell(0);
  const deleteCell = newRow.insertCell(1);

  // テキスト表示
  textCell.textContent = text;

  // 削除ボタン
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '削除';
  deleteBtn.addEventListener('click', () => {
    dataTable.deleteRow(newRow.rowIndex - 1); 
    if (addCount < 3) {
      displayButton.style.display = 'inline'; 
    }
  });

  deleteCell.appendChild(deleteBtn);

  //カウント
  addCount++;
  if (addCount >= 3) {
    displayButton.style.display = 'none';
  }
}

//設問5,6
function addToTable() {
  const text = input.value.trim();
  if (text === '') {
    alert('入力値が空です。');
    return;
  }

  output.textContent = text;
  input.value = '';

  //行を追加
  const table = document.getElementById('dataTable');
  //4件目以降は古い行を削除
if (table.rows.length >= 3) {
    table.deleteRow(0); 
    addCount--; 
    if (addCount < 3) {
      displayButton.style.display = 'inline-block'; 
    }
  }
  const newRow = table.insertRow();
  const textCell = newRow.insertCell(0);
  const deleteCell = newRow.insertCell(1);

  textCell.textContent = text;

  //削除ボタン
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.addEventListener('click', () => {
    table.deleteRow(newRow.rowIndex);
    addCount--;
    if (addCount < 3) {
      displayButton.style.display = 'inline-block';
    }
  });
  deleteCell.appendChild(deleteButton);

  addCount++;
  if (addCount >= 3) {
    displayButton.style.display = 'none';
  }
}

//設問7
for (let i = 1; i <= 5; i++) {
    console.log(`ループ${i}回目`);
  }
