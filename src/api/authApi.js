let mockUserData = null;
const usersDB = new Map();

export const register = async (username, email, password) => {

  if (usersDB.has(email)) {
    return { success: false, error: 'User already exists' };
  }

  const newUser = { username, email, password };
  usersDB.set(email, newUser);
  mockUserData = newUser;

  return { success: true, user: newUser };
};

export const login = async (email, password) => {

  const user = usersDB.get(email);
  if (user && user.password === password) {
    mockUserData = user;
    return { success: true, user };
  }

  return { success: false, error: 'Invalid email or password' };
};

export const logout = async () => {
  mockUserData = null;
  return { success: true };
};

export const getCurrentUser = () => {
  return mockUserData;
};
