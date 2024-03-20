import React from 'react'
import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom";
import Title from './Title'
import Option from './Option'
import Button from './Button'
import { Children } from 'react';
import Inputlabel from './Inputlabel';

export default function App({ children }) {
  return (
    <div className='bg-slate-950'>
      <div className='p-5'>
        <div className='mb-8 flex justify-between bg-slate-800 p-3'>
          <div className='flex justify-between bg-slate-800'>
            <Link to="/">
              <Title styles="bg-slate-800 -ml-1  w-64 rounded-xl text-white font-black font-[lemon] ml-5  text-4xl" Title="Infinity" />
            </Link>
          </div>
          <Button styles="text-slate-950 h-10 p-2 font-black bg-white rounded-full" >
            Déconnexion
          </Button>
        </div>
        <div className='flex'>
          <div className='w-1/6'>
            
            <Option />
          </div>
          <div className='w-full'>
            {
              children
            }
          </div>
        </div>
      </div>
    </div >
  );
}

