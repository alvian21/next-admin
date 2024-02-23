import styles from "@/app/ui/dashboard/products/products.module.css";
import Link from "next/link";
import Search from "@/app/ui/dashboard/search/search";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";


const ProductsPage = ({ searchParams }) => {
    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder="Search for a product..." />
                <Link href="/dashboard/products/add">
                    <button className={styles.addButton}>Add New</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Created At</td>
                        <td>Stock</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image
                                    src="/noproduct.jpg"
                                    alt=""
                                    width="40"
                                    height="40"
                                    className={styles.productImage}
                                />
                               Apple
                            </div>
                        </td>
                        <td>Hp Apple</td>
                        <td>$4000</td>
                        <td>13-02-2023</td>
                        <td>10</td>
                        <td className={styles.buttons}>
                            <Link href="/dashboard/products/1">
                                <button className={`${styles.button} ${styles.view}`}>View</button>
                            </Link>

                            <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default ProductsPage