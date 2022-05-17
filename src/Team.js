import Emily from "./images/image-emily.jpg";
import Jennie from "./images/image-jennie.jpg";
import Thomas from "./images/image-thomas.jpg";
export default function Team() {
  return (
    <>
      <section className= 'Testimonials'>
      <h3> Client testimonials</h3>
      <div className="testimonials">
        <div>
       
          <img src={Emily} alt="" />
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>
              Emily R. <br />
              <span>Marketing Director</span>
          </h4>
          
        </div>
        <div>
          <img src={Jennie} alt="" />
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4>
              Thomas S. <br />
              <span> Chief Operating Officer</span>
          </h4>
         
        </div>
        <div>
          <img src={Thomas} alt="" />
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>
              Jennie F.<br />
              <span> Business Owner</span>
          </h4>
          

        </div>
      </div>
   </section>
    </>
  );
}
