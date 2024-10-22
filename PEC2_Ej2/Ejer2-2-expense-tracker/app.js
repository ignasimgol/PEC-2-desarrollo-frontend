import { addTransactionController } from './controllers/expense.controllers.js';
import { initView } from './views/expense.views.js';

// Añadir el evento al formulario
document.getElementById('form').addEventListener('submit', addTransactionController);

// Inicializar la vista al cargar la página
initView();