import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingBlock() {
    return (
        <ContentLoader
            className='pizza-block'
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="235" rx="3" ry="3" width="280" height="25" />
            <rect x="0" y="274" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="375" rx="3" ry="3" width="100" height="33" />
            <rect x="130" y="374" rx="24" ry="24" width="150" height="35" />
            <rect x="10" y="10" rx="59" ry="59" width="252" height="156" />
        </ContentLoader>
    )
}

export default LoadingBlock
