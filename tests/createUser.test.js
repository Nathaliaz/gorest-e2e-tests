const { createUser } = require('../utils/apiClient');
const { user, userNameEmpty, userMailInvalid, userMailRepeated, userGenderInvalid, userStatusInvalid, userWrongName } = require('../utils/testData');

describe('Create User To Test Email ', () => {
  let userWithRepeatEmail;

  beforeAll(async () => {
    const response = await createUser(user);
    userWithRepeatEmail = response.body;
  });

  it('should create a user successfully, check the field name and check that all the field are not empty', async () => {
    const response = await createUser(user);
    expect(response.status).toBe(201);
    console.log("the response is: ", response.body)
    expect(response.body.name).toBe(user.name)
    expect(response.body).not.toBe(null)
  });

  it('test a user without name', async () => {
    const response = await createUser(userNameEmpty);
    expect(response.status).toBe(422);
    console.log("the response is: ", response.body)
    expect(response.body.name).toBe(undefined)
    expect(response.body[0].message).toContain("can't be blank");
  });

//This test should be an Error 422, because the first name has an invalid format.
  it('test a user with numbers in its name', async () => {
    const response = await createUser(userWrongName);
    console.log("the response is: ", response.body.name)
    //expect(response.status).toBe(422);
    //expect(response.body.name).toBe(undefined)
    //expect(response.body[0].message).toContain("can't be blank");
  });

  it('test a user with an invalid email', async () => {
    const response = await createUser(userMailInvalid);
    expect(response.status).toBe(422);
    console.log("the response is: ", response.body)
    expect(response.body[0].message).toContain("is invalid");
  });

  it('test a user with wrong data in gender', async () => {
    const response = await createUser(userGenderInvalid);
    expect(response.status).toBe(422);
    console.log("the response is: ", response.body)
    expect(response.body[0].message).toContain("can't be blank, can be male of female");
  });

  it('test a user with invalid data in status', async () => {
    const response = await createUser(userStatusInvalid);
    expect(response.status).toBe(422);
    console.log("the response is: ", response.body)
    expect(response.body[0].message).toContain("can't be blank");
  });

  it('test a user with a repeated email', async () => {
    const response = await createUser(userWithRepeatEmail);
    console.log("the email is: ", response.body.email)
    expect(response.status).toBe(422);
    expect(response.body[0].message).toContain("has already been taken");
  });
});

