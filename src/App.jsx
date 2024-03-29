import Routes from "./routes/routes.jsx";
import { RootLayout } from "./Layout/root.layout.jsx";
import { Theme } from "@radix-ui/themes"

function App() {
    return (
        <Theme scaling="95%">
            <RootLayout>
                <Routes />
            </RootLayout>
        </Theme>
    )
}

export default App
