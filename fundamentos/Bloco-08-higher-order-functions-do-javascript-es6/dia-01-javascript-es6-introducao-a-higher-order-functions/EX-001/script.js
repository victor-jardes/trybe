const newEmployees = (newName) => {
    const employess = {
        id1: newName('Pedro Guerra'),
        id2: newName('Luiza Drumond'),
        id3: newName('Carla Paiva'),
    }
    return employess
}

const newName = (fullName) => {
    const email = `${fullName.toLowerCase().split(' ').join('_')}`
    return {fullName, email: `${email}@trybe.com`}
}
console.log(newEmployees(newName))