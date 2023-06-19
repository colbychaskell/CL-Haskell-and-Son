import Container from 'react-bootstrap/Container'
import PropTypes from 'prop-types'

const TitledSection = ({ title, children }) => (
  <Container fluid className='pt-5 px-4 px-md-5'>
    <h1>{title}</h1>
        {children}
  </Container>
)

TitledSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
}

export default TitledSection