import React,{useState} from 'react'

import PropTypes from 'prop-types'
import checkPropTypes from 'prop-types/checkPropTypes';
import { Link } from 'react-router-dom';



export default function Navbar(props) {
    checkPropTypes(
        Navbar.propTypes,
        props,
        'prop',
        'Navbar'
      );

      const toggleStyle=()=>{
        if(myStyle.color=='white'){
            setMyStyle({
                color: 'black',
                backgroundColor:'white'
            })
            setBtnText('Enable Dark Mode');
        }
        else{
            setMyStyle({
                color: 'white',
                backgroundColor:'black',
         
            })
            setBtnText('Enable Light Mode');
        }
        }

        const [myStyle,setMyStyle] = useState({
            color: 'white',
            backgroundColor:'black'
        })
        const [btnText,setBtnText]=useState('Enable Light Mode')
      
    console.log('Type of title:', typeof props.title);
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid" >
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        </ul>
        </div>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" role="switch" id="switchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="switchCheckDefault" > Change Mode</label>
</div>
    </div>
  </nav>
  )
}


Navbar.propTypes={
    title: PropTypes.string.isRequired,
};