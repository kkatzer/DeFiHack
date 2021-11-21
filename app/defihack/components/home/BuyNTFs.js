import React, { Component } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import NFT from '../NTF'
import { loadNFTs } from '../../scripts/celo-client'
import { useEffect, useState } from 'react'
import DataManager from '../../scripts/data-manager'

export default function BuyNFTs() {
    const [NFTs, setNFTs] = useState([])

    useEffect(() => {
        loadNFTs().then(r => {
            DataManager.getInstance().setNFTs(r)
            setNFTs(r)
        })
    }, [])

    return (
        <div>
            <h3 className="font-sans text-white pl-6 text-2xl pt-5 font-semibold">Buy NFTs</h3>
            <ScrollContainer className="scroll-container">
                <ul className="flex flex-col md:flex-row gap-4 px-6 py-3">
                    {NFTs.map((nft, idx) => {
                        return (
                            <NFT
                                name={nft.name}
                                image={nft.image}
                                price={nft.price}
                                seller={nft.seller}
                                tokenId={nft.tokenId}
                                key={"nft-" + idx}
                            />
                        )
                    })}
                </ul>
            </ScrollContainer>
        </div>
    )
}