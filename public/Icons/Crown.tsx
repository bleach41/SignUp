import * as React from "react"

function Crown(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width={20}
            height={16}
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g opacity={0.99}>
                <path
                    d="M2.354 13.537v1.85a.6.6 0 00.585.613h14.122a.6.6 0 00.585-.613v-1.85H2.354z"
                    fill="url(#paint0_radial_1672_759)"
                />
                <path
                    d="M19.73 2.56a.565.565 0 00-.682.037l-4.266 3.57a.632.632 0 00-.17.725c.064.156.097.321.097.493 0 .68-.528 1.233-1.179 1.233-.65 0-1.179-.553-1.179-1.233 0-.4.187-.778.501-1.01a.63.63 0 00.187-.774L10.524.339A.584.584 0 0010 0a.584.584 0 00-.524.339L6.96 5.6a.63.63 0 00.187.775c.314.231.5.608.5 1.009 0 .68-.528 1.233-1.178 1.233-.65 0-1.18-.553-1.18-1.233 0-.171.033-.337.099-.493a.632.632 0 00-.171-.725L.952 2.597a.565.565 0 00-.682-.038.626.626 0 00-.252.665l2.171 9.088h15.622l2.172-9.088a.627.627 0 00-.253-.665z"
                    fill="url(#paint1_radial_1672_759)"
                />
            </g>
            <defs>
                <radialGradient
                    id="paint0_radial_1672_759"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 2.43916 -18.9374 0 9.961 13.537)"
                >
                    <stop stopColor="#73DEFB" />
                    <stop offset={0.484375} stopColor="#28C5F0" />
                    <stop offset={1} stopColor="#0D91B5" />
                </radialGradient>
                <radialGradient
                    id="paint1_radial_1672_759"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(0 12.1958 -24.7662 0 9.95 0)"
                >
                    <stop stopColor="#73DEFB" />
                    <stop offset={0.484375} stopColor="#28C5F0" />
                    <stop offset={1} stopColor="#0D91B5" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export default Crown;
