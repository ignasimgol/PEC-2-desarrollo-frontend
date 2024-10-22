// Función `findOne`: Busca un elemento en la lista de objetos y retorna una promesa.
const findOne = (list, { key, value }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const element = list.find(element => element[key] === value);
        element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
      }, 2000);
    });
  };
  
  // Lista de usuarios.
  const users = [
    { name: 'Carlos', rol: 'Teacher' },
    { name: 'Ana', rol: 'Boss' }
  ];
  
  // Ejecución en paralelo usando `Promise.all()`
  // Aquí lanzamos las dos llamadas a `findOne` en paralelo y las manejamos juntas.
  Promise.all([
    findOne(users, { key: 'name', value: 'Carlos' }),  // Búsqueda exitosa.
    findOne(users, { key: 'name', value: 'Fermin' })   // Búsqueda que fallará.
  ])
    .then(results => {
      // Cuando ambas promesas se resuelven correctamente.
      results.forEach(user => console.log(`user: ${user.name}`));
    })
    .catch(error => {
      // Si cualquiera de las promesas falla, se maneja el error aquí.
      console.log(error.msg);
    });
  