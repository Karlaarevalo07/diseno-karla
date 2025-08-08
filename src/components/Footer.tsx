const Footer = () => {
  return (
    <footer id="contacto" className="bg-donas mt-auto">
  <div className="container py-4">
    <div className="row gy-3 align-items-center">
      <div className="col-12 col-md-6 text-center text-md-start">
        <small className="text-dark fw-semibold">
          © {new Date().getFullYear()} Donas Karla — Todos los derechos reservados
        </small>
      </div>

      <div className="col-12 col-md-6">
        <div className="d-flex justify-content-center justify-content-md-end gap-3 fs-4">
          <a
            className="text-dark"
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="text-dark"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            className="text-dark"
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="X"
          >
            <i className="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
