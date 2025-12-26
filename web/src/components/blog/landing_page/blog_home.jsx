import { Box, Container, Link, Typography } from "@mui/material";
import registry from "../article_registry";
import { useSearchParams } from "react-router-dom";
import blogHomeStyles from "./blog_home.styles";
import ArticlePreview from "@/components/blog/article_preview/article_preview";
import DyosLink from "@/components/common/link";

/// Home landing page for the blog when no article is selected.
function BlogHomePage() {
  let [_, setSearchParams] = useSearchParams();

  const onArticleClick = (id) => {
    setSearchParams({ articleid: id });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return (
    <Box sx={blogHomeStyles.blogHomeContainer}>
      <Container>
        <Box sx={blogHomeStyles.titleContainer}>
          <Typography variant="h6" sx={blogHomeStyles.subtitle}>
            Blog
          </Typography>
          <Typography variant="h3" sx={blogHomeStyles.title}>
            Thoughts and Ramblings
          </Typography>
        </Box>
        <Box>
          <Typography display="inline">
            The West Coast Swing microcosm is unexpectedly enormous. From
            learning the basics of the dance, to navigating conventions, to
            learning how to learn, there's a never-ending list of subjects that
            we could spend hours talking about. You don't have to learn about
            everything all on your own. Hear what some of us at Do Your Own
            Swing have to say about anything and everything. If you have your
            own thoughts you'd like to share, reach out to{" "}
          </Typography>
          <Typography display="inline">
            <DyosLink href="mailto:blog@doyourownswing.com">
              blog@doyourownswing.com
            </DyosLink>
          </Typography>
          <Typography display="inline"> to get in touch!</Typography>
        </Box>
        <Typography variant="h4" sx={blogHomeStyles.sectionHeader}>
          Featured Articles
        </Typography>
        {registry.articles
          .filter((a) => a.featured)
          .map((a) => (
            <ArticlePreview
              onClick={() => onArticleClick(a.manifest.articleId)}
              article={a.manifest}
            />
          ))}
      </Container>
    </Box>
  );
}

export default BlogHomePage;
