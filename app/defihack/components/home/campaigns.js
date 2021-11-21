import React, { Component } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import Campaign from './campaign'

export default class Campaigns extends Component {
    render() {
        return (
            <div>
            <h3 className="font-sans text-white pl-6 text-2xl pt-5 font-semibold">Campaigns</h3>
                <ScrollContainer className="scroll-container">
                    <ul className="flex gap-4 px-6 py-3">
                        <Campaign></Campaign>
                        <Campaign></Campaign>
                        <Campaign></Campaign>
                        <Campaign></Campaign>
                        <Campaign></Campaign>
                        <Campaign></Campaign>
                        <Campaign></Campaign>
                        <Campaign></Campaign>
                    </ul>
                </ScrollContainer>
            </div>
        )
    }
}