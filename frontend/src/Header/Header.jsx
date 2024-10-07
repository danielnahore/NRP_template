import styles from './Header.module.css'
import PropTypes from 'prop-types'
function Header(props){

    return (
      <header style={styles} className='header'>
        <h1>{props.message}</h1>
      </header>
    );
}

Header.propTypes = {
    message: PropTypes.string,
}

Header.defaultProps = {
    message: 'Guest',
}

export default Header