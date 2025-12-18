import Button from "../../components/Button";
import './Newletter.css'

const Newsletter = () => {
  return (
    <>
      <section className="Newsletter">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <h1>Join Our Newsletter</h1>
            <p>Subscribe our newsletter to get our latest update & news.</p>
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email address"
            />
            <Button variant="black" size="lg">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter