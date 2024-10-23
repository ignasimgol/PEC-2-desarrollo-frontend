function entryCalculator(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }

  const prices = {
    Adult: 49.99,
    Child: 20.99,
    Senior: 24.99
  };

  const total = Object.keys(entrants).reduce((sum, group) => {
    return sum + entrants[group] * prices[group];
  }, 0);

  return parseFloat(total.toFixed(2));
}


const hours = {
  Tuesday: { open: 8, close: 18 },
  Wednesday: { open: 8, close: 18 },
  Thursday: { open: 10, close: 20 },
  Friday: { open: 10, close: 20 },
  Saturday: { open: 8, close: 22 },
  Sunday: { open: 8, close: 20 },
  Monday: { open: 0, close: 0 }
};

function schedule(dayName) {
  const readableSchedule = {};

  // Función para convertir horas de 24h a 12h con am/pm
  function formatHour(hour) {
    if (hour === 0) return 'CLOSED'; // Maneja el caso en que el zoo está cerrado
    const suffix = hour >= 12 ? 'pm' : 'am';
    const formattedHour = hour > 12 ? hour - 12 : hour;
    return `${formattedHour}${suffix}`;
  }

  // Crear un horario legible
  Object.keys(hours).forEach(day => {
    const { open, close } = hours[day];
    readableSchedule[day] = (open === 0 && close === 0)
      ? 'CLOSED'
      : `Open from ${formatHour(open)} until ${formatHour(close)}`;
  });

  // Si se pasa un día específico, devolver solo ese día
  if (dayName) {
    return { [dayName]: readableSchedule[dayName] };
  }

  // Si no se pasa ningún día, devolver el horario completo
  return readableSchedule;
}

module.exports = { schedule };



const data = require('./data');
const animals = data.animals;

function animalCount(species) {
  if (species) {
    return animals.find(animal => animal.name === species).residents.length;
  }

  return animals.reduce((acc, animal) => {
    acc[animal.name] = animal.residents.length;
    return acc;
  }, {});
}


function animalMap(options = {}) {
  const locations = ['NE', 'NW', 'SE', 'SW'];

  return locations.reduce((acc, location) => {
    acc[location] = animals
      .filter(animal => animal.location === location)
      .map(animal => {
        if (options.includeNames) {
          const residents = animal.residents.filter(resident =>
            options.sex ? resident.sex === options.sex : true
          ).map(resident => resident.name);
          return { [animal.name]: residents };
        }
        return animal.name;
      });
    return acc;
  }, {});
}


function animalPopularity(rating) {
  const popularityMap = animals.reduce((acc, animal) => {
    const pop = animal.popularity;
    if (!acc[pop]) {
      acc[pop] = [];
    }
    acc[pop].push(animal.name);
    return acc;
  }, {});

  return rating ? popularityMap[rating] || [] : popularityMap;
}

function animalsByIds(...ids) {
  if (ids.length === 0) return [];
  return animals.filter(animal => ids.includes(animal.id));
}

function animalByName(animalName) {
  if (!animalName) return {};
  for (const animal of animals) {
    const resident = animal.residents.find(res => res.name === animalName);
    if (resident) {
      return { ...resident, species: animal.name };
    }
  }
  return {};
}

function employeesByIds(...ids) {
  if (ids.length === 0) return [];
  return this.employees.filter(employee => ids.includes(employee.id));
}

function animalsByIds(...ids) {
  if (ids.length === 0) return [];
  
  // Si ids[0] es un array (como en la tercera prueba), aplanamos el array
  const flatIds = Array.isArray(ids[0]) ? ids[0] : ids;

  return animals.filter(animal => flatIds.includes(animal.id));
}

function employeeByName(employeeName) {
  if (!employeeName) return {};
  return data.employees.find(employee => 
    employee.firstName === employeeName || employee.lastName === employeeName) || {};
}

function managersForEmployee(idOrName) {
  const employee = data.employees.find(emp => 
    emp.id === idOrName || emp.firstName === idOrName || emp.lastName === idOrName);
  
  if (!employee) return {};

  return {
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    managers: employee.managers.map(managerId => {
      const manager = data.employees.find(emp => emp.id === managerId);
      return `${manager.firstName} ${manager.lastName}`;
    }),
    responsibleFor: employee.responsibleFor
  };
}


function employeeCoverage(idOrName) {
  const employee = idOrName 
    ? data.employees.find(emp => 
        emp.id === idOrName || emp.firstName === idOrName || emp.lastName === idOrName)
    : null;

  const employees = employee ? [employee] : data.employees;

  return employees.reduce((acc, emp) => {
    acc[`${emp.firstName} ${emp.lastName}`] = emp.responsibleFor.map(animalId =>
      animals.find(animal => animal.id === animalId).name);
    return acc;
  }, {});
}


module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
