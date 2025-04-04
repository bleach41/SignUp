import * as React from "react"

function FavoriteIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={20}
            viewBox="0 0 18 20"
            fill="none"
            style={{
                width: '18px',
                height: '20px'
            }}
            {...props}
        >
            {/* Marcador (fondo) */}
            <path
                d="M0 3.754A3.754 3.754 0 013.754 0h10.492A3.754 3.754 0 0118 3.754v14.32c0 .906-.932 1.512-1.76 1.144l-2.232-.992a1.251 1.251 0 00-1.016 0l-3.484 1.548a1.252 1.252 0 01-1.016 0l-3.484-1.548a1.251 1.251 0 00-1.016 0l-2.233.992A1.251 1.251 0 010 18.075V3.754z"
                fill="url(#paint0_linear_1672_161)"
                fillOpacity={0.4}
            />

            {/* Corazón centrado y bajado un poco */}
            <path
                d="M13.687 8.140C13.689 8.871 13.405 9.574 12.894 10.098C12.888 10.109 12.880 10.120 12.870 10.129L9.556 13.443C9.483 13.516 9.397 13.574 9.302 13.613C9.208 13.652 9.106 13.672 9.003 13.672C8.901 13.672 8.799 13.652 8.704 13.613C8.610 13.574 8.523 13.516 8.451 13.443L5.136 10.129C4.742 9.736 4.473 9.235 4.364 8.689C4.255 8.144 4.310 7.578 4.523 7.064C4.736 6.549 5.096 6.110 5.559 5.801C6.022 5.492 6.566 5.327 7.123 5.328H7.125C7.772 5.328 8.399 5.551 8.901 5.960C8.929 5.982 8.964 5.995 9.000 5.995C9.036 5.995 9.071 5.982 9.099 5.960C9.511 5.623 10.010 5.410 10.539 5.346C11.067 5.281 11.603 5.369 12.083 5.597C12.564 5.826 12.970 6.186 13.254 6.636C13.538 7.086 13.688 7.608 13.687 8.140Z"
                fill="white"
            />

            <defs>
                <linearGradient
                    id="paint0_linear_1672_161"
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

export default FavoriteIcon