import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const styles = {
    container: {
      minHeight: 'calc(100vh - 50px)', // subtract the footer height from the viewport height
      paddingBottom: '10px', // add the footer height as padding to the bottom of the container
    },
    footer: {
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#3f3f3f',
      padding: '5px 0', // reduce the top and bottom padding values
    },
    icon: {
      fontSize: '1.5em',
      color: 'white',
      margin: '0 10px',
      cursor: 'pointer',
    },
    copyRight: {
      fontSize: '0.8em',
      color: 'white',
      marginTop: '0px',
    },
  };
  
  const Footer = () => {
    return (
      <div style={styles.container}>
        <footer style={styles.footer}>
          <div>
            <FontAwesomeIcon
              icon={faFacebookF}
              style={styles.icon}
              onClick={() => window.open('https://www.facebook.com')}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={styles.icon}
              onClick={() => window.open('https://www.instagram.com')}
            />
            <FontAwesomeIcon
              icon={faTwitter}
              style={styles.icon}
              onClick={() => window.open('https://www.twitter.com')}
            />
          </div> 
          <br />
          <br />
          <div style={styles.copyRight}>
            <div style={{color:'white'}}>© 2023 My Website. All rights reserved.</div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  