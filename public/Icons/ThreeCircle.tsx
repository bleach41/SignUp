import * as React from "react"

function ThreeCircle(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 44 44"
            fill="none"
            style={{
                width: '44px',
                height: '44px',
            }}
            {...props}
        >
            <rect
                x={0.568275}
                y={0.568275}
                width={42.8634}
                height={42.8634}
                rx={11.4317}
                stroke="#303541"
                strokeWidth={1.13655}
            />
            <circle cx={22} cy={17} r={3} fill="#919399" />
            <circle cx={28} cy={27} r={3} fill="#919399" />
            <circle cx={16} cy={27} r={3} fill="#919399" />
        </svg>
    )
}

export default ThreeCircle
