'use client'

import { heebo } from '@/ui/fonts'
import clsx from 'clsx'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React, { FC } from 'react'

type TProps = {
    className?: string
    locale: string
    navLinks: TNavLink[]
    buttonLabel: string
}

const NavbarList: FC<TProps> = ({
    className,
    locale,
    navLinks,
    buttonLabel,
}) => {
    const pathname = usePathname()
    return (
        <ul
            className={clsx(
                'flex w-fit flex-col items-start justify-center gap-7 overflow-hidden transition-all duration-150 lg:mt-0 lg:flex-row lg:items-center lg:gap-10',
                heebo.className,
                {
                    'text-base font-medium': locale === 'en',
                    'text-xl font-medium': locale === 'ar',
                },
                className,
            )}
        >
            {navLinks.map(({ href, title }) => (
                <li key={title}>
                    <Link
                        href={href}
                        className={clsx({
                            'text-primary-1':
                                (href !== '/' &&
                                    pathname.startsWith(`/${locale}${href}`)) ||
                                (href === '/' && pathname === `/${locale}`),
                        })}
                    >
                        {title.toUpperCase()}
                    </Link>
                </li>
            ))}
            <Link className="btn btn--primary px-4 py-2 text-center" href={'/'}>
                {buttonLabel}
            </Link>
        </ul>
    )
}

export default NavbarList
