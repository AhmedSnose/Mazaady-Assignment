import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CategoryService } from '@/services/CategoryService';
import CategoryForm from '@/components/categories/CategoryForm';

// Mock the CategoryService
jest.mock('@/services/CategoryService', () => {
  return {
    CategoryService: jest.fn().mockImplementation(() => ({
      fetchProperties: jest.fn().mockResolvedValue([
        { id: 1, name: 'Color', options: [{ id: 1, name: 'Red' }, { id: 2, name: 'Blue' }] },
        { id: 2, name: 'Size', options: [{ id: 3, name: 'Small' }, { id: 4, name: 'Large' }] },
      ]),
    })),
  };
});

const mockMainCategories = [
  { id: 1, name: 'Electronics', children: [{ id: 2, name: 'Phones' }, { id: 3, name: 'Laptops' }] },
  { id: 4, name: 'Clothing', children: [{ id: 5, name: 'Shirts' }, { id: 6, name: 'Pants' }] },
];

describe('CategoryForm', () => {
  test('renders main category select', () => {
    render(<CategoryForm allMainCategoriesAtTheFirst={mockMainCategories} />);
    expect(screen.getByText('Main Category')).toBeInTheDocument();
    expect(screen.getByText('Select main category')).toBeInTheDocument();
  });

  test('renders submit button', () => {
    render(<CategoryForm allMainCategoriesAtTheFirst={mockMainCategories} />);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  test('renders main categories in select', () => {
    render(<CategoryForm allMainCategoriesAtTheFirst={mockMainCategories} />);
    expect(screen.getByText('Electronics')).toBeInTheDocument();
    expect(screen.getByText('Clothing')).toBeInTheDocument();
  });
});

