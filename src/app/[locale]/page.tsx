import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import HomeHeader from './components/home-header'
import BasicSearch from './components/basic-search/basic-search'

export async function generateMetadata({
    params,
}: {
    params: { locale: string }
}) {
    const { locale } = params
    const t = await getTranslations({ locale })
    return {
        title: t('home.title'),
        description: t('home.description'),
    }
}

const Page = () => {
    const t = useTranslations('common')
    return (
        <>
            <HomeHeader />
            <BasicSearch className='relative -translate-y-20' />
        </>
    )
}

export default Page
