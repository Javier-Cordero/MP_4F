import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;

/*
jaimevela@gmail.com
123solo
*/