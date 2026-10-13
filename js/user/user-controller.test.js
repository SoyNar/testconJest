const UserController = require("./user-controller");
const User = require("./user");

let userController;

beforeEach(() => {
  userController = new UserController();
});
test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('add a user that is not in the list', () => {
  let existing = new User(1, "Ana", "ana@generation.org");
  let newUser = new User(2, "Luis", "luis@generation.org");
  userController.add(existing);

  expect(userController.getUsers()).not.toContain(newUser);

  userController.add(newUser);

  expect(userController.getUsers()).toContain(newUser);
});

test('remove a user that is not in the list', () => {
  let existing = new User(1, "Ana", "ana@generation.org");
  let notInList = new User(2, "Luis", "luis@generation.org");
  userController.add(existing);

  userController.remove(notInList);

  expect(userController.getUsers()).toContain(existing);
});

test('findByEmail returns the user when the email exists', () => {
  let user = new User(1, "Ana", "ana@generation.org");
  userController.add(user);

  expect(userController.findByEmail("ana@generation.org")).toBe(user);
});

test('findByEmail returns undefined when the email does not exist', () => {
  expect(userController.findByEmail("noexiste@generation.org")).toBeUndefined();
});

test('findById returns the user when the id exists', () => {
  let user = new User(1234, "Santiago", "santiago@generation.org");
  userController.add(user);

  expect(userController.findById(1234)).toBe(user);
});

test('findById returns undefined when the id does not exist', () => {
  expect(userController.findById(9999)).toBeUndefined();
});

