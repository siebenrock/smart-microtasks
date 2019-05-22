
class Task {

    // creates a JS Task from ethereum
	constructor (ethereum_task) {
        console.log(ethereum_task);
        
        this._source = ethereum_task;
        this.id = ethereum_task.id;
        this.owner = ethereum_task.owner;
        this.deadline = Date(ethereum_task.deadline);
        this.reward = parseInt(ethereum_task.reward);

        // todo decode ipfs
        this.title = "";
        this.description = "";
        this.files = "";

        this.decodeIPFSDescription()
    }

    toAscii = function(hex) {
        var str = '',
                i = 0,
                l = hex.length;
        if (hex.substring(0, 2) === '0x') {
                i = 2;
        }
        for (; i < l; i+=2) {
                var code = parseInt(hex.substr(i, 2), 16);
                if (code === 0) continue; // this is added
                str += String.fromCharCode(code);
        }
        return str;
    };

    decodeIPFSDescription() {
        let that = this;
        let filehash = this.toAscii(this._source.description)
        let url = `https://ipfs.io/ipfs/${filehash}`

        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
              // Success!
              console.log(request.responseText)
              var stuff = JSON.parse(request.responseText);
              that.title = stuff.title
              that.description = stuff.description
              console.log(stuff)
              console.log(that)
            } else {
              // We reached our target server, but it returned an error
          
            }
          };
          
          request.onerror = function() {
            // There was a connection error of some sort
          };
          
          request.send();
    }
    

}

export default Task;
