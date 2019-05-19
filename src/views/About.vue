<template>
  <span>
    <v-container fill-height class="home-hero">
      <v-layout justify-center align-center column pa-5>
        <h1>About</h1>
      </v-layout>
    </v-container>

    <v-layout justify-center align-center>
      <v-flex xs8 md6>
        <h3>Smart Contracts</h3>
        <p>
          Smart contracts are one of the most powerful applications of
          Blockchain technology. Once designed, coded and implemented on the
          Blockchain, they are automatically executed whenever predefined
          trigger-events occur. Through clever design and strict rule-based
          execution of these contracts, it is possible to induce actors to act
          justly, without middlemen like banks, governments or notaries.
        </p>
        <h3>Smart Microtasks</h3>
        <p>
          This microtasks platform is an application of smart contracts that
          allows users to offer remote tasks to a community of freelancers. Each
          task creates a smart contract on an Ethereum test network. Tasks
          include description, due date, and offered reward for completion.
          Remote freelancers work on and complete tasks and verify the
          completion by uploading a photo via IPFS as proof of work. Completion
          could then be verified by votes of other freelancers on the platform
          for example. Consensus triggers the smart contract and the reward
          payment is sent.
        </p>
        <h3>Microtasks Use Cases</h3>
        <p>
          Design/IT tasks, social media posts, translation service, market
          research
        </p>
      </v-flex>
    </v-layout>
  </span>
</template>

<style scoped>
h1 {
  margin-bottom: 15px;
}
h3 {
  margin-top: 25px;
  margin-bottom: 5px;
}
.home-hero {
  width: 100%;
  height: 180px;
}
</style>
