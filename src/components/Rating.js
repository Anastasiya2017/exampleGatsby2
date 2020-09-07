import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledRating = styled.h2`
    text-align: center;
`

const Empty = styled.span`
    opacity: 20%;
`

const Rating = ({rating}) => {
    const numWhiskeys = Math.floor(rating)
    const numBeers = Number.isInteger(rating) ? 0 : 1
    const numEmpties = 5 - numWhiskeys - numBeers

    const whiskeys = new Array(numWhiskeys).fill("🥃")
    const beers = new Array(numBeers).fill("🍺")
    const empties = new Array(numEmpties).fill("🥃")

    return (
        <StyledRating>
            <span>RATING: </span>

            {whiskeys.map((w, index) => (
                <span key={index}>{w}</span>
            ))}

            {beers.map((b, index) => (
                <span key={index}>{b}</span>
            ))}

            {empties.map((e, index) => (
                <Empty key={index}>{e}</Empty>
            ))}
        </StyledRating>
    )
}

Rating.propTypes = {
    rating: PropTypes.oneOf([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]),
}

export default Rating
