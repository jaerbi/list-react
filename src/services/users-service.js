export default class UsersService {
	
	_apiUrl = 'https://node-user-service.herokuapp.com/users';
	
	getAllUsers = () => {
		return fetch(this._apiUrl)
		.then(this.thenResp)
		.catch(this.catchErr);
	};
	
	deleteUser = id => {
		return fetch(`${this._apiUrl}/${id}`, {
			method: 'DELETE'
		})
		.then(this.thenResp)
		.catch(this.catchErr);
	};
	
	deleteAllUsers = () => {
		return fetch(`${this._apiUrl}`, {
			method: 'DELETE'
		})
		.then(this.thenResp)
		.catch(this.catchErr);
	};
	
	addUser = user => {
		return fetch(`${this._apiUrl}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(this.thenResp)
		.catch(this.catchErr);
	};
	
	thenResp = response => response.json();
	catchErr = error => console.error(error);
}