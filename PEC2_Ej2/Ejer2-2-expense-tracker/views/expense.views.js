import ExpenseService from '../services/expense.services.js';
import { removeTransaction, editTransaction } from '../controllers/expense.controllers.js';  // Asegúrate de importar editTransaction

// Elementos del DOM
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');

// Actualizar los valores de la vista
export function updateValues() {
  const transactions = ExpenseService.getAllTransactions();
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  ).toFixed(2);

  balance.innerText = `$${total}`;
  money_plus.innerText = `$${income}`;
  money_minus.innerText = `$${expense}`;
}

// Añadir una transacción al DOM
export function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');

  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  item.innerHTML = `
    ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="edit-btn" data-id="${transaction.id}">✏️</button>
    <button class="delete-btn" data-id="${transaction.id}">x</button>
  `;

  list.appendChild(item);
}

// Event delegation para detectar qué transacción eliminar o editar
list.addEventListener('click', function (e) {
  const id = e.target.getAttribute('data-id');
  if (e.target.classList.contains('delete-btn')) {
    removeTransaction(id);
  } else if (e.target.classList.contains('edit-btn')) {
    editTransaction(id); // Llama a la función editTransaction
  }
});

// Inicializar la vista
export function initView() {
  list.innerHTML = '';
  const transactions = ExpenseService.getAllTransactions();
  transactions.forEach(addTransactionDOM);
  updateValues();
}
