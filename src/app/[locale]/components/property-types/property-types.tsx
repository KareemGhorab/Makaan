import { FC } from 'react'
import Link from 'next/link'
import PropertyCard from './property-card'
import { getPropertyTypes } from '../../services/property-service'

type TProps = {
    t: (key: string) => string
}

const PropertyTypes: FC<TProps> = async ({ t }) => {
    const propertyTypes = await getPropertyTypes()

    return (
        <section className="flex flex-col gap-12">
            <header className="text-center">
                <h2 className="text-4xl font-bold">
                    {t('property.property-types')}
                </h2>
            </header>
            <main className="flex flex-wrap justify-center gap-10">
                {propertyTypes.map(({ id, name }) => (
                    <Link
                        key={id}
                        href={`properties?${new URLSearchParams({
                            propertyType: name,
                        }).toString()}`}
                    >
                        <PropertyCard title={name} />
                    </Link>
                ))}
            </main>
        </section>
    )
}

export default PropertyTypes
