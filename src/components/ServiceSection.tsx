import React from 'react'
import Image from 'next/image'

// Componentes
import Container from './Container'
import ItemService from './ItemService'

// Assets
import PhoneIcon from '@/assets/icon-phone.svg'
import CardIcon from '@/assets/icon-card.svg'
import OptionsIcon from '@/assets/icon-options.svg'
import SolutionsIcon from '@/assets/icon-solutions.svg'
import PhoneMockup from '@/assets/phone.png'

const ServiceSection = () => {
    return (
        <section className='relative w-full h-[596px]'>
            <Container>
                <div className='flex-1 max-w-[594px] pt-14'>
                    <span className='text-primary-orange text-sm uppercase font-bold mb-9 block'>Serviços Exclusivos</span>
                    <h2 className='text-primary-gray text-[56px] mb-6 leading-tight font-bold'>Gerencie suas finanças sem sair de casa</h2>
                    <p className='text-lg max-w-[554px] mb-16 text-second-gray'>Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto de sua casa.</p>
                    <ul className='flex flex-col items-start gap-9'>
                        <li>
                            <ItemService
                                name="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"
                                alt="Icone de telefone"
                                src={PhoneIcon}
                            />
                        </li>
                        <li>
                            <ItemService
                                name="Soluções de empréstimos e renegociações para organizar suas finanças"
                                alt="Icone de uma mão segurando dinheiro"
                                src={SolutionsIcon}
                            />
                        </li>
                        <li>
                            <ItemService
                                name="Diversas opções de investimento, de acordo com o seu perfil de investidor"
                                alt="Icone de opçoes"
                                src={OptionsIcon}
                            />
                        </li>
                        <li>
                            <ItemService
                                name="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão virtual"
                                alt="Icone de cartão"
                                src={CardIcon}
                            />
                        </li>
                    </ul>
                </div>
            </Container>
            <div className='absolute top-20 right-0 flex items-center w-[32%] h-full bg-gray-phone'>
                <Image src={PhoneMockup} alt="Phone mockup" className='translate-x-[-50%]' height={650} />
            </div>
        </section>
    )
}

export default ServiceSection