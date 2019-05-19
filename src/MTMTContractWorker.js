import Web3 from 'web3';

const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_description",
				"type": "bytes32"
			},
			{
				"name": "_deadline",
				"type": "uint256"
			}
		],
		"name": "addTask",
		"outputs": [
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "completeTask",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAllTasks",
		"outputs": [
			{
				"components": [
					{
						"name": "owner",
						"type": "address"
					},
					{
						"name": "open",
						"type": "bool"
					},
					{
						"name": "deadline",
						"type": "uint256"
					},
					{
						"name": "reward",
						"type": "uint256"
					},
					{
						"name": "description",
						"type": "bytes32"
					},
					{
						"name": "completion_owner",
						"type": "address"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getTask",
		"outputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "bool"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

// Modern dapp browsers...
if (window.ethereum) {
	window.web3 = new Web3(ethereum);
	try {
		// Request account access if needed
		ethereum.enable();
		// Acccounts now exposed
	} catch (error) {
		// User denied account access...
	}
}
// Legacy dapp browsers...
else if (window.web3 !== undefined) {
	window.web3 = new Web3(web3.currentProvider);
} else  {
	// set the provider you want from Web3.providers
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

let account = null;
const MTMTContract = web3.eth.Contract(abi, '0x97db38a02ff1f0c3c91b64a889d390c311a448b8');

// get default wallet address from Metamask
web3.eth.getAccounts().then( function(accounts) {
	account = accounts[0];
});

class MTMTContractWorker {

	constructor (store) {
		this.store = store;
	}

	getWalletAddress() {
		return account;
	}

    // description: IPFS address as string
    // deadline: time in milliseconds since 1970
    addTask(description, deadline, value) {

		MTMTContract.methods
			.addTask(web3.utils.fromAscii(description), deadline)
			.send({from: account, value: value})
			.on('transactionHash', (hash) => {
				console.log('transactionHash', hash);
			})
			.on('confirmation', (confirmationNumber, receipt) => {
				console.log('confirmation', confirmationNumber, receipt);
			})
			.on('receipt', (receipt) => {
				// receipt example
				console.log('receipt', receipt);	
    		})
			.on('error', console.error); 
    }

    getAllTasks(callback) {
		MTMTContract.methods.getAllTasks().call()
			.then((result) => {
				this.store && this.store.commit('setTasks', result);
				callback && callback(result);
			});
	}

	// task: the task to which the solution is being submitted
	// deliverable: IPFS address as string
	submitTaskSolution(task, deliverable) {
		MTMTContract.methods
			.submitTaskSolution(web3.utils.fromAscii(deliverable), task_id)
			.send({from: account, value: value})
			.on('transactionHash', (hash) => {
				console.log('transactionHash', hash);
			})
			.on('confirmation', (confirmationNumber, receipt) => {
				console.log('confirmation', confirmationNumber, receipt);
			})
			.on('receipt', (receipt) => {
				// receipt example
				console.log('receipt', receipt);	
    		})
			.on('error', console.error); 
	}
}

export default MTMTContractWorker;
