import theme from "./theme"
import { ColorModeScript } from "@chakra-ui/react"
import Header from './Header'

const Layout = ({children}) => {
    
    return (
        <div>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout
