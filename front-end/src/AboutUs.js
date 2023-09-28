import { Link } from 'react-router-dom'
import './AboutUs.css'
import me from './me.jpg'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
 const AboutUs = props => {
    return (
      <>
        <h1>Hi, and welcome!</h1>
        <br></br>
        <p>
            My name is Jaylyn Bido and I am currently a senior at New York University. I am majoring in Computer Science,
            and I have three minors in Art History, Psychology, and Web Prorgramming and Applications. I'd love to call
            New York City home after graduation, but I'm originally from Tampa, Florida and I was raised by Puerto Rican and 
            Dominican parents. I have three sisters and a dog named Mico!
        </p>
        <br></br>
        <p>
            A really big hobby of mine is photography. I'm taking a class through NYU Tandon called "Contemporary Techniques
            in Digital Photography and Imaging" which explores the history and techniques of shooting and editing photos. 
            Photography has been a creative medium I've enjoyed since I was a little girl, and taking a class that goes into the 
            minute details of it has been extremely fulfilling! 
        </p>
        <br></br>
        <img src={me} alt='photo of jaylyn bido' width="276px" height="357px"/>
        <p>
          Check out the <Link to="/messages">messages page</Link>.
        </p>
      </>
    )
  }
  
  // make this component available to be imported into any other file
  export default AboutUs