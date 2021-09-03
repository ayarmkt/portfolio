import classes from './Contact.module.css';
import Card from '../../UI/Card/Card';
import H2 from '../../UI/H2/H2';

import { FaLinkedin, FaTwitterSquare, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      name: 'GitHub',
      link: '',
      icon() {
        return <FaGithub className={classes.icon} />;
      },
    },
    {
      name: 'LinkedIn',
      link: '',
      icon() {
        return <FaLinkedin className={classes.icon} />;
      },
    },
    {
      name: 'Twitter',
      link: '',
      icon() {
        return <FaTwitterSquare className={classes.icon} />;
      },
    },
  ];

  const contact = contactInfo.map((info) => (
    <div className={classes.info} key={info.name}>
      {info.icon()}
      <p className={classes.name}>{info.name}</p>
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
