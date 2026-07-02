import Home from './pages/Home.js';
import List from './pages/List.js';
import Leaderboard from './pages/Leaderboard.js';
import Upcoming from './pages/Upcoming.js';

export default [
    { path: '/', component: Home },
    { path: '/list', component: List },
    { path: '/towerlist', component: TowerList },
    { path: '/leaderboard', component: Leaderboard },
    { path: '/upcoming', component: Upcoming },
];
