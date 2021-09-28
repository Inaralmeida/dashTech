import React, { useState } from 'react'
import Aside from '../Aside/Aside'
import DashContent from '../DashContent/DashContent'
import DashHeader from '../DashHeader/DashHeader'
import * as S from './Layout.styles'

const Layout = () => {
    const [asideView, setAsideView] = useState(true)
    return (
        <S.Container asideView={asideView}>
            
            <section className="aside">
            <Aside asideView={asideView}/>

            </section>
            <section className="header">
            <DashHeader
            viewAside={()=> setAsideView(!asideView)}
            />

            </section>
            <section className="content">
            <DashContent/>

            </section>
        </S.Container>
    )
}

export default Layout
