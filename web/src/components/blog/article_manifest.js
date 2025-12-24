/// Builder class that helps create an article manifest object.
/// Throws an error if any fields are missing.
export default class ArticleManifestBuilder {
  #articleId;
  #title;
  #author;
  #publishDate;
  #tags;
  #previewText;
  #component;

  setArticleId(articleId) {
    this.#articleId = articleId;
    return this;
  }

  setTitle(title) {
    this.#title = title;
    return this;
  }

  setAuthor(author) {
    this.#author = author;
    return this;
  }

  setPublishDate(publishDate) {
    this.#publishDate = publishDate;
    return this;
  }

  setTags(tags) {
    this.#tags = tags;
    return this;
  }

  setPreviewText(previewText) {
    this.#previewText = previewText;
    return this;
  }

  setComponent(component) {
    this.#component = component;
    return this;
  }

  build() {
    if (
      !this.#articleId ||
      !this.#title ||
      !this.#author ||
      !this.#publishDate ||
      !this.#tags ||
      !this.#previewText ||
      !this.#component
    ) {
      throw new Error("Article manifest missing field(s)");
    }

    if (/\s/.test(this.#articleId)) {
      throw new Error("Article Id must not have whitespaces");
    }

    return {
      articleId: this.#articleId,
      title: this.#title,
      author: this.#author,
      publishDate: this.#publishDate,
      tags: this.#tags,
      previewText: this.#previewText,
      component: this.#component,
    };
  }
}
