import { logger } from "../service/logger-service";

export interface IRunnable {
  main(): void;
  run(log: logger): void;
}

export class Runnable implements IRunnable {
  private log: logger;

  constructor(name: string) {
    this.log = new logger(name);
  }

  main(): void {
    this.log.getAction(this.main.name);
    this.run(this.log);
    this.log.getAction(this.main.name + ' END');
  }

  run(log: logger): void {}
}
