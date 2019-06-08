# Smart Microtasks

[![Netlify Status](https://api.netlify.com/api/v1/badges/65064b42-5a8f-4981-b4ae-3c6e38ef8b04/deploy-status)](https://app.netlify.com/sites/dasks/deploys)

This microtasks platform is an application of smart contracts
that allows users to offer remote tasks to a community of freelancers.
Each task creates a smart contract on an Ethereum test network. Tasks
include description, due date, and offered reward for completion.
Remote freelancers work on and complete tasks and verify the
completion by uploading a photo via IPFS as proof of work. Completion
could then be verified by votes of other freelancers on the platform
for example. Consensus triggers the smart contract and the reward
payment is sent.

> Project was developed during a 1.5-day smart contracts hackathon in May 2019.

- Back-end: serverless
- Front-end: Vue.js
- Smart contract: Solidity
- Storage: IPFS distributed file system

![screen](https://raw.githubusercontent.com/siebenrock/smart-microtasks/master/screen.png)

## Smart Contracts

Smart contracts are one of the most powerful applications of
Blockchain technology. Once designed, coded and implemented on the
Blockchain, they are automatically executed whenever predefined
trigger-events occur. Through clever design and strict rule-based
execution of these contracts, it is possible to induce actors to act
justly, without middlemen like banks, governments or notaries.

## Project setup

Requires MetaMask extension.

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
