import * as React from "react"

function Menu(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={22}
            height={14}
            viewBox="0 0 22 14"
            fill="none"
            rotate={props.rotate}
            style={{
                transform: props.rotate ? `rotate(${props.rotate})` : undefined,
                transformOrigin: "center",
            }}
            {...props}
        >
            <g
                stroke="#919399"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9 1h12M1 7h20M9 13h12M5 11L1 7l4-4" />
            </g>
        </svg>
    )
}

export default Menu
