import React, { Component } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import Featured from './featured'

export default class Featureds extends Component {
    render() {
        return (
            <div>
            <h3 className="font-sans text-white pl-6 text-2xl pt-5 font-semibold">Featured</h3>
                <ScrollContainer className="scroll-container">
                    <ul className="flex gap-4 px-6 py-3">
                        <Featured></Featured>
                        <Featured></Featured>
                        <Featured></Featured>
                        <Featured></Featured>
                        <Featured></Featured>
                    </ul>
                </ScrollContainer>
            </div>
        )
    }
}