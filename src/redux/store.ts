import { combineReducers, applyMiddleware, createStore } from 'redux';
import { repositoriesReducer } from './reducers/repositoriesReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

const rootReducers = combineReducers({
	repositories: repositoriesReducer,
});

export const store = createStore(
	rootReducers,
	{},
	composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducers>;

export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
