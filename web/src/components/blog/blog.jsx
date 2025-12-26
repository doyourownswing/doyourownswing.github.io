import { Box, Container, Typography } from "@mui/material";
import registry from "./article_registry";
import { useSearchParams } from "react-router-dom";
import BlogHomePage from "./landing_page/blog_home";
import blogStyles from "./blog.styles";
import { dateToHumanReadableString } from "@/utils/date_utils";
import TagsList from "@/components/blog/tags/tags_list";

function getMatchingArticle(id) {
  return registry.articles.find((a) => a.articleId === id);
}

function ArticleRenderer(props) {
  let manifest = props.manifest;

  return (
    <Box sx={blogStyles.articleRendererContainer}>
      <Container sx={blogStyles.articleRenderer}>
        <Box>
          <Box sx={blogStyles.articleTitleSection}>
            <Typography variant="h3" sx={blogStyles.articleTitle}>
              {manifest.title}
            </Typography>
            <Typography variant="subtitle" sx={blogStyles.articleSubtitle}>
              {manifest.subtitle}
            </Typography>
          </Box>

          <Box sx={blogStyles.articleDetails}>
            <Box sx={blogStyles.articleTagsList}>
              <TagsList tags={manifest.tags} />
            </Box>
            <Box sx={blogStyles.authorAndDate}>
              <Typography sx={blogStyles.authorAndDateText}>
                By {manifest.author.name}
              </Typography>
              <Typography sx={blogStyles.authorAndDateText}>&#8226;</Typography>
              <Typography sx={blogStyles.authorAndDateText}>
                {dateToHumanReadableString(manifest.publishDate)}
              </Typography>
            </Box>
          </Box>
        </Box>
        {manifest.component}
      </Container>
    </Box>
  );
}

function Blog() {
  // check query params for currently selected article

  let [searchParams, _] = useSearchParams();

  let manifest = searchParams.has("articleid")
    ? getMatchingArticle(searchParams.get("articleid"))
    : null;

  return (
    <Box>
      {!manifest && <BlogHomePage />}
      {!!manifest && <ArticleRenderer manifest={manifest} />}
    </Box>
  );
}

export default Blog;
