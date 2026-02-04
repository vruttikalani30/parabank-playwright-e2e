export const generateUser = () => {
  const time = Date.now();
  return {
    firstName: 'Test',
    lastName: 'User',
    address: 'Street 1',
    city: 'Mumbai',
    state: 'MH',
    zip: '400001',
    phone: '9999999999',
    ssn: '123456',
    username: `user_${time}`,
    password: 'Password@123'
  };
};
