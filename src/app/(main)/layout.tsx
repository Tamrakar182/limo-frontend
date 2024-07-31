import Footer from "@modules/layout/templates/footer"
import NavBar from "@modules/layout/templates/nav"

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
        </>
    )
}
