const { createUser, deleteUser, getUser } = require('../utils/apiClient');
const { user } = require('../utils/testData');

describe('Delete User', () => {
  let userIdToBeDeleted;

  beforeAll(async () => {
    const response = await createUser(user);
    userIdToBeDeleted = response.body.id;
  });

  it('should delete a user successfully', async () => {
    const response = await deleteUser(userIdToBeDeleted);
    console.log("print", response.body)
    expect(response.status).toBe(204);

    const userResponseGet = await getUser(userIdToBeDeleted);
    console.log("print 2", response.body)
    expect(userResponseGet.status).toBe(404);
  });

  it('should not delete a non existing user', async () => {
    const response = await deleteUser('id', -2345678);
    console.log("print body", response.body)
    expect(response.status).toBe(404);
    expect(response.body.message).toBe('Resource not found')
  });
});
