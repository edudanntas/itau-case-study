import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}
const Container = ({ children }: Props) => {
    return (
        <div className='w-full max-w-[1246px] mx-auto flex items-center justify-between px-10'>{children}</div>
    )
}

export default Container