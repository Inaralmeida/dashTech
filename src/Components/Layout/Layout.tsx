import React from 'react'
import Aside from '../Aside/Aside'
import DashContent from '../DashContent/DashContent'
import DashHeader from '../DashHeader/DashHeader'
import * as S from './Layout.styles'

const Layout = () => {
    return (
        <S.Container>
            <section className="aside">
            <Aside/>

            </section>
            <section className="header">
            <DashHeader/>

            </section>
            <section className="content">
            <DashContent/>

            </section>
        </S.Container>
    )
}

export default Layout
