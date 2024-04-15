"use client"
import styles from "./homePage.module.css"

export default function HomePage() {
    return (
        <div className={styles.homePage}>
            <h1>Welcome to the Rick and Morty Universe!</h1>
            <p>Rick and Morty is an animated television show that follows the adventures of an eccentric and unpredictable scientist, Rick Sanchez, and his good-hearted but easily influenced grandson, Morty Smith. Together, they travel across dimensions, explore bizarre worlds, and encounter a wide range of unique and intriguing characters.</p>
            <p>In this app, you can explore the many characters, locations, and episodes from the series. Learn about the quirky personalities and discover the fantastic realms they visit. Dive into the unpredictable and chaotic universe of Rick and Morty!</p>
            <p>To get started, check out the different sections in the navigation bar above.</p>
        </div>
    )
}