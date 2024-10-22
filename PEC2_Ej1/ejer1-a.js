// Función `findOne`: Busca un elemento en la lista de objetos.
// Recibe como parámetros una lista, un objeto con las propiedades key y value para definir qué buscar, y un objeto con dos callbacks onSuccess y onError.
const findOne = (list, { key, value }, { onSuccess, onError }) => {

    // Simula una operación asíncrona con setTimeout, retrasando la búsqueda 2 segundos.
    setTimeout(() => {
  
      // Busca el elemento en la lista cuyo valor coincide con el valor que se dá.
      const element = list.find(element => element[key] === value);
  
      // Si el elemento se encuentra, ejecuta el callback `onSuccess`.
      // Si no se encuentra, se ejecuta el callback `onError`.
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000);  // Retraso de 2 segundos antes de ejecutar la búsqueda.
  };
  
  // Callback onSuccess: Se ejecuta cuando se encuentra el elemento.
  // Muestra el nombre del usuario encontrado.
  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  
  // Callback onError: Se ejecuta cuando no se encuentra el elemento.
  // Muestra un mensaje de error.
  const onError = ({ msg }) => console.log(msg);
  
  // Lista de usuarios y sus roles.
  const users = [
    {
      name: 'Carlos',
      rol: 'Teacher'
    },
    {
      name: 'Ana',
      rol: 'Boss'
    }
  ];
  
  // Mensaje que indica que se va a realizar la búsqueda exitosa.
  console.log('findOne success');
  
  // Llama a la función findOne para buscar un usuario con el nombre Carlos.
  // Se espera que se encuentre el elemento y se ejecute el callback onSuccess.
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
  
  // Mensaje que indica que se va a realizar la búsqueda que fallará.
  console.log('findOne error');
  
  // Llama a la función findOne para buscar un usuario con el nombre Fermin.
  // Se espera que no se encuentre el elemento y se ejecute el callback onError.
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
  