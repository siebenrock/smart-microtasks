class Task {
  // creates a JS Task from ethereum
  constructor(ethereum_task) {
    this._source = ethereum_task;
    this.id = ethereum_task.id;
    this.owner = ethereum_task.owner;
    this.deadline = Date(ethereum_task.deadline);
    this.reward = parseInt(ethereum_task.reward);

    // todo decode ipfs
    this.title = "";
    this.description = "";
    this.files = "";
  }

  // decodeIPFSDescription() {
  //     let url = `https://ipfs.io/ipfs/${result[0].hash}`
  // }
}

export default Task;
