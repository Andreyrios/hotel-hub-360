import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardItem from './CardItem';

const mockItem = {
  id: 1,
  text: 'test',
  path: '/path',
  icon: () => <div className="icon" />,
};

describe('CardItem Component', () => {
  const CardItemRouter = () => (
    <MemoryRouter>
      <CardItem item={mockItem} />
    </MemoryRouter>
  )

  it('renders CardItem component without crashing', () => {
    render(<CardItemRouter />);
  });

  it('renders the icon and text', () => {
    render(<CardItemRouter />);

    const iconElement = screen.getByText(mockItem.text);
    const textElement = screen.getByText(mockItem.text);

    expect(iconElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  it('navigates to the correct path', () => {
    render(<CardItemRouter />);

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', mockItem.path);
  });

  it('has the correct class', () => {
    render(<CardItemRouter />);

    const cardItemElement = screen.getByRole('link');
    expect(cardItemElement).toHaveClass('card');
  });
});