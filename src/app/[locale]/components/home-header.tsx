import { inter } from '@/ui/fonts'
import clsx from 'clsx'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeHeader = () => {
    const t = useTranslations()
    return (
        <header
            className={clsx(
                'relative -top-32 flex flex-col-reverse gap-20 lg:flex-row lg:gap-0',
                inter.className,
            )}
        >
            <div className="mt-20 flex flex-col items-center justify-center gap-8 px-11 lg:pt-36 lg:mt-0 lg:w-1/2 lg:items-start">
                <h2 className="text-5xl font-bold text-secondary-1">
                    {t('home.hero-title')}
                </h2>
                <h2>{t('home.hero-description')}</h2>
                <Link
                    className="btn btn--primary w-48 py-4 text-center text-lg font-medium"
                    href={'/'}
                >
                    {t('common.get-started')}
                </Link>
            </div>
            <div className="lg:w-1/2">
                <Image
                    src={'/carousel-1.jpg'}
                    alt="Villa with pool"
                    height={1000}
                    width={1000}
                />
            </div>
        </header>
    )
}

export default HomeHeader
