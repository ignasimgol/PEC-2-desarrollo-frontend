import ExpenseService from '../services/expense.services.js';
import { initView, updateValues } from '../views/expense.views.js';

// Controlador para añadir o editar una transacción
export function addTransactionController(e) {
  e.preventDefault();

  const text = document.getElementById('text').value.trim();
  const amount = document.getElementById('amount').value.trim();
  const transactionId = document.getElementById('form').dataset.transactionId; // Obtiene el ID de la transacción a editar

  if (text === '' || amount === '') {
    alert('Please add a text and amount');
  } else {
    if (transactionId) {
      // Actualiza la transacción existente
      const transaction = ExpenseService.getAllTransactions().find(t => t.id === parseInt(transactionId));
      transaction.text = text;
      transaction.amount = parseFloat(amount);
      ExpenseService.updateLocalStorage();
    } else {
      // Crea una nueva transacción
      const transaction = ExpenseService.createTransaction(text, +amount);
      ExpenseService.saveTransaction(transaction);
    }

    initView(); // Actualiza la vista
    document.getElementById('text').value = '';
    document.getElementById('amount').value = '';
    delete document.getElementById('form').dataset.transactionId; // Limpia el ID después de usarlo
  }
}

// Controlador para eliminar una transacción
export function removeTransaction(id) {
  ExpenseService.removeTransaction(id);
  initView();
}

// Controlador para editar una transacción
export function editTransaction(id) {
  const transaction = ExpenseService.getAllTransactions().find(t => t.id === parseInt(id));
  
  if (transaction) {
    // Rellenar el formulario con los valores de la transacción seleccionada
    document.getElementById('text').value = transaction.text;
    document.getElementById('amount').value = transaction.amount;

    // Establecer el ID de la transacción en el formulario
    document.getElementById('form').dataset.transactionId = transaction.id;
  }
}
