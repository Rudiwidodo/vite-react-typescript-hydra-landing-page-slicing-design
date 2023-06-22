import { FooterLinkProps } from '../interface/footer-link-interface';

export default function FooterLink({ ...props }: FooterLinkProps) {
  return (
    <a
      href="#"
      className="text-white font-montserrat-bold text-[16px] no-underline"
    >
      {props.children}
    </a>
  );
}
