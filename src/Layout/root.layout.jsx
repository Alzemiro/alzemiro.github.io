import Footer from "../components/footer.component.jsx";
import Sidebar from "../components/sidebar.component.jsx";
import { Grid, Flex, Box } from "@radix-ui/themes";

export function RootLayout({ children }) {
    return (
        <div>
            
            <Box >
                <Sidebar />
            </Box>

            <Box >
                <main>
                    {children}
                </main>
                <Footer />
            </Box>
            
        </div>

    )
}
