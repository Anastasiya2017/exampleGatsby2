import {useSiteMetadata} from "hooks"
import Copyright from "components/Copyright"
import {render, screen} from "test-utils/render"
import {mockSiteMetadata} from "test-utils/mocks"

jest.mock("hooks")
useSiteMetadata.mockReturnValue(mockSiteMetadata)

test("shows copyright", () => {
    render(<Copyright />)

    const year = new Date().getFullYear().toString()
    expect(screen.getByText(`© ${year} ${mockSiteMetadata.title}`))
})
