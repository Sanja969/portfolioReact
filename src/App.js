import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Projects from './routes/projects/projects.component';
import Background from './components/background/background.component';
import { fetchProjectsStart } from './redux/projects/projects.actions';
import Blogs from './routes/blogs/blogs.component';
import { fetchBlogsStart } from './redux/blogs/blogs.actions';
import { fetchArticlesStart } from './redux/articles/articles.actions';
import Articles from './routes/articles/articles.component';
import { fetchQuoteStart } from './redux/quotes/quotes.actions';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuoteStart());
    dispatch(fetchProjectsStart());
    dispatch(fetchBlogsStart());
    dispatch(fetchArticlesStart());
  }, [dispatch]);

  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Navigation />}>
        <Route index element={<Projects />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='articles' element={<Articles />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
