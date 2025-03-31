import * as React from "react"

function Search(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M15.9 8.583a7.317 7.317 0 11-14.633 0 7.317 7.317 0 0114.634 0zM17.332 17.333l-1.666-1.667"
                stroke="#919399"
                strokeWidth={1.2}
            />
        </svg>
    )
}

export default Search
