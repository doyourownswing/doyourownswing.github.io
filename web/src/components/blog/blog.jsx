import { Box, Container, Typography } from "@mui/material";
import registry from "./article_registry";
import { useSearchParams } from "react-router-dom";
import BlogHomePage from "./blog_home";
import blogStyles from "./blog.styles";

function getMatchingArticle(id) {
  return registry.articles.find((a) => a.articleId === id);
}

function Tag(props) {
  let tag = props.tag;

  return <Typography display="inline">{tag.displayName}</Typography>;
}

function TagsList(props) {
  let tags = props.tags;

  let comma = <Typography display="inline">, </Typography>;

  let tagsListChildren = [];

  for (var i in tags) {
    let tag = tags[i];
    tagsListChildren.push(<Tag tag={tag} key={tag.displayName} />);

    if (i < tags.length - 1) {
      tagsListChildren.push(comma);
    }
  }

  return <Box>{tagsListChildren}</Box>;
}

function ArticleRenderer(props) {
  let manifest = props.manifest;

  return (
    <Box sx={blogStyles.articleRendererContainer}>
      <Container>
        <Box>
          <Box sx={blogStyles.articleTitleSection}>
            <Typography variant="h4" sx={blogStyles.articleTitle}>
              {manifest.title}
            </Typography>
            <Typography variant="subtitle" sx={blogStyles.articleSubtitle}>
              {manifest.subtitle}
            </Typography>
          </Box>

          <Box sx={blogStyles.articleDetails}>
            <Typography display="inline">Written by: </Typography>
            <Typography display="inline">{manifest.author.name}</Typography>
            <Box sx={blogStyles.articleTagsList}>
              <Typography display="inline">Tags: </Typography>
              <TagsList tags={manifest.tags} />
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

  console.log(manifest);

  return (
    <Box>
      {!manifest && <BlogHomePage />}
      {!!manifest && <ArticleRenderer manifest={manifest} />}
    </Box>
  );
}

export default Blog;
