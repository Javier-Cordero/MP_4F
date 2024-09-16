import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const { loginMutation } = useContext(AuthContext);

  const handleLogin = async e => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    await loginMutation.mutate(data);
  };

  return (
    <main className='h-screen w-screen grid place-content-center bg-gray-100'>
      <div className='w-[90%] max-w-[474px] h-[auto] border border-[#BDBDBD]/50 rounded-3xl p-14 bg-white'>
        <img src='/devchallenges.svg' alt='logo de dev' className='mx-auto' />
        <span className='block font-NotoSans font-semibold text-[18px] text-[#333333] py-4 text-center'>Login</span>
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          <label className="h-[48px] border border-[#BDBDBD]/50 rounded-lg flex items-center gap-5 p-2 font-normal text-[16px]">
            <img src="/email.svg" alt="icono de correo" className="h-full " />
            <input type="email" name="username" placeholder="Email" required className="pl-2 w-full outline-none" />
          </label>
          <label className="h-[48px] border border-[#BDBDBD]/50 rounded-lg flex items-center gap-5 p-2 font-normal text-[16px]">
            <img src="/password.svg" alt="icono de password" className="h-full " />
            <input type="password" name="password" placeholder="Password" required className="pl-2 w-full outline-none" />
          </label>
          <button type='submit' className='h-[38px] bg-[#2F80ED] text-white rounded-lg'>Login</button>
        </form>
        <footer className='w-full mt-4 text-center font-NotoSans font-normal text-[14px] text-gray-500'>
          <span>or continue with these social profiles</span>
          <div className='flex justify-center gap-5 mt-2'>
            <img src='Google.svg' alt="icono de google" className='w-[42px]' />
            <img src='Facebook.svg' alt='icono de facebook' className='w-[42px]' />
            <img src='Twitter.svg' alt='icono de twitter' className='w-[42px]' />
            <img src='Github.svg' alt='icono de github' className='w-[42px]' />
          </div>
          <div className='mt-2'>
            <span className='text-[16px]'>Already a member? <Link to="/register" className="text-[#2F80ED]">Register</Link></span>
          </div>
        </footer>
      </div>
      <div className="w-full mt-4 flex justify-between font-NotoSans font-normal text-[14px] text-gray-500">
          <span>Created by <a href="#" className=" font-semibold underline">Javier Cordero</a></span>
          <span>devChallenges.io</span>
        </div>
    </main>
  );
}

export default Login;
