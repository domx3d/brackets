import React from 'react'
import {
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

export default function About() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid gap-8 text-gray-500'>
      <div>
        <h1 className='w-full text-3xl font-bold text-amber-300'>About</h1>
        <p className='py-4 '>
          Welcome to <strong>Brackets</strong> app, your ultimate companion for organizing and tracking tournament progress! 
        </p>
        <h2 className='text-xl font-bold my-4 text-amber-200'>How it works</h2>
        <div className='flex flex-col gap-3'>
          <p>First create teams <b>(max. 32)</b> and 
          set their <b>names</b> that you want displayed in brackets.</p>
          <p>You can also add <b>players</b> to each team (optional).</p>
          <p>First time you switch to <b>brackets tab</b>, brackets are automatically generated.</p>
          <p>To <b>create new</b> brackets (reset) click <i>Create Brackets</i>.</p>
          <p>You can <b>manually fill</b> the brackets at <i>first stage</i> or use one of the <b>fill options</b>.</p>
          <p>To <b>remove</b> team from bracket at <i>first stage</i> select empty in dropdown,
          to remove at <i>later stages</i> hold it for 2 seconds. </p>
          <p>Teams and brackets are saved locally in the browser. This means if you exit the page they are still there.</p>
        </div>
        <div className='flex justify-evenly md:justify-start gap-16 md:w-[75%] mt-20'>
          <FaGithubSquare size={30}/>
          <FaInstagram size={30}/>
          <FaTwitterSquare size={30}/>
        </div>
      </div>
    </div>
  )
}
