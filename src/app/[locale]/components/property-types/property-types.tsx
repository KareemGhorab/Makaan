import React from 'react'
import { getPropertyTypes } from '../../services/property-service'
import Link from 'next/link'

const PropertyTypes = async () => {
    const propertyTypes = await getPropertyTypes()

    return (
        <section>
            {propertyTypes.map(({ id, name }) => (
                <Link
                    key={id}
                    href={`properties?${new URLSearchParams({
                        propertyType: name,
                    }).toString()}`}
                ></Link>
            ))}
        </section>
    )
}

export default PropertyTypes
