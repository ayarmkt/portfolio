import classes from './Hero.module.css';

const Hero = () => {
  return (
    <div className={classes.about} id='about'>
      <h1>Aya Takamura</h1>
      <p>
        <span className={classes.colorText}>
          a Brand Marketer-turned-Frontend Developer
        </span>
        who cares about user experience when building products. I am passionate
        about understanding customers’ needs. I adopt my user-centric mindset to
        create easy-to-use applications.
      </p>
    </div>
  );
};

export default Hero;
