import styles from './About.module.css';
import ProfilePic from '../../assets/profile-pic.png';
import Card from '../../UI/Card';

const About = () => {
  return (
    <Card className={styles.about} id='about'>
      <h1 className={styles.title}>Hi, I'm Aya</h1>
      <div className={styles.text}>
        <p>I am a front-end developer from Tokyo, Japan.</p>
        <p>
          I love to write clean code and I'm passionate about making
          user-friendly product.
        </p>
        <p>
          Previously as a Marketer for a long-selling FMCG brand, I care so much
          about consumer values and user experience.
        </p>

        <p>Download My Resume!</p>
      </div>
      <div className={styles['profile-pic']}>
        <img src={ProfilePic} alt='Profile' />
      </div>
    </Card>
  );
};

export default About;
