import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to Movie Browser" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <h2>Movie Browser:</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              possimus ut corporis adipisci in, doloremque iusto sunt voluptatum
              molestias, tenetur facere, pariatur ducimus ad excepturi ipsum
              perferendis accusamus. Non, repudiandae.
            </p>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              possimus ut corporis adipisci in, doloremque iusto sunt voluptatum
              molestias, tenetur facere, pariatur ducimus ad excepturi ipsum
              perferendis accusamus. Non, repudiandae.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
