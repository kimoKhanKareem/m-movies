// import Image from 'next/image';
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs';
import { AiFillBell } from 'react-icons/ai';
import Link from 'next/link';



function Header() {
    return (
        <NavBar>
            <div className="rigth-nav">
                <div>
                    <img src="https://rb.gy/ulxxee" width={200} height={100} alt="logo" />
                </div>

                <ul>
                    <li>Home</li>
                    <li>Tv Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                </ul>

            </div>

            <div className='icons'>
                <BsSearch  style={{fontSize:'1.5rem'}} />
                <AiFillBell  style={{marginLeft: '10px', fontSize:'2rem'}} />
                <Link href="/account">
                    <img src="https://rb.gy/g1pwyx" alt="..." width={35} height={35}  style={{marginLeft: '10px'}} />
                </Link>
            </div>
        </NavBar>
    )
}

//  styled-components
const NavBar = styled.header`
display: flex;
align-items: center;
.rigth-nav{
    display: flex;
align-items: center;
    ul{
        display: flex;
        li{
            margin-left: 2rem;
            cursor: pointer;
            font-size: 1.5rem;
        }
    }
}
.icons{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
`;
export default Header