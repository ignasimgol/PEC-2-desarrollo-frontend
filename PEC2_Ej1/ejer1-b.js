// Función findOne: Busca un elemento en la lista de objetos.
// Recibe como parámetros una lista y un objeto con las propiedades key y value para definir la búsqueda.
// Retorna una promesa con el elemento encontrado o con un error.
const findOne = (list, { key, value }) => {
  
    // Retorna una nueva promesa.
    return new Promise((resolve, reject) => {
      
      // Simula una operación asíncrona con setTimeout, retrasando la búsqueda 2 segundos.
      setTimeout(() => {
        
        // Busca el elemento en la lista cuyo valor para la clave dada coincide con el valor proporcionado.
        const element = list.find(element => element[key] === value);
        
        // Si el elemento se encuentra, resuelve la promesa con el elemento. Si no, rechaza la promesa con un mensaje de error.
        element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
        
      }, 2000);  // Retraso de 2 segundos antes de ejecutar la búsqueda.
    });
  };
  
  // Lista de usuarios con sus roles.
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
  
  // Consumimos la promesa retornada por findOne usando then para manejar el caso exitoso y catch para el error.
  // En caso de éxito, muestra el nombre del usuario encontrado. En caso de error, el mensaje de error.
  findOne(users, { key: 'name', value: 'Carlos' })
    .then(({ name }) => console.log(`user: ${name}`))  // Maneja la resolución de la promesa (onSuccess).
    .catch(({ msg }) => console.log(msg));  // Maneja el rechazo de la promesa (onError).
  
  // Mensaje que indica que se va a realizar la búsqueda que fallará.
  console.log('findOne error');
  
  // Llama a findOne para buscar un usuario con el nombre 'Fermin'. Se espera que no se encuentre el elemento y se maneje con catch.
  findOne(users, { key: 'name', value: 'Fermin' })
    .then(({ name }) => console.log(`user: ${name}`))  // Maneja la resolución de la promesa (onSuccess).
    .catch(({ msg }) => console.log(msg));  // Maneja el rechazo de la promesa (onError).
  