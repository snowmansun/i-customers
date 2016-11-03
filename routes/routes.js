{
    get:
    [{
        path: '/',
        method: 'get',
        callbacks: [Object],
        keys: [],
        regexp: /^\/\/?$/i
    },
        {
            path: '/user/:id',
            method: 'get',
            callbacks: [Object],
            keys: [{ name: 'id', optional: false }],
            regexp: /^\/user\/(?:([^\/]+?))\/?$/i
        }],
        delete:   
    [{
        path: '/user/:id',
        method: 'delete',
        callbacks: [Object],
        keys: [Object],
        regexp: /^\/user\/(?:([^\/]+?))\/?$/i
    }]
}  