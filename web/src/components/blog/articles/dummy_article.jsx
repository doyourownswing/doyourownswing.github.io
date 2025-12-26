import { Box, Typography } from "@mui/material";
import ArticleManifestBuilder from "../article_manifest";
import { jessee } from "../authors";
import { connection, musicality } from "../tags";
import { createDate } from "@/utils/date_utils";
import { Header1 } from "@/components/blog/articles/common";

function DummyArticle() {
  return (
    <Box>
      <Typography>
        One dollar and eighty-seven cents. That was all. And sixty cents of it
        was in pennies. Pennies saved one and two at a time by bulldozing the
        grocer and the vegetable man and the butcher until one's cheeks burned
        with the silent imputation of parsimony that such close dealing implied.
        Three times Della counted it. One dollar and eighty-seven cents. And the
        next day would be Christmas. There was clearly nothing left to do but
        flop down on the shabby little couch and howl. So Della did it. Which
        instigates the moral reflection that life is made up of sobs, sniffles,
        and smiles, with sniffles predominating.
      </Typography>
      <Header1>The first thing</Header1>
      <Typography>
        While the mistress of the home is gradually subsiding from the first
        stage to the second, take a look at the home. A furnished flat at $8 per
        week. It did not exactly beggar description, but it certainly had that
        word on the look-out for the mendicancy squad. In the vestibule below
        was a letter-box into which no letter would go, and an electric button
        from which no mortal finger could coax a ring. Also appertaining
        thereunto was a card bearing the name "Mr. James Dillingham Young." The
        "Dillingham" had been flung to the breeze during a former period of
        prosperity when its possessor was being paid $30 per week. Now, when the
        income was shrunk to $20, the letters of "Dillingham" looked blurred, as
        though they were thinking seriously of contracting to a modest and
        unassuming D.
      </Typography>
      <Header1>The second thing</Header1>
      <Typography>
        But whenever Mr. James Dillingham Young came home and reached his flat
        above he was called "Jim" and greatly hugged by Mrs. James Dillingham
        Young, already introduced to you as Della. Which is all very good. Della
        finished her cry and attended to her cheeks with the powder rag. She
        stood by the window and looked out dully at a grey cat walking a grey
        fence in a grey backyard. To-morrow would be Christmas Day, and she had
        only $1.87 with which to buy Jim a present. She had been saving every
        penny she could for months, with this result. Twenty dollars a week
        doesn't go far. Expenses had been greater than she had calculated. They
        always are. Only $1.87 to buy a present for Jim.
      </Typography>
      <Header1>The third thing</Header1>
      <Typography>
        Her Jim. Many a happy hour she had spent planning for something nice for
        him. Something fine and rare and sterling--something just a little bit
        near to being worthy of the honour of being owned by Jim. There was a
        pier-glass between the windows of the room. Perhaps you have seen a
        pier-glass in an $8 Bat. A very thin and very agile person may, by
        observing his reflection in a rapid sequence of longitudinal strips,
        obtain a fairly accurate conception of his looks. Della, being slender,
        had mastered the art. Suddenly she whirled from the window and stood
        before the glass. Her eyes were shining brilliantly, but her face had
        lost its colour within twenty seconds. Rapidly she pulled down her hair
        and let it fall to its full length.
      </Typography>
      <Header1>The fourth thing</Header1>
      <Typography>
        Now, there were two possessions of the James Dillingham Youngs in which
        they both took a mighty pride. One was Jim's gold watch that had been
        his father's and his grandfather's. The other was Della's hair. Had the
        Queen of Sheba lived in the flat across the airshaft, Della would have
        let her hair hang out of the window some day to dry just to depreciate
        Her Majesty's jewels and gifts. Had King Solomon been the janitor, with
        all his treasures piled up in the basement, Jim would have pulled out
        his watch every time he passed, just to see him pluck at his beard from
        envy. So now Della's beautiful hair fell about her, rippling and shining
        like a cascade of brown waters.
      </Typography>
    </Box>
  );
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
