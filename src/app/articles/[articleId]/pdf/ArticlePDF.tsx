import React from "react";
import { Page, Text, Document, Image, Font } from "@react-pdf/renderer";

import { ArticleType } from "@/constants";
import formatTimestamp from "@/utils/formatTimestamp";
import { styles } from "./PDFStyles";

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

function ArticlePDF({ articleDetails }: { articleDetails: ArticleType }) {
  const { title, body, createTimestamp, image, updateTimestamp } =
    articleDetails;

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>
          ~ Created with CurioScribe ~
        </Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>
          {!updateTimestamp
            ? formatTimestamp(createTimestamp)
            : formatTimestamp(updateTimestamp)}
        </Text>

        {image && (
          // eslint-disable-next-line jsx-a11y/alt-text
          <Image
            src={{ uri: `data:image/png;base64,${image}` }}
            style={styles.image}
          />
        )}

        <Text style={styles.text}>{body}</Text>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}

export default ArticlePDF;
