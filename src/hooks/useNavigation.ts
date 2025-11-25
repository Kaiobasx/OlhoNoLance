import { useState } from 'react';

export type Page = 'home' | 'active-auctions' | 'collectibles' | 'about' | 'contact' | 'login' | 'register' | 'auction-details';

interface NavigationState {
  page: Page;
  params?: {
    auctionId?: string;
  };
}

export function useNavigation() {
  const [navigationState, setNavigationState] = useState<NavigationState>({ page: 'home' });

  const navigateTo = (page: Page, params?: { auctionId?: string }) => {
    setNavigationState({ page, params });
  };

  return {
    currentPage: navigationState.page,
    params: navigationState.params,
    navigateTo
  };
}