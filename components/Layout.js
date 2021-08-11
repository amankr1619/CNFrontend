import theme from "./theme"
import { ColorModeScript } from "@chakra-ui/react"

const Layout = ({children}) => {
    return (
        <div>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <main>{children}</main>
        </div>
    )
}

export default Layout
