import Container from 'react-bootstrap/Container';

const MapLocation = () => {
  return (
    <Container fluid className='p-0 mx-5 d-lg-block d-none'>

      <div className="embed-responsive mb-auto">
        <iframe
          title="map"
          width="500"
          height='500'
          className='d-block embed-responsive-item mx-auto'
          loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/view?zoom=10&center=44.2245%2C-68.6778&key=AIzaSyApnPITKc7ruOYGRqgPsdba352tZvAIx-k">
        </iframe>
      </div>
    </Container>
  )
}

export default MapLocation