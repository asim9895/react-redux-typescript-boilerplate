import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import RepositoryList from './components/RepositoryList';
import { store } from './redux/store';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<RepositoryList />
		</Provider>
	);
};

export default App;
