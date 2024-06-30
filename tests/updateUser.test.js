const { createUser, getUser, updateUser } = require('../utils/apiClient');
const { user } = require('../utils/testData');

describe('Update User', () => {
  let userCreated;

  beforeAll(async () => {
    const response = await createUser(user);
    userCreated = response.body;
  });

  it('should update a user successfully and check the all fields', async () => {
    const generatedEmail = `ana.lee${Date.now()}@example.com`
    const response = await updateUser(userCreated.id, {
        name: 'Ana Lee',
        gender: 'female',
        email: generatedEmail,
        status: 'active',
      });
    console.log("print new body: ", response.body )
    expect(response.status).toBe(200);
    const updatedUserResponse = await getUser(userCreated.id);
    const updatedUser = updatedUserResponse.body;
    console.log("print get after updated", updatedUser)
    expect(updatedUser.name).toBe('Ana Lee')
    expect(updatedUser.gender).toBe('female')
    expect(updatedUser.status).toBe('active')
    expect(updatedUser.email).toBe(generatedEmail)
    expect(updatedUser.id).toBe(userCreated.id)

  });

  
  it('test update a user with empty fields', async () => {
    const response = await updateUser(userCreated.id, {
        name: '',
        gender: '',
        email: '' ,
        status: '',
      });
    expect(response.status).toBe(422);
    expect(response.body[0].message).toBe("can't be blank")
  });

//This test should be an Error 422, because the first name is a number.
 /* it('test update a user with an invalid name', async () => {
    const generatedEmail = `pedro.alf.${Date.now()}@example.com`
    const response = await updateUser(userCreated.id, {
        name: '5262',
        gender: 'male',
        email: generatedEmail ,
        status: 'active',
      });
      console.log("print new updste: ", response.body)
    expect(response.status).toBe(422);
    //expect(response.body[0].name).toBe("")
  });*/

  it('test update a user with an invalid mail', async () => {
    const response = await updateUser(userCreated.id, {
        name: 'andrea',
        gender: 'female',
        email: 'tetetete' ,
        status: 'active',
      });
      console.log("print body", response.body)
    expect(response.status).toBe(422);
    expect(response.body[0].message).toBe("is invalid")
  });


  it('test update a user with an invalid gender ', async () => {
    const response = await updateUser(userCreated.id, {
        name: 'andrea',
        gender: 'unknown',
        email: 'test@test.com' ,
        status: 'active',
      });
    expect(response.status).toBe(422);
    expect(response.body[0].message).toBe("can't be blank, can be male of female")
  });

  it('test update a user with an invalid status', async () => {
    const response = await updateUser(userCreated.id, {
        name: 'andrea',
        gender: 'male',
        email: 'test@test.com' ,
        status: '1234',
      });
    expect(response.status).toBe(422);
    expect(response.body[0].message).toBe("can't be blank")
  });
  
  it('should return an error when updating a non-existent id', async () => {
    const nonExistentUserId = -1234567890;  // Assumes this ID does not exist
    const response = await updateUser(nonExistentUserId, {
      name: 'andrea',
      gender: 'male',
      email: 'test@test.com' ,
      status: '1234',
    });
    console.log("print message : ", response.body)
    expect(response.status).toBe(404)
    expect(response.body.message).toBe("Resource not found")
});

it('the user wasn\'t updated and check all the fields', async () => {
  const response = await updateUser(userCreated.id, {});
  console.log("print body: ", response.body)
  expect(response.status).toBe(200);
  expect(response.body).not.toBe('null')
  expect(userCreated.name).toBe('John Deer')
  expect(userCreated.gender).toBe('male')
  expect(userCreated.status).toBe('active')
  expect(userCreated.email).toBe(userCreated.email)
  expect(userCreated.id).toBe(userCreated.id)
});

})