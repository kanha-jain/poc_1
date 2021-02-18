import navStyles from '../styles/Nav.module.scss'
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <Link href="/"><span className={navStyles.brand}>POC</span></Link>
            <ul className={navStyles.nav_menu}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/cars">Cars</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
