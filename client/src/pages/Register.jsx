import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow,Logo } from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>Register</h4>

        <FormRow type='text' name='name' defaultValue='join' />
        <FormRow
          type='text'
          name='lastName'
          labelText='last name'
          defaultValue='smith'
        />
        <FormRow type='text' name='location' defaultValue='Earth' />
        <FormRow type='email' name='email' defaultValue='join@gmail.com' />
        <FormRow type='password' name='password' defaultValue='1009939' />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
