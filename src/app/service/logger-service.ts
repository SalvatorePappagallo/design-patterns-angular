class logger {
  constructor(private fullLog: string) {}

  getLogger(log: string) {
    this.fullLog += '\n ' + log;
  }

  getError(err: string) {
    this.fullLog += '\n [ERROR] ' + err;
  }

  getAction(err: string) {
    this.fullLog += '\n [ACTION] ' + err;
  }

  printToConsole() {
    console.log(this.fullLog);
  }
}
