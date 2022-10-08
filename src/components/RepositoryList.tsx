import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_repositories } from '../redux/actions/repositoriesActions';
import { useTypeSelector } from '../redux/store';

const RepositoryList: React.FC = () => {
	const [term, setterm] = useState<string>('');
	const dispatch: any = useDispatch();
	const { data, loading, error } = useTypeSelector(
		(state) => state.repositories
	);

	const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setterm(event.target.value);
	};

	const onSubmitSearch = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(get_repositories(term));
	};

	return (
		<>
			<form onSubmit={onSubmitSearch}>
				<input value={term} onChange={onChangeSearch} />
				<button>submit</button>
			</form>

			{loading ? (
				<h1>Loading</h1>
			) : (
				<div>
					{data.length > 0 ? (
						data.map((d: any) => {
							return <h3>{d}</h3>;
						})
					) : (
						<h4>No data found</h4>
					)}
				</div>
			)}
			{error && <h4>{error}</h4>}
		</>
	);
};

export default RepositoryList;
