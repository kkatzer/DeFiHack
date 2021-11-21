import React, { Component } from "react";
import heart from "../../assets/heart.svg"
import Image from "next/image"

export default class Featured extends Component {
    render() {
        return (
            <div className="relative shadow-sm rounded-md relative w-32 h-28 flex-shrink-0 overflow-hidden bg-dudaPic bg-cover">
                <div className="bg-black bg-opacity-40 rounded-full w-4 h-4 flex content-center justify-center absolute right-2 top-2">
                    <Image src={heart} width="11px" height="11px"/>
                </div>
                <div className="gradientBackground w-full h-8 text-white absolute bottom-0">
                    <div className="flex justify-around items-center content-center h-full">
                        <p className="text-2xs">
                            Bedroom
                            <br />
                            $15.00
                        </p>
                        <button className="btn-sm btn-primary row-span-2">Buy</button>
                    </div>
                </div>
            </div>
        )
    }
}