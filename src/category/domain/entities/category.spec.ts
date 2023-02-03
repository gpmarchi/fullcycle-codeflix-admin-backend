import { Category } from './category';

describe('Category', () => {
  it('should be able to create a new category', () => {
    const categoryProps = {
      name: 'Movie',
      description: 'some description',
      isActive: true,
      createdAt: new Date(),
    };

    const category = new Category(categoryProps);

    expect(category.props).toStrictEqual(categoryProps);
  });
});
