import { FooterIconprops } from '../interface/footer-icon-interface';

export default function FooterIcon({ ...props }: FooterIconprops) {
  return <img src={props.path} alt={props.alt} />;
}
