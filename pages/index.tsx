// Imports
import type { NextPage } from "next"
import styles from "../styles/pages/Home.module.scss"
import { useRouter } from "next/router"
import Image from "next/image"
import img from "../public/assets/undraw-pc.svg"

// Page
const Home: NextPage = () => {
	const router = useRouter()

	return (
		<>
			<section className={styles.home}>
				<section className={styles.homeleft}>
					<h1 className={styles.homeleft__heading}>Joeri Breedveld</h1>
					<h2 className={styles.homeleft__job}>Full-stack Developer</h2>
					<button className={styles.homeleft__about} type="button" onClick={() => router.push("/about")}>
						About Me
					</button>
				</section>
				<section className={styles.homeright}>
					<Image className={styles.homeright__img} src={img} height={500} />
				</section>
			</section>
		</>
	)
}

export default Home
