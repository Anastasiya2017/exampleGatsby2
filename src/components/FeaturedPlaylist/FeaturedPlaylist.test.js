import {mockPlaylist} from "test-utils/mocks"
import {render, screen} from "test-utils/render"
import FeaturedPlaylist from "components/FeaturedPlaylist"

test("shows featured playlist", () => {
    render(<FeaturedPlaylist playlist={mockPlaylist} />)

    expect(screen.getByLabelText(mockPlaylist.name)).toHaveAttribute(
        "href",
        mockPlaylist.external_urls.spotify,
    )

    expect(screen.getByText(mockPlaylist.name).parentElement).toHaveAttribute(
        "href",
        mockPlaylist.external_urls.spotify,
    )

    expect(screen.getByText(mockPlaylist.description))
})
