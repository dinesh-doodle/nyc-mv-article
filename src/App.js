
import { useCallback, useEffect, useState } from 'react';
import styles from "./App.module.scss";
import { ArticleList } from './component/ArticleList';
import { getArticles } from './service/api';
import { Loader } from './component/Loader';
import { ArticleDetail } from './component/Detail';

function App() {

  const [mostViewedData, setMostViewedData] = useState([]);
  const [detailData, setDetail] = useState({});
  const [isLoading, setLoading] = useState(true);

  const getArticleData = useCallback(async () => {
    setLoading(true);
    const articlesData = await getArticles()
    const { results = [] } = articlesData || {};
    setMostViewedData(results)
    setLoading(false);
  },[]);

  const handleDetail = (detailData) => {
    setDetail(detailData)
  }

  useEffect(() => {
    getArticleData();
  },[])

  return (
    <div className="App">   
      <h1>
        NY Times Most Popular Articles 
      </h1>
      <div className={styles.Container}>
        {isLoading ? (
          <Loader />
        ): (
          <div className={styles.Wrapper}>
          <ArticleList articlesData={mostViewedData} handleDetail={handleDetail} />
          {detailData.title && (
            <ArticleDetail {...detailData}  handleDetail={handleDetail} />
          )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
