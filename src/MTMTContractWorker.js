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

if (typeof web3 !== undefined) {
 web3 = new Web3(web3.currentProvider);
} else  {
 // set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];
}

const MTMTContract = web3.eth.Contract(abi, '0x08970fed061e7747cd9a38d680a601510cb659fb');

class MTMTContractWorker {

    // description: IPFS address as string
    // deadline: time in milliseconds since 1970
    addTask(description, deadline) {
        MTMTContract.methods.addTask(web3.utils.fromAscii(description), deadline).call();        
    }

    getTasks() {
        MTMTContract.methods.getTasks().call();
    }
}

export default MTMTContractWorker;
