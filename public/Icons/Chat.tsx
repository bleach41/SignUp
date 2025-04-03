import * as React from "react"

function ChatIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={44}
            viewBox="0 0 44 44"
            fill="none"
            style={{
                width: '100%',
                height: '100%',
            }}
            {...props}
        >
            <circle
                cx={22}
                cy={22}
                r={21.2}
                fill="url(#HLwl5k6)"
                stroke="#3F4655"
                strokeWidth={1.6}
            />
            <path
                d="M31 20.875c0 4.35-4.03 7.875-9 7.875-.891.001-1.78-.114-2.64-.344-.657.333-2.166.972-4.704 1.388-.225.036-.396-.198-.307-.407.398-.94.758-2.194.866-3.337C13.837 24.666 13 22.855 13 20.875 13 16.525 17.03 13 22 13s9 3.526 9 7.875zm-12.375 0a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0zm4.5 0a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0zM26.5 22a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                fill="#909298"
            />
        </svg>
    )
}

export default ChatIcon
