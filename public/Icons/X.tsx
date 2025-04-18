import * as React from "react"

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            {...props}
        >
            <path
                d="M9.522 6.775L15.48 0h-1.412L8.895 5.883 4.765 0H0l6.247 8.895L0 16h1.412l5.461-6.212L11.236 16H16L9.522 6.775zM7.59 8.974l-.633-.886L1.92 1.04h2.168l4.064 5.688.633.886 5.283 7.394H11.9L7.589 8.974z"
                fill="#55BBFA"
            />
        </svg>
    )
}

export default XIcon
