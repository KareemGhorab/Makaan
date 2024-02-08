import prisma from '@/utils/db'

export const getLocations = async () => {
    return prisma.location.findMany({})
}

export const getPropertyTypes = async () => {
    return prisma.propertyType.findMany({})
}
