import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Contact from '../pages/Contact';

describe('Contact page', () => {
  it('contient un formulaire Netlify Forms', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    const form = screen.getByRole('form', { hidden: true }) ?? document.querySelector('form[name="contact"]');
    expect(form).not.toBeNull();
  });
});

