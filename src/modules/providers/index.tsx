"use client"
import { ReactNode } from "react"
import { SnackbarProvider } from "notistack"
import { SnackbarUtilsConfigurator } from "@modules/common/components/snackbar"

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
            {children}
        </SnackbarProvider>
    )
}
