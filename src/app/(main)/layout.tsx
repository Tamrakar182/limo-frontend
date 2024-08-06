import Footer from "@modules/layout/templates/footer"
import NavBar from "@modules/layout/templates/nav"
import MobileFooter from "@/modules/layout/templates/mobile-footer"

export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
            <MobileFooter />
        </>
    )
}
