import { Box } from "@mui/material";
import ArticleManifestBuilder from "../article_manifest";
import { jessee } from "../authors";
import { connection, musicality } from "../tags";
import { createDate } from "@/utils/date_utils";

function DummyArticle() {
  return <Box>hiya barbie</Box>;
}

const DummyArticleManifest = new ArticleManifestBuilder()
  .setArticleId("dummy-article-12-25-2025")
  .setTitle("Unga bunga my dudes")
  .setSubtitle(
    "When the bunga ungas the dudes that are mine, who will blergedy the hergedy?"
  )
  .setAuthor(jessee)
  .setPublishDate(createDate("12/25/2025"))
  .setTags([connection, musicality])
  .setComponent(<DummyArticle />)
  .build();

export default DummyArticleManifest;
