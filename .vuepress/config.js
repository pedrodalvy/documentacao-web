module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    title: 'Documentação Quality',
    description: 'Documentação para configuração do ambiente de trabalho web da Quality Sistemas',
    themeConfig: {
        logo: '/images/logo.png',
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Web', link: '/web/' },
            { text: 'Infra', link: '/infra/' },
        ],
        sidebar: {
            '/web/': [
                'contratos_e_convenios',
                'teste'
            ],
            '/infra/': [
                'configXAMPP',
                'configLINUX',
                'configWSL',
            ]
        }
    }
}