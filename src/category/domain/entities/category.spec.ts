import { Category } from './category';

describe('Category', () => {
  it('should be able to create a new category with name only', () => {
    const categoryProps = {
      name: 'Movie',
    };

    const category = new Category(categoryProps);

    expect(category.name).toBe(categoryProps.name);
    expect(category.description).toBe(undefined);
    expect(category.isActive).toBe(true);
    expect(category.createdAt).toBeInstanceOf(Date);
  });

  it('should be able to create a new category with name and description', () => {
    const categoryProps = {
      name: 'Movie',
      description: 'some description',
    };

    const category = new Category(categoryProps);

    expect(category.name).toBe(categoryProps.name);
    expect(category.description).toBe(categoryProps.description);
    expect(category.isActive).toBe(true);
    expect(category.createdAt).toBeInstanceOf(Date);
  });

  it('should be able to create a new category that is inactive', () => {
    const categoryProps = {
      name: 'Movie',
      description: 'some description',
      isActive: false,
    };

    const category = new Category(categoryProps);

    expect(category.name).toBe(categoryProps.name);
    expect(category.description).toBe(categoryProps.description);
    expect(category.isActive).toBe(false);
    expect(category.createdAt).toBeInstanceOf(Date);
  });

  it('should be able to create a new category with informed created at date', () => {
    const date = new Date();

    const categoryProps = {
      name: 'Movie',
      description: 'some description',
      createdAt: date,
    };

    const category = new Category(categoryProps);

    expect(category.name).toBe(categoryProps.name);
    expect(category.description).toBe(categoryProps.description);
    expect(category.isActive).toBe(true);
    expect(category.createdAt).toBeInstanceOf(Date);
    expect(category.createdAt).toBe(date);
  });

  it('should be able to get and set contents of name field', () => {
    const categoryProps = {
      name: 'Movie',
      description: 'some description',
    };

    const category = new Category(categoryProps);

    expect(category.name).toBe(categoryProps.name);

    category.name = 'new name';

    expect(category.name).toBe('new name');
  });

  it('should be able to get and set contents of description field', () => {
    const categoryProps = {
      name: 'Movie',
      description: 'some description',
    };

    const category = new Category(categoryProps);

    expect(category.description).toBe(categoryProps.description);

    category.description = 'new description';

    expect(category.description).toBe('new description');
  });

  it('should be able to get and set contents of isActive field', () => {
    const categoryProps = {
      name: 'Movie',
      description: 'some description',
      isActive: true,
    };

    const category = new Category(categoryProps);

    expect(category.isActive).toBe(categoryProps.isActive);

    category.isActive = false;

    expect(category.isActive).toBe(false);
  });
});
