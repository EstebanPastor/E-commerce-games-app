import nf from "./notfound.css"

const NotFound = () => {
  return (
    <>
      {" "}
      <div className="container-nf">
        <h1 className="error-code-nf">404</h1>
        <p className="error-message-nf">
          La página que estás intentando buscar no existe.
        </p>
        <a href="/" className="back-link-nf">
          Volver a la página principal
        </a>
      </div>
    </>
  );
};

export default NotFound;
