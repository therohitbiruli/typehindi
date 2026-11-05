/**
 * Generates an array of page numbers and ellipsis ("...") for professional, responsive pagination.
 * Example for 18 pages:
 * - Page 1 -> [1, 2, 3, "...", 18]
 * - Page 4 -> [1, 2, 3, 4, 5, "...", 18]
 * - Page 9 -> [1, "...", 8, 9, 10, "...", 18]
 * - Page 18 -> [1, "...", 16, 17, 18]
 */
export function getPaginationItems(currentPage: number, totalPages: number): (number | "...")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Near the start
  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages];
  }

  // Transition from start
  if (currentPage === 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }

  // Transition to end
  if (currentPage === totalPages - 3) {
    return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }

  // Near the end
  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  // In the middle
  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}
