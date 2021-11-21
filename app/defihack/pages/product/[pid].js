import React, { Component } from 'react'
import { useRouter } from 'next/router'
import BackNav from '../../components/backNav'
import dudaPic from '../../assets/duda.jpeg'
import planetaPic from '../../assets/planeta.png'
import Image from 'next/image'
import Tabs from "../../components/tabs"

export default function Product() {
    const router = useRouter()
    const { pid } = router.query

    return (
        <div className="container">
            <BackNav />

            <div className="w-80 h-72 relative mx-auto rounded-md overflow-hidden">
                <Image src={dudaPic} layout="fill" alt="Duda Love" />
                <div className="bg-black bg-opacity-40 rounded-full w-7 h-7 flex content-center justify-center absolute right-2 top-2 pt-1">
                    <Image src="/heart.svg" width="17px" height="17px" alt="Favorite" />
                </div>
            </div>

            <div className="px-6 flex mt-7 justify-start justify-items-stretch items-center">
                <div className="w-10 h-10">
                    <Image src={planetaPic} width="39px" height="39px" alt="Planeta" />
                </div>
                <p className="text-white text-base font-semibold ml-2 flex-grow leading-4">
                    <span className="text-2xs font-normal">Pulmo</span>
                    <br />
                    Kitchen
                </p>
                <p className="text-white text-base font-semibold ml-2 text-right leading-4">
                    <span className="text-2xs font-normal">Current bid</span>
                    <br />
                    $15.00
                </p>
            </div>

            <p className="px-6 text-white mt-6 text-sm font-normal" style={{minHeight: "175px"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="px-6">
                <button className="btn btn-lg btn-primary w-full"> Place a bid</button>
            </div>

            <Tabs active="Home" root={false} router={router}>
                <div icon="home" label="Home"/>
                <div icon="search" label="Search" />
                <div icon="fav" label="Favorites" />
                <div icon="profile" label="Profile" />
            </Tabs>
        </div>
    )
}