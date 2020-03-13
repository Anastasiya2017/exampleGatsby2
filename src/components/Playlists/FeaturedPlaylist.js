import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../../styles/Image"

const StyledFeaturedPlaylist = styled.article`
    display: grid;
    justify-content: center;
    justify-items: center;
    grid-template-columns: repeat(2, auto);
    gap: 2rem;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-template-columns: none;
        grid-template-rows: repeat(2, auto);
    }
`

const PlaylistInfo = styled.div`
    max-width: 40rem;
    display: grid;
    align-content: center;
    gap: 1rem;

    h1 {
        font-size: 2rem;
        margin: 0;
    }

    span {
        font-size: 1.1rem;
        line-height: 1.5;
    }
`

const PlaylistImage = styled(Image)`
    width: 300px;
`

const FeaturedPlaylist = ({playlist}) => {
    const {name, description} = playlist
    const url = playlist.external_urls.spotify
    const image = playlist.image.localFile.childImageSharp.fluid

    return (
        <StyledFeaturedPlaylist>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <PlaylistImage fluid={image} />
            </a>

            <PlaylistInfo>
                <h1>{name}</h1>
                <span>{description}</span>
            </PlaylistInfo>
        </StyledFeaturedPlaylist>
    )
}

FeaturedPlaylist.propTypes = {
    playlist: PropTypes.object.isRequired,
}

export default FeaturedPlaylist
