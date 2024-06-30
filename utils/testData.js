const user = {
    name: 'John Deer',
    gender: 'male',
    email: `john.deer.${Date.now()}@example.com`, //to no repeat the email
    status: 'active',
  };
  
  const userNameEmpty = {
    name: null,
    gender: 'male',
    email: `john.deer.${Date.now()}@example.com`, //to no repeat the email
    status: 'active',
  };

  const userWrongName = {
    name: '3434te',
    gender: 'male',
    email: `john.deer.${Date.now()}@example.com`, //to no repeat the email
    status: 'active',
  };

  const userMailInvalid = {
    name: 'Ramon Perez',
    gender: 'male',
    email: `john.deerexample`,
    status: 'active',
  };

  const userMailRepeated = {
    name: 'Ale Perez',
    gender: 'male',
    email: `ale.perez@test.com`,
    status: 'active',
  };

  const userGenderInvalid = {
    name: 'Ramon Perez',
    gender: '4344',
    email: `ramon.perez.${Date.now()}@example.com`,
    status: 'active',
  };

  const userStatusInvalid = {
    name: 'Ramon Perez',
    gender: 'male',
    email: `ramon.perez.${Date.now()}@example.com`,
    status: '23', //we don't know which type of status is correct
  };

  module.exports = { user, userNameEmpty, userWrongName, userMailInvalid, userMailRepeated, userGenderInvalid, userStatusInvalid };
  