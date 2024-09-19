import { Link } from "react-router-dom";

export default function Register() {
    return (
        <main className="h-screen w-screen grid place-content-center">
            <div className="grid border rounded-lg w-96 p-5 gap-5">
                <img src="devchallenges.svg" alt="" />
                <span className="font-semibold text-[18px]">join thousands of learners from around the world</span>
                <span className="font-normal text-[16px]"> Master web development by making real-life projects. There are multiple paths for you to chose</span>
                <form action="" className="grid gap-4">
                    <label className="h-[48px] border border-[#BDBDBD]/50 rounded-lg content-center flex gap-5 p-2 font-normal text-[16px]">
                        <img src="email.svg" alt="icono del correo" />
                        <input type="email" name="email" placeholder="Email" required className="w-full outline-none" />
                    </label>
                    <label className="h-[48px] border border-[#BDBDBD]/50 rounded-lg content-center flex gap-5 p-2 font-normal text-[16px]">
                        <img src="password.svg" alt="icono de password" />
                        <input type="password" name="password" placeholder="Email" required className="w-full outline-none" />
                    </label>
                    <button type="submit" className="bg-[#2F80ED] rounded-lg h-[40px]">Crear cuenta</button>
                </form>
                <footer className="flex justify-center gap-5 mt-2">
                    <a href="https://www.google.com/"><img src="Google.svg" alt="icono de google" className="cursor-pointer" /></a>
                    <a href="https://www.facebook.com/"><img src="Facebook.svg" alt="icono de facebook" className="cursor-pointer" /></a>
                    <a href="https://x.com/"><img src="Twitter.svg" alt="icono de twitter" className="cursor-pointer" /></a>
                    <a href="https://github.com/"><img src="Github.svg" alt="icono de github" className="cursor-pointer" /></a>
                </footer>
                <span className="text-[16px]">Already a member? <Link to="/" className="text-[#2F80ED] underline">Sign in</Link></span>
            </div>
        </main>
    )
}
