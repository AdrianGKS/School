import { render, screen } from '@testing-library/react';
import Aluno from './rotas/Aluno';

test('renders learn react link', () => {
  render(<Aluno />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
