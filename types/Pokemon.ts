// types/Pokemon.ts
export type Pokemon = {
  id: number;
  name: string;
  image_url: string;
  types: string[];
  generation?: string; // Thêm thuộc tính generation (tính toán từ id)
};

// Hàm tính toán generation từ id
export const getGenerationFromId = (id: number): string => {
  if (id >= 1 && id <= 151) return "Gen 1";
  if (id >= 152 && id <= 251) return "Gen 2";
  if (id >= 252 && id <= 386) return "Gen 3";
  if (id >= 387 && id <= 493) return "Gen 4";
  if (id >= 494 && id <= 649) return "Gen 5";
  if (id >= 650 && id <= 721) return "Gen 6";
  if (id >= 722 && id <= 809) return "Gen 7";
  if (id >= 810 && id <= 905) return "Gen 8";
  if (id >= 906 && id <= 1025) return "Gen 9";
  return "Unknown Gen"; // Trường hợp không thuộc bất kỳ thế hệ nào
};
