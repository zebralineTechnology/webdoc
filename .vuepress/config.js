module.exports = {
    title: 'zeo info center',
    descriptin: 'This is full stack of zeo documentation.',
    themeConfig:{
        nav:[
            {text: 'Home',link: '/'},
            {text: 'Guideline',link: '/guide/'},
            {text: 'Command',link: '/guide/command'},
            {text: 'About zeo',link: 'http://www.zebralinetech.com'},
            
        ],
        sidebar: {
            '/guide/':[
                '',
                'frontend',
                'backend',
                'coding',
                'Architecture',
                'BestPractice',
                'command'
            ]
        }
    }
}
