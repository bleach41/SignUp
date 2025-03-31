import * as React from "react"

function Ball(props: React.SVGProps<SVGSVGElement>) {
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
                d="M2.675 13.989A7.947 7.947 0 007.53 16v-2.368a6.109 6.109 0 016.102-6.102h2.367a7.945 7.945 0 00-2.01-4.855L2.674 13.99z"
                fill="#919399"
            />
            <path
                d="M13.632 8.47a5.168 5.168 0 00-5.162 5.162V16a7.955 7.955 0 005.197-2.333A7.956 7.956 0 0016 8.47h-2.368zM13.325 2.011A7.944 7.944 0 008.47 0v2.368A6.109 6.109 0 012.368 8.47H0a7.944 7.944 0 002.011 4.855L13.325 2.01z"
                fill="#919399"
            />
            <path
                d="M2.368 7.53A5.168 5.168 0 007.53 2.368V0a7.955 7.955 0 00-5.197 2.333A7.955 7.955 0 000 7.53h2.368z"
                fill="#919399"
            />
        </svg>
    )
}

export default Ball
