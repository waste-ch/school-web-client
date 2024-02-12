import { Image } from "antd"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const history = useNavigate()
    return (
        <header className="header">
            <div className="logo">
                <Image
                    className='logo-class'
                    src={process.env.PUBLIC_URL + '/school_image.png'}
                    alt="Description of the image"
                    style={{ width: '100%' }}
                    preview={false}
                    onClick={() => history('/')}
                />
            </div>
            <div className="header-text">
                {/*<h1>education</h1>*/}
            </div>
        </header>
    )
}

export default Header