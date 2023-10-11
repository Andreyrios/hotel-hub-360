import Main from './Main';
// Libraries
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
// Utils
import { listItemsDashboards } from '../../utils/listItemsToDashboard';

describe('Main Component', () => {
  const MainRouter = () => (
    <MemoryRouter>
      <Main />
    </MemoryRouter>
  )

  it('renders Main component without crashing', () => {
    render(
      <MainRouter />
    );
  });

  it('renders a container with the correct class name', () => {
    render(<MainRouter />);
    const container = screen.getByTestId('main');
    expect(container).toHaveClass('main');
  });

  it('renders all items from listItemsDashboards', () => {
    render(<MainRouter />);
    listItemsDashboards.forEach((item) => {
      const itemElement = screen.getByText(item.text);
      expect(itemElement).toBeInTheDocument();
    });
  });

  it('renders the correct number of CardItem components', () => {
    render(<MainRouter />);
    const cardItemComponents = screen.getAllByRole('link');
    expect(cardItemComponents.length).toBe(listItemsDashboards.length);
  });
});