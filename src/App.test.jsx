
import { render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter for testing routing


import App from "./App"

test('renders routes correctly', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(getByText('Layout')).toBeInTheDocument();
  expect(getByText('Preview')).toBeInTheDocument();
  expect(getByText('Submitted')).toBeInTheDocument();
  expect(getByText('AnswerGraphics')).toBeInTheDocument();
  expect(getByText('ClosedQuestion')).toBeInTheDocument();
  expect(getByText('FilterContainer')).toBeInTheDocument();
  expect(getByText('FilterPage')).toBeInTheDocument();
  expect(getByText('ClosedInfo/:id')).toBeInTheDocument();
  // ... Add assertions for other routes ...
  expect(getByText('NoMatch')).toBeInTheDocument();
});

