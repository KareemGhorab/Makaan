import { ReactNode } from 'react'
import Image, { StaticImageData } from 'next/image'

import apartmentIcon from '@/public/icons/icon-apartment.png'
import studioIcon from '@/public/icons/icon-house.png'
import duplexIcon from '@/public/icons/icon-luxury.png'
import villaIcon from '@/public/icons/icon-villa.png'
import pentHouseIcon from '@/public/icons/icon-condominium.png'

const iconMap: { [key: string]: StaticImageData } = {
    apartment: apartmentIcon,
    studio: studioIcon,
    duplex: duplexIcon,
    villa: villaIcon,
    penthouse: pentHouseIcon,
}

export const getIcon = (key: string): ReactNode => (
    <Image src={iconMap[key.toLowerCase()]} fill alt={key} />
)
