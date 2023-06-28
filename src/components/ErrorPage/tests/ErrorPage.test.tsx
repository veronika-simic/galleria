import { getByRole, render, screen, waitFor } from '@testing-library/react';
import ErrorPage from '../ErrorPage';


test('should display text from error page', () => {
    render(<ErrorPage/>)
    const errorPageText = screen.getByText('The responsible person will be fired.');
    expect(errorPageText).toBeDefined();
    
})