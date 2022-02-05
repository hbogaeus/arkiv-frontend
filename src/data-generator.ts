function generateBookmarks(n: number): Bookmark[] {
  const bookmarks: Bookmark[] = [];

  for (let i = 0; i < n; i++) {
    const createdAt = Math.floor(Date.now() / 1000);

    bookmarks.push({
      id: i,
      title: `Bookmark ${i + 1}`,
      url: `https://developer.mozilla.org/en-US/`,
      createdAt: createdAt
    });
  }

  return bookmarks;
}

export {generateBookmarks}