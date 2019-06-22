export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d0e746e73b5812299bdad5a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-onjbpt7j',
                  apiId: '419d381c-5c65-45c8-ac03-ede6a6f5b1e3'
                },
                {
                  buildHookId: '5d0e746ee67e35fe0ded44e9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-29bqv2ay',
                  apiId: 'bfa53874-5f13-45f6-89dd-9dc7c6e4095b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/claytonfbell/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-29bqv2ay.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
