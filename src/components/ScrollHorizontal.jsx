import React, { Component } from 'react'
import HorizontalScroll from 'react-scroll-horizontal'

class ScrollingHorizontally extends Component {
    render() {
        const child = { width: `300em`, height: `100%` }
        return (
            <body>
                <HorizontalScroll>
                    <div style={child} />
                </HorizontalScroll>
            </body>

        )
    }
}