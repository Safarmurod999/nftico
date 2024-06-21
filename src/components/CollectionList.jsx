import React from 'react'
import { collectionArray } from '../data/const'
import CollectionCard from './CollectionCard'

const CollectionList = () => {
    return (
        <ul className='grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-6 mt-[30px] md:mt-[45px] lg:mt-[60px]'>
            {
                collectionArray.map((collection) => (
                    <CollectionCard {...collection} key={collection.id} />
                ))
            }
        </ul>
    )
}

export default CollectionList