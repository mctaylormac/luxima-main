import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('affiche les liens principaux', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    );

    expect(screen.getByText('Accueil')).toBeInTheDocument();
    expect(screen.getByText('À propos de nous')).toBeInTheDocument();
    expect(screen.getByText('Nos Services')).toBeInTheDocument();
    expect(screen.getByText('Contact et Réservation')).toBeInTheDocument();
  });
});

