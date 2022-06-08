// 3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:

const alex = {
    personName: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    personName: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };

  const personLikes = ({personName, age, likes, nationality} ) => `${personName} is ${age} years old and likes ${likes.join(',')}.`;
  
  console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'