import clsx from 'clsx'
import React, { FC } from 'react'

import BasicSearchForm from './basic-search-form'
import { getLocations, getPropertyTypes } from '../../services/property-service'

type TProps = {
    className?: string
}

const BasicSearch: FC<TProps> = async ({ className }) => {
    const data = await Promise.all([getLocations(), getPropertyTypes()])

    return (
        <section className={clsx('bg-primary-1 p-5', className)}>
            <BasicSearchForm locations={data[0]} propertyTypes={data[1]} />
        </section>
    )
}

export default BasicSearch
