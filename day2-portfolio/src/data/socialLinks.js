import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';

/**
 * One list of social links, used by both the Contact section and the Footer.
 * It used to live inside Contact.js, so adding a link meant remembering to
 * update two places.
 *
 * `Icon` holds the component itself rather than a ready-made <FaGithub />
 * element, so each place that uses the list can size the icon to suit it:
 *   <Icon size="2em" />
 */
export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/Sridhar7670', Icon: FaGithub },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sridhar-reddy-37b63a203/',
    Icon: FaLinkedinIn,
  },
  { label: 'Instagram', href: 'https://www.instagram.com/sridhar.rdy/', Icon: FaInstagram },
  { label: 'Twitter / X', href: 'https://x.com/Sridhar67956954', Icon: FaTwitter },
  { label: 'Facebook', href: 'https://www.facebook.com/sridhar.nani.129', Icon: FaFacebook },
];
