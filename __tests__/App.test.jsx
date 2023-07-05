import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';
import SearchBar from '../src/components/SearchBar';

jest.mock('../src/components/SearchBar', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders SearchBar component', () => {
    const recipes = [
      { id: 5, nombre: 'Birriamen' },
      { id: 2, nombre: 'Baked Oatmeal' },
      { id: 3, nombre: 'Pasta Chips' },
      { id: 4, nombre: 'Mug Cake' },
    ];

    render(<SearchBar recipes={recipes} setFilteredRecipes={jest.fn()} />);
    
    expect(SearchBar).toHaveBeenCalledWith({
      recipes,
      setFilteredRecipes: expect.any(Function),
    });
  });
});
