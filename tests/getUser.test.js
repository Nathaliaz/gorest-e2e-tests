const { createUser, getUser } = require('../utils/apiClient');
const { user } = require('../utils/testData');

describe('Get User', () => {
  let userOk;

  beforeAll(async () => {
    const response = await createUser(user);
    userOk = response.body;
  });

  it('should get a user successfully and check all fields', async () => {
    const response = await getUser(userOk.id);
    expect(response.status).toBe(200);
    console.log("body is : ", userOk)
    console.log("print id: ", userOk.id)
    expect(response.body.id).toBe(userOk.id)
    expect(response.body.name).toBe(userOk.name)
    expect(response.body.email).toBe(userOk.email)
    expect(response.body.gender).toBe(userOk.gender)
    expect(response.body.status).toBe(userOk.status)
  });

  it('test get a user not exist', async () => {
    const response = await getUser();
    expect(response.status).toBe(404);
    console.log("body is : ", response.body)
    expect(response.body.message).toContain("Resource not found");
  });
});
