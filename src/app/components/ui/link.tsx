import { default as NextLink, LinkProps } from "next/link";
import LoaderController from "./loader-controller";

interface CustomLinkProps extends LinkProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  children: React.ReactNode;
}

export default function Link({ children, ...props }: CustomLinkProps) {
  return (
    <NextLink {...props}>
      {children}
      <LoaderController />
    </NextLink>
  );
}