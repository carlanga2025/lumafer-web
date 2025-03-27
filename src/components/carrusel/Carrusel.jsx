

const Carrusel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide mt-0" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://www.cliniem.com/wp-content/uploads/2022/03/FACIAL-10_RINOPLASTIA_M.jpg"
              className="d-block w-100"
              style={{ height: "700px", width: "100%", objectFit: "cover", objectPosition: "50% 70%" }}
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.cliniem.com/wp-content/uploads/2022/04/RINOPLASTIA_1-1.jpg"
              className="d-block w-100"
              style={{ height: "700px", objectFit: "cover", objectPosition: "center" }}
              alt="Slide 2"
            />
          </div>
        </div>
        <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
          <h2 className="display-4 fw-bold text-secondary">Bienvenidos a LUMAFER</h2>
          <p className="fs-3 fw-bold text-primary">Nosotros cuidamos la salud de tus oidos nariz y garganta.</p>
        </div>
        <button className="carousel-control-prev custom-carousel-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next custom-carousel-btn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carrusel