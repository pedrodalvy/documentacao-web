module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/images/logo.png' }]
    ],
    title: 'Documentação Web',
    description: 'Documentação para configuração do ambiente de trabalho web da Quality Sistemas',
    themeConfig: {
        displayAllHeaders: true,
        lastUpdated: 'Ultima Atualização',
        logo: '/images/logo.png',
        smoothScroll: true,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Web', link: '/web/' },
            { text: 'Infra', link: '/infra/' },
        ],
        sidebar: {
            '/web/': [
                'avisos-licitacao',
                'contratos_e_convenios',
                'notafiscal',
            ],
            '/infra/': [
                'configXAMPP',
                'configLINUX',
                'configWSL',
            ]
        }
    }
}