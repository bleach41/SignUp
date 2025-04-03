import * as React from "react"

function Arrow(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            style={{
                width: "100%"
            }}
            fill="none"
            {...props}
        >
            <rect
                x={0.568275}
                y={0.568275}
                width={26.8635}
                height={26.8635}
                rx={13.4317}
                stroke="#434958"
                strokeWidth={1.13655}
            />
            <path
                d="M18 15.5l-4-4-4 4"
                stroke="#919399"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default Arrow
