import { Link, useRouteError } from 'react-router-dom'
const Error = () => {
  const error = useRouteError()
  return (
    <div>
      <h1>Error</h1>
      <Link to='/dashboard'>Go back Home</Link>
    </div>
  )
}
export default Error
