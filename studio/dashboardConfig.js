export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5fff871d7c8b0d7109f1327c',
                  title: 'Sanity Studio',
                  name: 'hello-sanity-nextjs-studio',
                  apiId: '0b61e322-025b-4f4c-9569-e8401af18610'
                },
                {
                  buildHookId: '5fff871d6385f67bb4e780f1',
                  title: 'Landing pages Website',
                  name: 'hello-sanity-nextjs',
                  apiId: 'aec64a41-6e59-4aee-aebf-9d1181cb3420'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kirschd/hello-sanity-nextjs',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://hello-sanity-nextjs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
