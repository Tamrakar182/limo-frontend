"use client"
import { ReactNode } from "react"
import { SnackbarProvider } from "notistack"
import { SnackbarUtilsConfigurator } from "@modules/common/components/snackbar"
import { DropdownProvider } from "@/lib/context/dropdown-context"
import { MobileMenuProvider } from "@/lib/context/mobile-menu-context"

interface Props {
    children: ReactNode
}

export default function Providers({ children }: Props) {
    return (
        <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <SnackbarUtilsConfigurator />
            <MobileMenuProvider>
                <DropdownProvider>
                    {children}
                </DropdownProvider>
            </MobileMenuProvider>
        </SnackbarProvider>
    )
}
