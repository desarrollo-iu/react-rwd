import React from 'react';

export default ({ children }) => <p style={styles.text}>{children}</p>

const styles = {
  text: {
    textAlign: 'left',
    float: 'left',
    width: '50%',
    padding: 32,
    paddingTop: 16,
    boxSizing: 'border-box',
  }
};
