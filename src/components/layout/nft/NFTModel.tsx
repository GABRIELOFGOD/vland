import BigButton from '@/components/common/buttons/BigButton'
import { NFT } from '@/model/nftTypes'
import { formatMoney } from '@/services/moneyEditor'
import Image from 'next/image'
import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'

const NFTModel = ({ nft, color, onClose }: { nft: NFT, color: string, onClose: () => void }) => {
  return (
    <div 
      className={`${color ? color : "bg-gray-200"} bg-opacity-30 w-full h-full fixed top-0 left-0 flex justify-center items-center z-40`}
      onClick={onClose}
    >
      <div className="nft-box rounded-md" onClick={(e) => e.stopPropagation()}>
        <div className={`bg-white rounded-md relative p-10`}>
          <button onClick={onClose} className="absolute top-2 right-2">
            <IoCloseCircleOutline size={25} color='#040533' />
          </button>
          <div className='flex gap-3 flex-col'>
            <div className={`w-fit h-fit ${color} p-2`}>
              <Image
                src={nft.image}
                alt={nft.name}
                width={300}
                height={300}
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-secondary">{nft.name}</h2>
              <p className='text-gray-500'>{nft.description}</p>
            </div>
            <div className="flex justify-between flex-wrap gap-3">
              {nft.attributes.map((attr, i) => (
                <div key={i} className="flex gap-2">
                  <p className="text-gray-900 font-semibold">{attr.trait_type}:</p>
                  <p className="text-gray-500">{attr.value}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <p className="text-gray-900 font-semibold">Category:</p>
                <p className="text-gray-500">{nft.category.join(', ')}</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-900 font-semibold">Price:</p>
                <p className="text-secondary font-bold">${formatMoney(nft.price)}</p>
              </div>
            </div>
            <BigButton
              text="Buy Now"
              onClick={() => alert("Buy Now")}
              color="text-white"
              bgColor={color}
            />
          </div>
          {/* Add more NFT details as needed */}
        </div>
      </div>
    </div>
  )
}

export default NFTModel