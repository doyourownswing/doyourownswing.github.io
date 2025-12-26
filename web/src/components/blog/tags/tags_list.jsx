import tagsListStyles from "@/components/blog/tags/tags_list.styles";
import { Box, Chip } from "@mui/material";

function Tag(props) {
  let tag = props.tag;

  return <Chip label={tag.displayName} />;
}

function TagsList(props) {
  let tags = props.tags;

  return (
    <Box sx={tagsListStyles.tagsListContainer}>
      {tags.map((t) => (
        <Tag tag={t} key={t.displayName} />
      ))}
    </Box>
  );
}

export default TagsList;
