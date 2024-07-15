import styles from "./style.module.scss";

export function ArticleDetail({title , handleDetail, abstract , media, byline, published_date }) {
    let imageUrl = "https://static01.nyt.com/images/2024/07/21/magazine/21mag-Maine-images-04/21mag-Maine-images-04-mediumThreeByTwo440.jpg";

    const firstMedia = media && media[0];

    if(firstMedia){
        const bigImage = media[0]["media-metadata"]?.filter((data) => data.format === "mediumThreeByTwo440")[0] || {};
    
        imageUrl = bigImage?.url || "https://static01.nyt.com/images/2024/07/21/magazine/21mag-Maine-images-04/21mag-Maine-images-04-mediumThreeByTwo440.jpg"

    }

    return (
        <div className={styles.Wrapper}>
            <div className={styles.closeBtn}>
                <button onClick={() => handleDetail({})}>Close</button>
            </div>
            <h1>{title}</h1>
              <img src={imageUrl} alt='' />
              <p>{abstract}</p>

              <p className={styles.byLine}>{byline}</p>
              <p className={styles.publishedDate}>{published_date}</p>
        </div>
    )
}