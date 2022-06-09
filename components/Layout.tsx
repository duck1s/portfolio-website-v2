// Imports
import Head from "next/head"
import styles from "../styles/components/Layout.module.scss"
import Navigation from "./Navigation"
import Footer from "./Footer"

// Props
type LayoutProps = {
	children: React.ReactNode
}

// Page
export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<Head>
				<title>Joeri Breedveld</title>
			</Head>
			<header className={styles.header}>
				<Navigation />
			</header>
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>
				<Footer />
			</footer>
		</>
	)
}
