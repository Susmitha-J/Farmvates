import React from 'react';

const ContactForm = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.sidebar}>
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>CUSTOMER SECTION</h3>
          <p style={styles.link}>Support</p>
          <p style={styles.link}>Login to webapp</p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>RESOURCES</h3>
          <p style={styles.link}>Privacy & terms</p>
          <p style={styles.link}>Cookie policy</p>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>RELATIONS</h3>
          <p style={styles.link}>Partners relations</p>
          <p style={styles.link}>Investors relations</p>
          <p style={styles.link}>For distributors</p>
        </div>
      </div>
      
      <div style={styles.container}>
        <h2 style={styles.heading}>Contact us</h2>
        <div style={styles.form}>
          <div style={styles.row}>
            <input type="text" placeholder="Name" style={styles.input} />
            <input type="text" placeholder="Company" style={styles.input} />
            <input type="email" placeholder="Email" style={styles.input} />
            <select style={styles.input}>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>
          <textarea
            placeholder="Tell us more about your crops and what pest issues you have here..."
            style={{ ...styles.input, ...styles.textarea }}
          ></textarea>
          <button style={styles.button}>Send message</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    background: 'linear-gradient(90deg, #004d40 40%, #e0e0e0 100%)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',   
    alignItems: 'flex-start',
    padding: '40px 0',
    gap: '50px',
    flexWrap: 'wrap',
  },
  sidebar: {
    position: 'relative',
    backgroundColor: '#dcdcdc', 
    padding: '30px 20px',
    borderRadius: '70px 0 70px 0', // Apply border-radius to top-left and top-right corners
    width: '250px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
}
,
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  sectionHeading: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#004d40',
    fontFamily: 'Dosis, sans-serif',
    marginBottom: '10px',
    textTransform: 'uppercase',
  },
  link: {
    fontSize: '16px',
    color: '#004d40',
    fontFamily: 'Dosis, sans-serif',
    margin: 0,
    cursor: 'pointer',
    textDecoration: 'none',
    padding: '5px 0',
  },
  container: {
    padding: '30px',
    borderRadius: '20px',
    maxWidth: '600px',
    width: '100%',
  },
  heading: {
    color: '#FFFFFF',
    fontSize: '58px',
    fontWeight: 'bold',
    marginBottom: '20px',
    fontFamily: 'Dosis, sans-serif',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  row: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap', // Allows wrapping on smaller screens
  },
  input: {
    padding: '12px',
    borderRadius: '15px',
    border: '1px solid #ccc',
    fontSize: '16px',
    outline: 'none',
    fontFamily: 'Dosis, sans-serif',
    backgroundColor: '#f0f0f0',
    flex: '1', // Ensures inputs take equal space
    minWidth: '250px', // Sets a minimum width for inputs
  },
  textarea: {
    resize: 'none',
    height: '100px',
  },
  button: {
    padding: '12px',
    borderRadius: '10px',
    border: 'none',
    color: '#FFFFFF',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: 'Dosis, sans-serif',
    alignSelf: 'center',
    width: '150px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s ease',
  },
};

// Adding a pseudo-element for the sidebar cut corner
styles.sidebar['::before'] = {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '50px',
  height: '50px',
  backgroundColor: '#a0d468',
  clipPath: 'polygon(0 0, 100% 0, 0 100%)', // Cut corner shape
};

export default ContactForm;
