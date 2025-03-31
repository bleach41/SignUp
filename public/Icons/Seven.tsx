import * as React from "react"

export function SevenIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M17.883 4.402l-1.846-2.228a.693.693 0 00-.74-.115l-.738.343a8.403 8.403 0 01-5.664.457c-.8-.228-1.662-.285-2.462-.285H2.616c-.37 0-.616.228-.616.571v6.628c0 .342.246.571.616.571h2.462c.37 0 .616-.229.616-.571 0-.915.8-1.657 1.847-1.657h3.118l-.923 1.028c-2.155 2.4-3.694 5.142-4.556 8.17 0 .115 0 .343.123.457.123.115.308.229.493.229h6.67c.37 0 .616-.229.616-.571 0-3.143.923-6.228 2.647-8.97l2.154-3.429c.185-.171.124-.4 0-.628z"
                fill="url(#paint0_radial_1672_30)"
            />
            <defs>
                <radialGradient
                    id="paint0_radial_1672_30"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 15.8489 -19.813 0 9.96 2)"
                >
                    <stop stopColor="#73DEFB" />
                    <stop offset={0.484375} stopColor="#28C5F0" />
                    <stop offset={1} stopColor="#0D91B5" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export default SevenIcon
