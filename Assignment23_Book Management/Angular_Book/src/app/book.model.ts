export interface Book {
  id?: number; // optional because backend will auto-generate
  name: string;
  author: string;
  year: string;
  language: string;
}