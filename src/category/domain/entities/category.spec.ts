import { Category } from "./category";

describe('Categories', () => {
  it('should be able to create a new category', () => {
    const category = new Category('Movie');

    expect(category.name).toBe('Movie');
   });
});