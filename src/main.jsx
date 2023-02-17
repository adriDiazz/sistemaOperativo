import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const app = (
	<Provider store={store}>
		<App />;
	</Provider>
);
const container = document.getElementById('root');

createRoot(container).render(app);
