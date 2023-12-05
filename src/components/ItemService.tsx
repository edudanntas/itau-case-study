import Image from 'next/image'
import React from 'react'

type Props = {
    name: string
    alt: string
    src: string
}

const ItemService = ({ name, alt, src }: Props) => {
    return (
        <div className='flex items-center gap-10 pb-9 border-b-[1px] border-opacity-gray'>
            <div className='w-7 h-7 flex items-center justify-center'>
                <Image src={src} alt={alt} />
            </div>
            <p className='flex-1 text-txt-gray pr-2'>{name}</p>
        </div>
    )
}

export default ItemService