"use client"

import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";


const MenuLink = ({item}) => {

    const pathname = usePathname()

    console.log("pathname"+ pathname)

    console.log("item"+item.path)

    return (
        <Link href={item.path} className={`${styles.container} ${pathname.split("/").slice(0, 3).join("/") === item.path && styles.active}`}>
          {item.icon}
          {item.title}
        </Link>
    )
}


export default MenuLink