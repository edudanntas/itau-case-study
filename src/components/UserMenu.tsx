import Image from 'next/image'
import React from 'react'

import UserIcon from '@/assets/icon-user.svg'

const UserMenu = () => {
    return (
        <button className='flex items-center gap-3'>
            <Image src={UserIcon} alt="User icon" />
            <span className='text-white font-bold'>Acessar conta</span>
        </button>
    )
}

export default UserMenu