import React from 'react'

const Footer = () => {
      const today = new Date();
      return (
            <footer>
                  <h6 className="mt-5"><center>Copyright MARVEL &copy; {today.getFullYear()}</center></h6>
            </footer>
      )
}

export default Footer