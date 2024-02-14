'use client'

import clsx from 'clsx'
import React, { FC, FormEvent, FormEventHandler, useRef } from 'react'

import styles from './basic-search.module.css'
import { Location, PropertyType } from '@prisma/client'
import { useRouter } from 'next/navigation'

type TProps = {
    locations: Location[]
    propertyTypes: PropertyType[]
}

const BasicSearchForm: FC<TProps> = ({ locations, propertyTypes }) => {
    const router = useRouter()
    const queryRef = useRef<HTMLInputElement | null>(null)
    const propertyTypeRef = useRef<HTMLSelectElement | null>(null)
    const locationRef = useRef<HTMLSelectElement | null>(null)

    const handleSearch: FormEventHandler = (e: FormEvent) => {
        e.preventDefault()
        const searchQuery = new URLSearchParams({
            ...(queryRef.current?.value && { query: queryRef.current.value }),
            ...(propertyTypeRef.current?.value && {
                propertyType: propertyTypeRef.current.value,
            }),
            ...(locationRef.current?.value && {
                location: locationRef.current.value,
            }),
        })

        router.push(`/properties?${searchQuery}`)
    }

    return (
        <form
            className={clsx(
                styles.form,
                'flex flex-col items-center justify-evenly gap-3 lg:flex-row',
            )}
            onSubmit={handleSearch}
        >
            <input type="text" placeholder="Search keyword" ref={queryRef} />
            <select defaultValue="" ref={propertyTypeRef}>
                <option value="" disabled>
                    Property Type
                </option>
                {propertyTypes.map(({ id, name }) => (
                    <option key={id} value={name}>
                        {`${name[0]}${name.slice(1).toLowerCase()}`}
                    </option>
                ))}
            </select>
            <select defaultValue="" ref={locationRef}>
                <option value="" disabled>
                    Location
                </option>
                {locations.map(({ id, name }) => (
                    <option key={id} value={name}>
                        {`${name[0]}${name.slice(1).toLowerCase()}`}
                    </option>
                ))}
            </select>
            <button
                className="btn btn--secondary w-32 py-3 font-medium"
                type="submit"
            >
                Search
            </button>
        </form>
    )
}

export default BasicSearchForm
