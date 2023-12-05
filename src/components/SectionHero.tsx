import React from 'react'
import Image from 'next/image'
import Container from './Container'

import AppleStoreImage from '@/assets/btn-apple-store.svg'
import GooglePlayImage from '@/assets/btn-google-play.svg'
import ArrowDown from '@/assets/arrow-explorer.svg'
import WomanImage from '@/assets/woman.png'


const SectionHero = () => {
    return (
        <section className='w-full h-[500px] bg-img_bg_hero bg-no-repeat bg-center bg-cover'>
            <Container>
                <div className='flex-1 max-w-[520px]'>
                    <h1 className='text-white font-bold text-7xl text- mb-4'>Tenha seu banco na palma da mão.</h1>
                    <p className='text-white text-xl max-w-[408px] mb-8'>Todas as operações que você precisa em um só lugar. Simples, completo e feito para você.</p>
                    <div className='flex gap-4 mb-10'>
                        <button>
                            <Image src={AppleStoreImage} alt="Apple Store" />
                        </button>
                        <button>
                            <Image src={GooglePlayImage} alt="Google Play" />
                        </button>
                    </div>
                    <button className='flex gap-2 items-center'>
                        <Image src={ArrowDown} alt="Arrow Down" />
                        <span className='text-white'>Continue explorando</span>
                    </button>
                </div>
                <Image src={WomanImage} alt="Woman" height={500} />
            </Container>
        </section>
    )
}

export default SectionHero