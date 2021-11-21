import React, { Component } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import NFT from '../NTF'

export default class BuyNFTs extends Component {
    render() {
        return (
            <div>
            <h3 className="font-sans text-white pl-6 text-2xl pt-5 font-semibold">Buy NFTs</h3>
                <ScrollContainer className="scroll-container">
                    <ul className="flex flex-col md:flex-row gap-4 px-6 py-3">
                        <NFT></NFT>
                        <NFT></NFT>
                        <NFT></NFT>
                        <NFT></NFT>
                        <NFT></NFT>
                        <NFT></NFT>
                    </ul>
                </ScrollContainer>
            </div>
        )
    }
}