import React from 'react'
import * as S from './SectionHome.styles'
import logo from '../../assets/img/tech.svg'
const SectionHome = () => {
    return (
        <S.Container>
            <div>
                <section>
                <h2>Store Tech</h2>
                <img src={logo} alt="" />
                </section>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quam voluptates eum velit quisquam consequuntur porro. Repudiandae impedit, similique dicta dolorum soluta repellendus doloremque! Aut placeat nisi accusamus magnam consequuntur?</p>
            </div>
        </S.Container>
    )
}

export default SectionHome
