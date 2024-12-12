import { TfiEmail } from 'react-icons/tfi'; // Heroicons

export default function Header() {
  return (
    <header style={{background:'#f9efe6'}} className='flex justify-between items-center px-4 py-5 text-#ef7a54'>
      <div>
        <img src="/assets/images/logo.png" alt='logo' className='h-[5.1rem]'/>
      </div>
      <button className="text-[#ef7a54] message-icon flex items-center pr-4">
        <TfiEmail className='text-3xl rounded-xl'/>
        <span style={{color:'#ef7a54'}} className='ml-2 text-xl font-sans font-normal'>abc@zealtaste.com</span>
      </button>
    </header>
  )
}
