import classes from './Contact.module.css';
import { useRef, useState, useLayoutEffect } from 'react';

import Card from '../../UI/Card/Card';
import H2 from '../../UI/H2/H2';
import { FaLinkedin, FaTwitterSquare, FaGithub, FaBlog } from 'react-icons/fa';

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
  {
    name: 'Blog',
    link: 'https://ayatakamura.hashnode.dev/',
    icon() {
      return <FaBlog className={`${classes.icon} ${classes.blog}`} />;
    },
  },
];

const Contact = () => {
  const ref = useRef();
  const [fadeIn, setFadeIn] = useState(false);

  const onScroll = () => {
    const topPos = ref.current.offsetTop;
    const bottomPos = ref.current.offsetTop + ref.current.offsetHeight;

    if (
      topPos < window.scrollY + window.innerHeight &&
      bottomPos > window.scrollY
    ) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const contact = contactInfo.map((info) => (
    <div className={classes.info} key={info.name}>
      <a className={classes.link} href={info.link} target='_blank'>
        {info.icon()}
        <p className={classes.name}>{info.name}</p>
      </a>
    </div>
  ));

  return (
    <Card className={classes.contact} id='contact'>
      <H2>Contact Me</H2>
      <p>Feel free to contact me for further information!</p>
      <div
        className={`${classes['contact-list']} ${fadeIn ? classes.fadein : ''}`}
        ref={ref}
      >
        {contact}
      </div>
    </Card>
  );
};

export default Contact;
