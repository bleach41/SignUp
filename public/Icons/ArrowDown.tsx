import * as React from "react"

export function ArrowDownIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={7}
            viewBox="0 0 10 7"
            fill="none"
            style={{ width: "28px", height: "28px" }}
            {...props}
        >
            <path
                d="M9 5.5l-4-4-4 4"
                stroke="#919399"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default ArrowDownIcon
