import { Box, Link } from "@mui/material";
import registry from "./article_registry";
import { useSearchParams } from "react-router-dom";

/// Home landing page for the blog when no article is selected.
function BlogHomePage() {
  let [searchParams, setSearchParams] = useSearchParams();

  const onArticleClick = (id) => {
    setSearchParams({ articleid: id });
  };

  // TODO update query params to use article id
  return (
    <Box>
      {registry.articles.map((a) => (
        <Link onClick={() => onArticleClick(a.articleId)}>{a.title}</Link>
      ))}
    </Box>
  );
}

export default BlogHomePage;
