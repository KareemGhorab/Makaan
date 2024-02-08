import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
    const t = useTranslations('not-found')
    return <h1>{t('title')}</h1>
}
