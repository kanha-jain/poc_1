import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}><span>POC</span> App</h1>
            <p className={headerStyles.description}>Header of the app</p>
        </div>
    )
}

export default Header
