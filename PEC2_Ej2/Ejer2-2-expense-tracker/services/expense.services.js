import Transaction from '../models/expense.models.js';

const ExpenseService = {
  transactions: JSON.parse(localStorage.getItem('transactions')) || [],

  // Crear una nueva transacción
  createTransaction(text, amount) {
    const id = Math.floor(Math.random() * 100000000); // Genera un ID único
    return new Transaction(id, text, amount);
  },

  // Guardar transacción en localStorage
  saveTransaction(transaction) {
    this.transactions.push(transaction);
    this.updateLocalStorage();
  },

  // Eliminar transacción por ID
  removeTransaction(id) {
    this.transactions = this.transactions.filter(transaction => transaction.id !== parseInt(id)); // Asegúrate de convertir id a número
    this.updateLocalStorage();
  },

  // Obtener todas las transacciones
  getAllTransactions() {
    return this.transactions;
  },

  // Actualizar localStorage
  updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }
};

export default ExpenseService;

