import React from 'react'
import { Link } from 'react-router-dom'

// Coponent
import Button from './element/Button'

// Icon
import { CgClose } from "react-icons/cg";

const LoginUserBar = () => {
  return (
    <div className="w-[20.75rem] h-[33.68rem] bg-primary border border-secondary rounded-l-lg p-8">
      <div className="flex justify-end -mt-3 cursor-pointer">
      <CgClose size={32} />
      </div>

      <h1 className="text-2xl font-semibold mb-20" >
        Login <br /> Untuk User
      </h1>
      <div>
        <div>
          <form action=""  className="flex flex-col">
            <label htmlFor="email" className="hover:cursor-pointer" >Email</label>
            <input type="email" name="email" id="email" className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-7"/>
            <label htmlFor="password" className="hover:cursor-pointer" >Password</label>
            <input type="password" name="password" id="password" className=" ease-in-out duration-300 bg-transparent border-b border-secondary outline-none mb-6"/>
            <Button className="mb-12">Login</Button>
          </form>
        </div>
      </div>
      <div className="flex-col flex gap-3">
        <Link>Lupa Kata Sandi?</Link>
        <Link>Buat Akun</Link>
      </div>
    </div>
  )
}

export default LoginUserBar