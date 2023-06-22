import { NavlinkProps } from '../interface/navlink-interface';

export default function NavLink({ ...props }: NavlinkProps) {
  return (
    <>
      <li className="list-none">
        <a href={props.to} className="no-underline">
          {props.children}
        </a>
      </li>
    </>
  );
}
