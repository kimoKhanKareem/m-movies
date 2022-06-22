import styled from "styled-components"
import Image from "next/image"


const UpHeaderStyled = styled.header`
    background-color: red;
`

function Header() {
    return (
        <UpHeaderStyled>
            <Image  layout='fill' src="https://cdn.imgbin.com/11/15/15/imgbin-m-net-movies-film-television-channel-others-yHifwYKg28Q7XfjYGA4jLR1E5.jpg"  width={200} heigth={50} alt="..."/>
        </UpHeaderStyled>
    )
}

export default Header