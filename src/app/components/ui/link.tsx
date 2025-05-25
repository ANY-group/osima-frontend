import { default as NextLink, LinkProps } from "next/link";
import LoaderController from "./loader-controller";

interface CustomLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: React.ReactNode;
  transition?: boolean,
}

export default function Link({ children, transition = true, ...props }: CustomLinkProps) {
  return (
    <NextLink {...props}>
      {children}
      {transition && (
        <LoaderController />
      )}
    </NextLink>
  );
}