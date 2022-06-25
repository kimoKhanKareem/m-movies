// import Image from 'next/image';
import styled from 'styled-components'
import {  BsSearch  } from 'react-icons/bs';


function Header() {
    return (
        <NavBar>
            <div>
                <img src="https://rb.gy/ulxxee" width={200} height={100}  alt="logo"/>
            </div>

            <ul>
                <li>Home</li>
                <li>Tv Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
            </ul>

            <div className='icons'>
                <BsSearch />
            </div>
        </NavBar>
    )
}

//  styled-components
const NavBar = styled.header`
width: 100%;
display: flex;
align-items: center;
ul{
    display: flex;
    li{
        margin-left: 2rem;
    }
}
.icons{
    display: flex;
    justify-content: center;
}



`;
export default Header