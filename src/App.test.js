// src/components/ArticleDetail.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { ArticleCard } from './component/ArticleCard';
import { ArticleDetail } from './component/Detail';

test('renders article card', () => {
  const article = { title: 'Article 1', abstract: 'Abstract 1'};

  render(<ArticleCard {...article} />);

  expect(screen.getByText('Article 1')).toBeInTheDocument();
});

test('renders article detail', () => {

    const article = { title: 'Article 1', abstract: 'Abstract 1'};

    render(<ArticleDetail {...article} />);

    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.getByText('Abstract 1')).toBeInTheDocument();
});
