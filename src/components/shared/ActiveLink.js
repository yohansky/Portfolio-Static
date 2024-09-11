import Link from "next/link";
import { useRouter } from "next/router";
import React, { Children } from "react";

// props disini itu yang href di header.js>ActiveLink
const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const childArray = Children.toArray(children);
  //   let className = child.props.className || "";
  //   let className = child[0].props.className || "";
  const modifiedChildren = childArray.map((child) => {
    let className = child.props.className || "";

    if (router.asPath === props.href && props.activeClassName) {
      className = `${className} ${props.activeClassName}`;
    }
    return React.cloneElement(child, { className });
  });

  delete props.activeClassName;

  return <Link {...props}>{modifiedChildren}</Link>;
};

export default ActiveLink;
