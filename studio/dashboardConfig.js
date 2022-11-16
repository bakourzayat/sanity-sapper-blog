export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '637503f3c3559304dccf9437',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-wme2nijq',
                  apiId: '7d8c22ae-bc30-436e-bba1-b52bdfdb8e0c'
                },
                {
                  buildHookId: '637503f375b0a9062534b427',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-cz8phj4e',
                  apiId: '942d6362-5071-4222-8b7c-34ef00dc86b5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bakourzayat/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-cz8phj4e.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
