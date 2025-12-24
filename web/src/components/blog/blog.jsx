import { Box, Container, Typography } from "@mui/material";
import registry from "./article_registry";
import { useSearchParams } from "react-router-dom";
import BlogHomePage from "./blog_home";

function getMatchingArticle(id) {
  return registry.articles.find((a) => a.articleId == id);
}

function ArticleRenderer(props) {
  return (
    <Box>
      Back button Title and author and stuff
      {props.children}
    </Box>
  );
}

function Blog() {
  // check query params for currently selected article

  let [searchParams] = useSearchParams();

  let manifest = searchParams.has("articleid")
    ? getMatchingArticle(searchParams.get("articleid"))
    : null;

  console.log(manifest);

  return (
    <Box>
      {!manifest && <BlogHomePage />}
      {!!manifest && <ArticleRenderer>{manifest.component}</ArticleRenderer>}
    </Box>
  );
}

export default Blog;
