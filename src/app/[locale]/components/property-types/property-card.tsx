import { getIcon } from '@/utils/icons'
import { FC } from 'react'

type TProps = {
    title: string
}

const PropertyCard: FC<TProps> = ({ title }) => {
    return (
        <article className="rounded bg-primary-3 p-5">
            <div className="flex h-52 w-56 flex-col items-center justify-center gap-2 rounded border border-dashed border-primary-1 bg-white">
                <div className="w-fit rounded-full border border-dashed border-primary-1 p-4">
                    <div className="relative h-11 w-11 ">{getIcon(title)}</div>
                </div>
                <h3 className="text-md font-semibold">{title}</h3>
            </div>
        </article>
    )
}

export default PropertyCard
