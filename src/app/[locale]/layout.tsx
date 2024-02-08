import { FC } from 'react'
import { notFound } from 'next/navigation'

import './globals.css'
import Navbar from './components/navbar/navbar'
import { useTranslations } from 'next-intl'

const locales = ['en', 'ar']

type TProps = {
    children: JSX.Element
    params: {
        locale: string
    }
}

const LocaleLayout: FC<TProps> = ({ children, params: { locale } }) => {
    if (!locales.includes(locale as any)) notFound()

    const t = useTranslations()

    const navLinks: TNavLink[] = [
        {
            href: '/',
            title: t('nav.home'),
        },
        {
            href: `/about`,
            title: t('nav.about'),
        },
        {
            href: `/contact`,
            title: t('nav.contact'),
        },
        {
            href: `/properties`,
            title: t('nav.properties'),
        },
    ]

    return (
        <html lang={locale}>
            <body className="bg-primary-3">
                <div className="relative flow-root mx-auto max-w-app bg-white">
                    <Navbar
                        navLinks={navLinks}
                        title={t('common.title')}
                        buttonLabel={t('nav.add-property')}
                        locale={locale}
                    />
                    {children}
                </div>
            </body>
        </html>
    )
}

export default LocaleLayout
