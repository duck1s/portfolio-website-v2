import Link from "next/link"
import styles from "../styles/components/Navigation.module.scss"
import { useRouter } from "next/router"

export default function Navigation() {
	const router = useRouter()
	return (
		<>
			<nav className={styles.headernavigation}>
				<h3 className={styles.headernavigation__heading}>Joeri Breedveld</h3>
				<ul className={styles.headernavigation__list}>
					<li className={styles.headernavigation__listitem}>
						<Link href="/">
							<a className={router.pathname == "/" ? styles["headernavigation__activelink"] : styles["headernavigation__link"]}>Home</a>
						</Link>
					</li>
					<li className={styles.headernavigation__listitem}>
						<Link href="/about">
							<a className={router.pathname == "/about" ? styles["headernavigation__activelink"] : styles["headernavigation__link"]}>About</a>
						</Link>
					</li>
					<li className={styles.headernavigation__listitem}>
						<Link href="/projects">
							<a className={router.pathname == "/projects" ? styles["headernavigation__activelink"] : styles["headernavigation__link"]}>Projects</a>
						</Link>
					</li>
					<li className={styles.headernavigation__listitem}>
						<Link href="/services">
							<a className={router.pathname == "/services" ? styles["headernavigation__activelink"] : styles["headernavigation__link"]}>Services</a>
						</Link>
					</li>
				</ul>
				<button className={styles.headernavigation__button} type="button" onClick={() => router.push("/contact")}>
					Contact
				</button>
			</nav>
		</>
	)
}
