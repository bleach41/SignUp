import * as React from "react"

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={8}
            height={17}
            viewBox="0 0 8 17"
            fill="none"
            {...props}
        >
            <path
                d="M4.836 16.364V8.18h2.152l.285-2.82H4.836L4.84 3.95c0-.736.066-1.13 1.072-1.13h1.346V0H5.106C2.52 0 1.61 1.368 1.61 3.668v1.693H0v2.82h1.611v8.183h3.225z"
                fill="#7289DA"
            />
        </svg>
    )
}

export default FacebookIcon
