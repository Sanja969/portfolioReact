import { useSelector, useDispatch } from 'react-redux';
import { ArticlesContainer, ArticlesSubContainer, ArticleContainer } from './articles.styles';
import { getArticles, selectArticlesIsLoading } from '../../redux/articles/articles.selector';
import Spinner from '../../components/spinner/spinner.component';
import Footer from '../../components/footer/footer.component';

const Articles = () => {
  const articles = useSelector(getArticles);
  const isLoader = useSelector(selectArticlesIsLoading);

  return (
    isLoader ? <Spinner /> :
    <>
      <ArticlesContainer>
        <h2>
          &gt;&gt; ARTICLES
        </h2>
        <ArticlesSubContainer>

          {
          articles.map(article => {
            return (
            <ArticleContainer key={article.id}>
              <h3>
                {article.title}
              </h3>
              <small>{article.created_at}</small>
              <p>{article.text}</p>
              <a href={article.link}> &gt;&gt; Click here</a>
            </ArticleContainer>
          )})
          }
        </ArticlesSubContainer>
      </ArticlesContainer>
      <Footer />
    </>
    


  );
}

export default Articles;