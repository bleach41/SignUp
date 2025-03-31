import * as React from "react"

export function RecentIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
            {...props}
        >
            {/* Marcador (fondo) */}
            <path
                d="M0 3.754A3.754 3.754 0 013.754 0h10.492A3.754 3.754 0 0118 3.754v14.32c0 .906-.932 1.512-1.76 1.144l-2.232-.992a1.251 1.251 0 00-1.016 0l-3.484 1.548a1.252 1.252 0 01-1.016 0l-3.484-1.548a1.251 1.251 0 00-1.016 0l-2.233.992A1.251 1.251 0 010 18.075V3.754z"
                fill="url(#paint0_linear_1672_169)"
                fillOpacity={0.2}
            />

            {/* Flecha posicionada aún más abajo */}
            <path
                d="M13 13V12C13 9.79086 11.2091 8 9 8H5M5 8L8 11M5 8L8 5"
                stroke="#40CDF3"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <defs>
                <linearGradient
                    id="paint0_linear_1672_169"
                    x1={9}
                    y1={0}
                    x2={9}
                    y2={20}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#fff" stopOpacity={0.37} />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default RecentIcon