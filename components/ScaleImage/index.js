import Image from "next/image"
import styles from "./ScaleImage.module.css";

export default function ScaleImage({caption, src, altText}) {
    return (
        <>
            <div className={styles.container}>
                <h6>{caption}</h6>
                <Image src={src} alt={altText} width={1920} height={1080}/>
            </div>
        </>
    )
}