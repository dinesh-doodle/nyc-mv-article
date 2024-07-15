import styles from "./style.module.scss";

export function ArticleCard({ title , byline , onClick, media}){

    let imageUrl = "https://static01.nyt.com/images/2024/07/21/magazine/21mag-Maine-images-04/21mag-Maine-images-04-mediumThreeByTwo440.jpg";

    const firstMedia = media && media[0];

    if(firstMedia){
        const bigImage = media[0]["media-metadata"]?.filter((data) => data.format === "Standard Thumbnail")[0] || {};
    
        imageUrl = bigImage?.url || "https://static01.nyt.com/images/2024/07/21/magazine/21mag-Maine-images-04/21mag-Maine-images-04-mediumThreeByTwo440.jpg"

    }
    
    return (
        <div className={styles.Wrapper} onClick={onClick}>
            <div className={styles.imgWrapper}>
                <img src={imageUrl} alt="" />
            </div>
            <div className={styles.contentWrapper}>
                <span className={styles.ByLine}>{`${byline}`}</span>
                <div>
                    <p  className={styles.contentTitle}>{title}</p>
                </div>
            </div>
        </div>
    )
}