import articlePreviewStyles from "@/components/blog/article_preview/article_preview.styles";
import TagsList from "@/components/blog/tags/tags_list";
import { dateToHumanReadableString } from "@/utils/date_utils";
import { Box, Stack, Typography } from "@mui/material";

function ArticlePreview(props) {
  let articleManifest = props.article;

  return (
    <Box onClick={props.onClick} sx={articlePreviewStyles.container}>
      <Stack
        sx={articlePreviewStyles.topItemsContainer}
        direction={{ xs: "column-reverse", md: "row" }}
      >
        <Box>
          <Typography variant="h6">{articleManifest.title}</Typography>
          <Typography variant="caption" sx={articlePreviewStyles.author}>
            By {articleManifest.author.name}
          </Typography>
        </Box>
        <Typography sx={articlePreviewStyles.date}>
          {dateToHumanReadableString(articleManifest.publishDate)}
        </Typography>
      </Stack>
      <Box>
        <TagsList tags={articleManifest.tags}></TagsList>
      </Box>
      <Typography sx={articlePreviewStyles.previewText}>
        {articleManifest.subtitle}
      </Typography>
    </Box>
  );
}

export default ArticlePreview;
