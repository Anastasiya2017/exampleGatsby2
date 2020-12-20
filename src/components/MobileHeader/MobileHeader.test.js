import userEvent from "@testing-library/user-event"
import MobileHeader from "components/MobileHeader"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"
import {render, screen} from "test-utils/render"

jest.mock("hooks")

const mockOpenAppCtx = generateAppCtx({open: true})
const mockClosedAppCtx = generateAppCtx()

test("shows closed mobile header", () => {
    useApp.mockReturnValue(mockClosedAppCtx)

    render(<MobileHeader />)
    expect(screen.getByLabelText("DTXC")).toHaveAttribute("href", "/")
})

test("shows open mobile header", () => {
    useApp.mockReturnValue(mockOpenAppCtx)

    render(<MobileHeader />)
    expect(screen.getByLabelText("DTXC")).toHaveAttribute("href", "/")
})

test("closes mobile navigation", () => {
    useApp.mockReturnValue(mockOpenAppCtx)

    render(<MobileHeader />)

    userEvent.click(screen.getByLabelText("DTXC"))

    expect(mockOpenAppCtx.setOpen).toHaveBeenCalledTimes(1)
    expect(mockOpenAppCtx.setOpen).toHaveBeenCalledWith(false)
})
