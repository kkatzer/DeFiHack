import React, { Component } from "react"
import dudaPic from "../assets/duda.jpeg"
import Image from "next/image"

export default class Campaign extends Component {
    render() {
        return (
            <div className="relative flex-shrink-0">
                <Image src={dudaPic} width="78px" height="67px" objectFit="cover" className="rounded-md" alt="Duda Love"/>
                <p className="text-white font-semibold text-2xs text-center">Duda Love</p>
                <div className="bg-black bg-opacity-40 rounded-full w-4 h-4 flex content-center justify-center absolute right-1 top-1">
                    <Image src="/heart.svg" width="11px" height="13px" alt="Favorite"/>
                </div>
            </div>
        )
    }
}