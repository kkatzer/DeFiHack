import React, { Component } from "react"
import dudaPic from "../assets/duda.jpeg"
import Image from "next/image"

export default class NFT extends Component {
    render() {
        return (
            <div className="relative shadow-sm rounded-md w-80 h-72 flex-shrink-0 overflow-hidden">
                <Image src={dudaPic} width="320px" height="288px" objectFit="cover" className="absolute" alt="Duda Love" />
                <div className="gradientBackground w-full h-16 text-white absolute bottom-0">
                    <div className="flex justify-between items-center content-center h-full px-5">
                        <p className="text-xs">
                            Duda Love
                            <br />
                            <span className="text-2xs">dudalmello</span>
                            <br />
                            $15.00
                        </p>
                        <button className="btn btn-primary">Place a bid</button>
                    </div>
                </div>
                <div className="bg-black bg-opacity-40 rounded-full w-7 h-7 flex content-center justify-center absolute right-2 top-2">
                    <Image src="/heart.svg" width="17px" height="20px" alt="Favorite" />
                </div>
            </div>
        )
    }
}