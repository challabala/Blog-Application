import { useRef, useEffect } from "react"

export default function Separator({ orientation = "horizontal", className = "", ...props }) {
    return (
        <div 
            className={`bg-border shrink-0 ${orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]"} ${className}`}
            {...props}
        />
    )
}
