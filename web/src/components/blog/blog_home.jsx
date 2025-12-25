import { Box, Container, Link } from "@mui/material";
import registry from "./article_registry";
import { useSearchParams } from "react-router-dom";
import blogStyles from "./blog.styles";

/// Home landing page for the blog when no article is selected.
function BlogHomePage() {
  let [_, setSearchParams] = useSearchParams();

  const onArticleClick = (id) => {
    setSearchParams({ articleid: id });
  };

  return (
    <Box sx={blogStyles.blogHomeContainer}>
      <Container>
        {registry.articles.map((a) => (
          <Link onClick={() => onArticleClick(a.articleId)}>{a.title}</Link>
        ))}
      </Container>
    </Box>
  );
}

export default BlogHomePage;
