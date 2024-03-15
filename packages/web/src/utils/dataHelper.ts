function formatDate(date: string | null): string {
  if (date) {
    return new Date(date)
      .toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
      .toUpperCase();
  }

  return "PRESENT";
}

export { formatDate };
