import { logger } from "../../service/logger-service";
import { threadServices } from "../../service/thread-services";

export class activeCreature {
  private thread: threadServices;
  status: number;

  constructor(public name: string, private log: logger) {
    this.thread = new threadServices();
    this.status = 100;
    //this.init();
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
  eat() /*throw new Error("ERROR") */ {
    this.log.getLogger(this.name + ' is eating');
    this.log.getLogger(this.name + ' has finished eating!');
  }

  roam() /*throw new Error("ERROR") */ {
    this.log.getLogger(this.name + ' has started to roam in the wastelands');
  }

  kill(num: number) {
    this.status = num;
    this.log.getLogger(this.name + ' KILL with ' + num + ' value');
  }

  getStatus(num: number) {
    return (this.status = num);
  }
}

export class orc extends activeCreature {
  constructor(name: string, log: logger) {
    super(name, log);
  }
}
