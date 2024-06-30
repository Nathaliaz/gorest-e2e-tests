End-to-End Test Scenarios for CRUD User Operations
The CRUD operations that I need to cover are:

- Create a User
- Read (get) a User
- Update a User
- Delete a User

The project will be structured as follows:
> tests
> utils
> .env (to protect token and not put it in the repo)
> .gitignore (to list the files not to be commited)
> jest.config.js
> package.json
> README.md

**Step 1: Set Up the Project**
Initialize a new Node.js project:

```
mkdir gorest-e2e-tests
cd gorest-e2e-tests
npm init -y
```

**Step 2: Install Necessary Dependencies**
Install Jest, Supertest and dotenv:

```
npm install jest supertest dotenv
```

**Step 3: Configure Jest**
Create a `jest.config.js` file to configure Jest:

```
module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testTimeout: 30000,
};
```

**Step 4: Create Utility Functions**
Create a utility file **apiClient.js** (gorest-e2e-tests/utils/apiClient.js) in the utils folder to handle API requests

Create a **testData.js** (gorest-e2e-tests/utils/testData.js) file in the utils folder to store test data

**Step 5: Write Test Scenarios**
Create test files in the tests folder.

**Step 6: Run the tests**
Download the *Jest Runner* for Visual Studio Code to run the tests easily. Otherwise, just run `npm test` from the root of the repository.
