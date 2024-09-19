import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/user" element={<Dashboard />} />
      </Route>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;