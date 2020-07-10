import Home from '../views/home';
import PhotoFull from '../views/photo-full';
import PhotoWeibo from '../views/photo-weibo';
import NormalWeibo from '../views/normal-weibo';
import Blog from '../views/blog';
import Works from '../views/works';

export default [
    {
        id: 'home',
        path: '/home',
        component: Home,
        children: [
            { id: 'tab-1', name: '图片说', path: '/home/tab-1', component: PhotoWeibo },
            { id: 'tab-2', name: '心情', path: '/home/tab-2', component: NormalWeibo },
            { id: 'tab-3', name: '博客', path: '/home/tab-3', component: Blog},
            { id: 'tab-4', name: '作品集', path: '/home/tab-4', component: Works },
        ]
    },
    {
        id: 'photoFull',
        path: '/photofull',
        component: PhotoFull
    }
];