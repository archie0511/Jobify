
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/Testing' 
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className="container page">
        {/* info */}
        <div className='info'>
        <h1>
            job <span>tracking</span> app
        </h1>
            <p>
                afbauiwhfwanfiafnafnh
                afnawienfkalflkaf
                afhniewafanfwfeawef
                afnawinfawifnaiwfemaw
            </p>
            <Link to='/register' className='btn btn-hero'>Login/Register
            </Link>
            </div>
        <img src={main} alt="job" className="img
         main-img" />
        </div>
    </Wrapper>
  )
}



export default Landing