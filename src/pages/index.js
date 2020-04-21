import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import {SEO} from "../components/SEO"
import Section from "../styles/Section"
import YouTube from "../components/YouTube"
import SectionHeader from "../styles/SectionHeader"
import {usePosts, useEpisode, usePlaylist} from "../hooks"
import FeaturedPosts from "../components/Posts/FeaturedPosts"
import FeaturedPlaylist from "../components/Playlists/FeaturedPlaylist"

const MoreButton = styled(Link)`
    font-family: "Patua One";
    justify-self: end;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    color: ${({theme, secondary}) =>
        secondary ? theme.colors.white : theme.colors.red};
    background: ${({theme, secondary}) =>
        secondary ? theme.colors.red : theme.colors.white};
`

const PostsSection = styled.div`
    display: grid;
    gap: 2rem;
`

const EpisodesSection = styled.div`
    justify-self: center;
    display: grid;
    gap: 2rem;
    width: 60%;
`

const PlaylistsSection = styled.div`
    justify-self: center;
    display: grid;
    gap: 2rem;
`

const IndexPage = () => {
    const posts = usePosts({limit: 3})
    const episode = useEpisode()
    const playlist = usePlaylist({name: "Daily Texas Country"})

    return (
        <>
            <SEO />

            <Section color="white">
                <PostsSection>
                    <SectionHeader>Latest Posts</SectionHeader>
                    <FeaturedPosts posts={posts} />
                    <MoreButton to="/posts" secondary>
                        READ MORE
                    </MoreButton>
                </PostsSection>
            </Section>

            <Section color="red">
                <EpisodesSection>
                    <SectionHeader>Episodes</SectionHeader>
                    <YouTube id={episode.videoId} />
                    <MoreButton to="/episodes">WATCH MORE</MoreButton>
                </EpisodesSection>
            </Section>

            <Section color="white">
                <PlaylistsSection>
                    <FeaturedPlaylist playlist={playlist} />
                    <MoreButton to="/playlists" secondary>
                        HEAR MORE
                    </MoreButton>
                </PlaylistsSection>
            </Section>
        </>
    )
}

export default IndexPage
