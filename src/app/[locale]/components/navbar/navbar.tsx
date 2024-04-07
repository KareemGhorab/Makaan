'use client'

import clsx from 'clsx'
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import NavbarBtn from './navbar-btn'
import NavbarList from './navbar-list'
import { useBoolean } from '@/hooks/use-boolean'

type TProps = {
    navLinks: TNavLink[]
    buttonLabel: string
    title: string
    locale: string
}

const Navbar: FC<TProps> = ({ navLinks, title, buttonLabel, locale }) => {
    const { value: isMenuOpen, toggle: toggleMenu } = useBoolean(false)
    const { ref, inView } = useInView({})

    return (
        <>
            <div
                ref={ref}
                className="absolute transition-all duration-300 lg:pt-10"
            ></div>
            <nav
                className={clsx(
                    'left-0 right-0 z-50 flex flex-wrap items-center justify-between gap-y-5 bg-white px-5 pt-5 shadow transition-all duration-300 ease-linear lg:mt-10 lg:pb-5',
                    {
                        'relative lg:mx-12': inView,
                        'sticky top-0': !inView,
                    },
                )}
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 text-4xl font-bold text-primary-1"
                >
                    <Image
                        src="/icons/icon-deal.png"
                        alt="Makaan Logo"
                        height={45}
                        width={45}
                        className="h-13 w-13 rounded-full border border-dashed border-primary-1 p-2"
                    />
                    <h1>{title}</h1>
                </Link>
                <NavbarBtn isActive={isMenuOpen} toggle={toggleMenu} />
                <NavbarList
                    buttonLabel={buttonLabel}
                    locale={locale}
                    navLinks={navLinks}
                    className={clsx(
                        'w-full origin-top overflow-hidden transition-all duration-500 lg:mt-0 lg:h-fit lg:w-fit lg:overflow-visible lg:pb-0',
                        {
                            'max-h-0': !isMenuOpen,
                            'max-h-96 pb-5': isMenuOpen,
                        },
                    )}
                />
            </nav>
        </>
    )
}

export default Navbar
