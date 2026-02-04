export function generateUser() {
  const random = Date.now();
  return {
    firstName: 'Test',
    lastName: 'User',
    address: 'Test Address',
    city: 'Mumbai',
    state: 'MH',
    zipCode: '400001',
    phone: '9999999999',
    ssn: '123456',
    username: `user_${random}`,
    password: 'Password@123'
  };
}
