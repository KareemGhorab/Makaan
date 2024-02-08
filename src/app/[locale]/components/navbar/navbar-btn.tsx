'use client'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { FC } from 'react'

type TProps = {
    isActive: boolean
    toggle: Function
}

const NavbarBtn: FC<TProps> = ({ isActive, toggle }) => {
    return (
        <button
            onClick={() => toggle()}
            className="h-10 w-10 rounded border border-neutral-300 p-2 text-neutral-700 lg:hidden"
        >
            {isActive ? <XMarkIcon /> : <Bars3Icon />}
        </button>
    )
}

export default NavbarBtn
