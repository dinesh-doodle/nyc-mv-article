export async function  getArticles(){
    const data = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_API_KEY}`);
    const articles = data.json();
    return articles;
}