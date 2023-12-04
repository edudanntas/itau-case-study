import Image from 'next/image'
import React from 'react'

import IconSearch from '@/assets/icon-search.svg'

const ItemSearch = () => {
    return (
        <div className='flex gap-4'>
            <button>
                <Image src={IconSearch} alt="Logo" />
            </button>
            <input type="text" className='bg-transparent outline-none text-white placeholder:text-white' placeholder='Buscar' />
        </div>
    )
}

export default ItemSearch