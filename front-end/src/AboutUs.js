import { Link } from 'react-router-dom'
import './AboutUs.css'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
 const AboutUs = props => {
    return (
      <>
        <h1>Hi and welcome!</h1>
        <p>My name is Jaylyn Bido</p>
        <p>
          Check out the <Link to="/messages">messages page</Link>.
        </p>
      </>
    )
  }
  
  // make this component available to be imported into any other file
  export default AboutUs