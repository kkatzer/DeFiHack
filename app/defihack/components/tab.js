import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
export default class Tab extends Component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    }

    onClick = () => {
        const { label, onClick } = this.props
        onClick(label)
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                icon,
                active,
                label
            }
        } = this

        let className = 'tab-list-item'

        if (activeTab === label) {
            className += ' tab-list-active'
        }

        let iconPath = activeTab === label ? '/' + icon + '_active.svg' : '/' + icon + '.svg'

        return (
            <li
                className={className}
                onClick={onClick}
            >
                <Image src={iconPath} width="24px" height="24px" alt={label} />
            </li>
        )
    }
}