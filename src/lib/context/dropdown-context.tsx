"use client"
import useToggleState from "@lib/hooks/useToggleState"
import { createContext, useContext, useEffect, useState } from "react"

interface DropdownContext {
  state: boolean
  open: () => void
  timedOpen: () => void
  close: () => void

  servicesDropdown: boolean
  handleServicesDropdown: (value: boolean) => void

  fleet: boolean
  handleFleet: (value: boolean) => void
}

type Timer = ReturnType<typeof setTimeout>;

export const DropdownContext = createContext<DropdownContext | null>(
  null
)

export const DropdownProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const { state, close, open } = useToggleState()

  const [servicesDropdown, setServicesDropdown] = useState(false)

  const [fleet, setFleet] = useState(false)

  const [activeTimer, setActiveTimer] = useState<Timer | undefined>(undefined)

  const timedOpen = () => {
    open()
    const timer = setTimeout(close, 5000)
    setActiveTimer(timer)
  }

  const openAndCancel = () => {
    if (activeTimer) {
      clearTimeout(activeTimer)
    }
    open()
  }

  const handleServicesDropdown = (value: boolean) => {
    setServicesDropdown(value)
  }

  const handleFleet = (value: boolean) => {
    setFleet(value)
  }

  useEffect(() => {
    return () => {
      if (activeTimer) {
        clearTimeout(activeTimer)
      }
    }
  }, [activeTimer])

  return (
    <DropdownContext.Provider
      value={{
        state,
        close,
        open: openAndCancel,
        timedOpen,
        handleServicesDropdown,
        servicesDropdown,
        fleet,
        handleFleet
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}

export const useDropdown = () => {
  const context = useContext(DropdownContext)

  if (context === null) {
    throw new Error(
      "useDropdown must be used within a CartDropdownProvider"
    )
  }

  return context
}
