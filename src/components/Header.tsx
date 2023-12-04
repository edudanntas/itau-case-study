import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/logo.svg'
import ItemMenu from './ItemMenu'
import ItemSearch from './ItemSearch'
import UserMenu from './UserMenu'


const Header = () => {
    return (
        <header className='w-full flex items-center h-20'>
            <div className='bg-primary-orange w-[80%] px-10 h-full flex items-center'>
                <nav className='w-full max-w-[1246px] mx-auto flex items-center justify-between'>
                    <div>
                        <div className='flex items-center gap-14'>
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={48}
                                height={48}
                            />
                            <ul className='flex gap-10'>
                                <li><ItemMenu name="Para você" /></li>
                                <li><ItemMenu name="Para empresas" /></li>
                                <li><ItemMenu name="Serviços" /></li>
                                <li><ItemMenu name="Ajuda" /></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ItemSearch />
                    </div>
                </nav>
            </div>
            <div className='bg-primary-blue h-full w-[20%] flex items-center px-10'>
                <UserMenu />
            </div>
        </header>
    )
}

export default Header