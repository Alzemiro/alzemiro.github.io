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

            <Box className="bg">
                <main className="mt-8 md:mt-0">
                    {children}
                </main>
                <Footer />
            </Box>
            
        </div>

    )
}
