import {AppContext} from "context/app"
import {useContext} from "react"

const useApp = () => {
    const appCtx = useContext(AppContext)
    return appCtx
}

export default useApp
