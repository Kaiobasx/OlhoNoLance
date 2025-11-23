import { useState } from 'react';

export type Page = 'home' | 'active-auctions' | 'collectibles' | 'about' | 'contact' | 'login' | 'register';

export function useNavigation() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    navigateTo
  };
}