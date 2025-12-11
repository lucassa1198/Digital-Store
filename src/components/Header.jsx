import Menu from './Pages/Menu.jsx';
import Logo from './Pages/Logo.jsx';
import Input from './Pages/Input.jsx';
import Button from './Pages/Button.jsx';

    const  Header = ()=>{

        <Header className="w-full bg-white px-24 py-8 flex items-center justify-between border-b">
            <Logo className="text-2x1 font-bold text-gray-800"/> 
            <Menu className='hover:text-pink-600'/>
            <Input className="pl-10 pr-4 py-2 bg-gray-100 rounded focus:outline-none"/>
            <Button className='bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700'/>



        </Header>
        
    }




export default Header