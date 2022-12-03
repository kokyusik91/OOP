{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contract';

  const nav: Record<Page, PageInfo> = {
    home: { title: 'Home' },
    about: { title: 'About' },
    contract: { title: 'Contract' },
  };
}
