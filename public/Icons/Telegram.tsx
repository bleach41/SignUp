import * as React from "react"

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={18}
            viewBox="0 0 20 18"
            fill="none"
            {...props}
        >
            <path
                d="M1.375 7.749c5.369-2.54 8.949-4.215 10.74-5.024C17.229.415 18.292.014 18.985 0c.152-.003.493.038.713.233.186.164.238.386.262.541.025.156.055.51.031.788-.277 3.162-1.476 10.837-2.086 14.379-.259 1.498-.767 2-1.259 2.05-1.07.107-1.882-.767-2.917-1.505-1.621-1.154-2.537-1.872-4.11-2.998-1.818-1.301-.64-2.016.396-3.185.272-.306 4.984-4.96 5.075-5.383.011-.053.022-.25-.086-.353-.107-.104-.266-.069-.381-.04-.163.04-2.752 1.898-7.768 5.575-.735.548-1.4.815-1.997.801-.658-.015-1.923-.403-2.863-.735C.842 9.76-.075 9.545.005 8.854c.041-.36.498-.729 1.37-1.105z"
                fill="#28A8EA"
            />
        </svg>
    )
}

export default TelegramIcon
