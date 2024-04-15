import Footer from "../components/footer.component.jsx";
import Sidebar from "../components/sidebar.component.jsx";
import { Box } from "@radix-ui/themes";
import "./background.css"


export function RootLayout({ children }) {
    return (
        <div>
            
            <Box >
                <Sidebar />
            </Box>

            <Box >
                <div className="bg"/>
                <main>
                    {children}
                </main>
                <Footer />
            </Box>
            
        </div>

    )
}
