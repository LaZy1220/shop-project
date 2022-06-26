import './Footer.css'
export function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__line'></div>
            <span className='footer__text'> ©{new Date().getFullYear()} Copyright Text</span>
            <a className='footer__link' href='https://github.com/LaZy1220/shop-project' target='blank'>Git</a>
        </footer>
    )
}