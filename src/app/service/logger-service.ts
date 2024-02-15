export class logger {
  private log: string;

  constructor(private fullLog: string) {
    this.log = fullLog;
  }

  getLogger(log: string) {
    this.fullLog += '\n ' + log;
    this.log = '\n ' + log;
  }

  getError(err: string) {
    this.fullLog += '\n [ERROR] ' + err;
    this.log = '\n [ERROR] ' + err;
  }

  getAction(err: string) {
    this.fullLog += '\n [ACTION] ' + err;
    this.log = '\n [ACTION] ' + err;
  }

  printToConsole() {
    console.log(this.fullLog);
  }

  public toString = (): string => {
    return this.fullLog;
  }

  public toStringLog () {
    return this.log;
  }
}
