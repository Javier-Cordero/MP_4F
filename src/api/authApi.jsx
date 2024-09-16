import axios from 'axios';
export const login = async ({ username, password }) => {
  const res = await axios.post('http://localhost:3000/api/auth/login', {
    username,
    password,
  });
  return res.data;
};

export const getMyInformation = async token => {
  const res = await axios.get('http://localhost:3000/api/auth/me', {
    headers: { Authorization: token },
  });
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post('http://localhost:3000/api/users', data);
  return res.data;
};

export const updateUser = async (data) => {
  const res = await axios.patch('http://localhost:3000/api/update', data);
  return res.data;
};

export const getUser = async () => {
  const token = localStorage.getItem('tokenLogin');
  const res = await axios.post('http://localhost:3000/api/users', { headers: { Authorization: token}});
  return res.data;
};


