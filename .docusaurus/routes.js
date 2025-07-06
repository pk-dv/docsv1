import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docsv1/markdown-page',
    component: ComponentCreator('/docsv1/markdown-page', '195'),
    exact: true
  },
  {
    path: '/docsv1/docs',
    component: ComponentCreator('/docsv1/docs', '5b3'),
    routes: [
      {
        path: '/docsv1/docs',
        component: ComponentCreator('/docsv1/docs', '8d4'),
        routes: [
          {
            path: '/docsv1/docs',
            component: ComponentCreator('/docsv1/docs', '58f'),
            routes: [
              {
                path: '/docsv1/docs/lineoa',
                component: ComponentCreator('/docsv1/docs/lineoa', '884'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docsv1/',
    component: ComponentCreator('/docsv1/', 'cd2'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
