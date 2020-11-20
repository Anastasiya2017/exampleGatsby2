import Layout from "components/Layout"
import {useApp, useSiteMetadata} from "hooks"
import {render, screen} from "test-utils/render"
import {mockAppCtx, mockSiteMetadata} from "test-utils/mocks"

jest.mock("hooks")
useApp.mockReturnValue(mockAppCtx)
useSiteMetadata.mockReturnValue(mockSiteMetadata)

test("shows layout", () => {
    render(
        <Layout>
            <p>test</p>
        </Layout>,
    )

    expect(screen.getAllByLabelText("DTXC")).toHaveLength(2)
    expect(screen.getByText("test"))

    expect(
        screen.getAllByText("Daily Texas Country", {exact: false}),
    ).toHaveLength(2)
})
