import { logger } from './../../service/logger-service';
import { threadServices } from '../../service/thread-services';

export class activeCreature {
  private thread: threadServices;
  status: number= 0;
  log: logger;
  private eatingTime: number = 0;
  private roamingTime: number = 0;

  constructor(public name: string) {
    this.thread = new threadServices();
    this.log = new logger(name);

    this.init();
  }

  private init() {
    this.config();
    this.timeLife();
  }

  private config() {
    this.status = 100;
    this.eatingTime = Math.floor(Math.random() * 5000) + 1;
    this.roamingTime = Math.floor(Math.random() * 5000) + 1;

    console.log(this.eatingTime);
    console.log(this.roamingTime);
  }

  private async timeLife() {
    await this.eating();
    console.log('eating');
    await this.roaming();
    console.log('roaming');
    await this.killed(0);
    console.log('killed');
  }
  /*
  private init(): void{
    boolean infinite = true;
    while (infinite) {
      try {
        requests.take().run();
      } catch (InterruptedException e) {
        if (this.status != 0) {
          logger.error("Thread was interrupted. --> {}", e.getMessage());
        }
        infinite = false;
        Thread.currentThread().interrupt();
      }
    }
  }
*/
  private async eating() /*throw new Error("ERROR") */ {
    this.log.getLogger(this.name + ' is eating');
    await new threadServices().sleep(this.eatingTime);
    this.log.getLogger(this.name + ' has finished eating!');
    await this.eat();
  }

  protected async eat() /*throw new Error("ERROR") */ {}

  private async roaming() /*throw new Error("ERROR") */ {
    this.log.getLogger(this.name + ' has started to roam in the wastelands');
    await new threadServices().sleep(this.roamingTime);
    await this.roam();
  }

  protected async roam() /*throw new Error("ERROR") */ {}

  private async killed(num: number) {
    this.status = num;
    this.log.getLogger(this.name + ' KILL with ' + num + ' value');
    await this.kill(num);
  }

  protected async kill(num: number) {}

  getStatus(num: number) {
    return (this.status = num);
  }
}

export class orc extends activeCreature {
  constructor(name: string) {
    super(name);
  }
}
