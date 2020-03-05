import React from "react"
import {Link} from "gatsby"
import styled from "styled-components"
import Section from "../styles/Section"
import Posts from "../components/Posts"
import YouTube from "../components/YouTube"
import SectionHeader from "../styles/SectionHeader"
import {Meta, Twitter, Facebook} from "../components/SEO"
import {usePosts, useEpisode, usePlaylist} from "../hooks"
import FeaturedPlaylist from "../components/Playlists/FeaturedPlaylist"

const MoreButton = styled(Link)`
    justify-self: end;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    font-weight: 700;
    color: ${({theme, secondary}) =>
        secondary ? theme.colors.white : theme.colors.red};
    background: ${({theme, secondary}) =>
        secondary ? theme.colors.red : theme.colors.white};
`

const BlogSection = styled.div`
    display: grid;
    gap: 1rem;
`

const EpisodesSection = styled.div`
    justify-self: center;
    display: grid;
    gap: 1rem;
`

const PlaylistsSection = styled.div`
    justify-self: center;
    display: grid;
    gap: 1rem;
`

const IndexPage = () => {
    const posts = usePosts({limit: 3})
    const episode = useEpisode()
    const playlist = usePlaylist({name: "Daily Texas Country"})

    return (
        <>
            <Meta title="DTXC" />
            <Facebook />
            <Twitter />

            <Section color="white">
                <BlogSection>
                    <SectionHeader>latest posts</SectionHeader>
                    <Posts posts={posts} />
                    <MoreButton secondary to="/blog">
                        read more
                    </MoreButton>
                </BlogSection>
            </Section>

            <Section color="red">
                <EpisodesSection>
                    <SectionHeader>episodes</SectionHeader>
                    <YouTube id={episode.videoId} />
                    <MoreButton to="/episodes">watch more</MoreButton>
                </EpisodesSection>
            </Section>

            <Section color="white">
                <div>
                    <SectionHeader>store</SectionHeader>
                </div>
            </Section>

            <Section color="red">
                <PlaylistsSection>
                    <FeaturedPlaylist playlist={playlist} />
                    <MoreButton to="/playlists">hear more</MoreButton>
                </PlaylistsSection>
            </Section>
        </>
    )
}

export default IndexPage
