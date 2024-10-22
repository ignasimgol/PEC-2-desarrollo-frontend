// Función findOne: Busca un elemento en la lista de objetos.
// Recibe como parámetros una lista y un objeto con las propiedades key y value para definir qué buscar.
// Retorna una promesa que resuelve con el elemento encontrado o rechaza con un error.
const findOne = (list, { key, value }) => {
  
    // Retorna una nueva promesa.
    return new Promise((resolve, reject) => {
      
      // Simula una operación asíncrona con setTimeout, retrasando la búsqueda 2 segundos.
      setTimeout(() => {
        
        // Busca el elemento en la lista cuyo valor para la clave dada coincide con el valor proporcionado.
        const element = list.find(element => element[key] === value);
        
        // Si el elemento se encuentra, resuelve la promesa con el elemento.
        // Si no, rechaza la promesa con un mensaje de error.
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
  
  // Función performSearch: Función asíncrona que utiliza findOne con async/await.
  const performSearch = async () => {
    
    try {
      // Mensaje que indica que se va a realizar la búsqueda exitosa.
      console.log('findOne success');
  
      // Usa await para esperar el resultado de la promesa retornada por findOne.
      // Se espera que la promesa se resuelva y el nombre del usuario se muestre en pantalla.
      const user1 = await findOne(users, { key: 'name', value: 'Carlos' });
      console.log(`user: ${user1.name}`);  // Maneja el éxito de la búsqueda.
      
    } catch (error) {
      console.log(error.msg);  // Maneja el caso de error si la promesa falla.
    }
  
    try {
      // Mensaje que indica que se va a realizar la búsqueda que fallará.
      console.log('findOne error');
      
      // Usa await para intentar buscar un usuario que no existe en la lista.
      // Se espera que la promesa sea rechazada y el mensaje de error se maneje en el bloque catch.
      const user2 = await findOne(users, { key: 'name', value: 'Fermin' });
      console.log(`user: ${user2.name}`);  // Maneja el éxito de la búsqueda (no debería llegar aquí en este caso).
  
    } catch (error) {
      console.log(error.msg);  // Maneja el error si no se encuentra el usuario.
    }
  };
  
  // Llamamos a la función performSearch que contiene la lógica para realizar las búsquedas asíncronas.
  performSearch();
  