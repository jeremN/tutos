import User from './components/user/User.vue';
import Home from './components/Home.vue';

//array of object containing routes
export const routes = [
	{path: '', component: Home},
	{path: '/user/:id', component: User}

];
