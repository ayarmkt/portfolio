import classes from './Contact.module.css';
import Card from '../../UI/Card/Card';
import H2 from '../../UI/H2/H2';

import { FaLinkedin, FaTwitterSquare, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      name: 'GitHub',
      link: 'https://github.com/ayarmkt',
      icon() {
        return <FaGithub className={`${classes.icon} ${classes.github}`} />;
      },
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aya-t/',
      icon() {
        return <FaLinkedin className={`${classes.icon} ${classes.linkedin}`} />;
      },
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/ayarmkt_',
      icon() {
        return (
          <FaTwitterSquare className={`${classes.icon} ${classes.twitter}`} />
        );
      },
    },
  ];

  const contact = contactInfo.map((info) => (
    <div className={classes.info} key={info.name}>
      <a className={classes.link} href={info.link} target='_blank'>
        {info.icon()}
        <p className={classes.name}>{info.name}</p>
      </a>
      {/* <a href={info.link} /> */}
    </div>
  ));

  return (
    <Card className={classes.contact} id='contact'>
      <H2>Contact Me</H2>
      <p>Feel free to contact me for further information!</p>
      <div className={classes['contact-list']}>{contact}</div>
    </Card>
  );
};

export default Contact;
