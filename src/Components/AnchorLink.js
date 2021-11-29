import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const A = styled.a``

function AnchorLink({ children, route}) {
    return (
        <Link href={route} >
            <A>
                {children}
            </A>
        </Link>
    )
}

export default AnchorLink
