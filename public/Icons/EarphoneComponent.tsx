import { useState } from 'react';
import Earphone from './Earphone';

function EarphoneComponent() {
    const [iconColor, setIconColor] = useState("#62656E");

    return (
        <div
            onMouseEnter={() => setIconColor("#19A5CC")}
            onMouseLeave={() => setIconColor("#62656E")}
        >
            <Earphone color={iconColor} />
        </div>
    );
}

export default EarphoneComponent;