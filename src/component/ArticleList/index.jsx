import { ArticleCard } from "../ArticleCard";

import styles from "./style.module.scss";

export function ArticleList({ articlesData  , handleDetail}){
    return (
        <div className={styles.Wrapper}>
            {articlesData.map((data) => (
                <ArticleCard key={data.id} {...data} onClick={() => handleDetail(data)}/>
            ))}
        </div>
    )
}