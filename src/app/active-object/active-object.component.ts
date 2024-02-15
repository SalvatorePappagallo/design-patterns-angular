import { Component } from '@angular/core';
import { Runnable } from '../interfaces/IRunnable';
import { logger } from '../service/logger-service';
import { activeCreature, orc } from './logic/active-creature';
import { threadServices } from '../service/thread-services';

@Component({
  selector: 'app-active-object',
  templateUrl: './active-object.component.html',
  styleUrl: './active-object.component.css',
})
export class ActiveObjectComponent extends Runnable {
  private static NUM_CREATURES = 3;
  creatures: activeCreature[];

  constructor() {
    super(ActiveObjectComponent.name);
    this.creatures = [];
  }

  override async run(log: logger): Promise<void> {
    try {
      for (let i = 0; i < ActiveObjectComponent.NUM_CREATURES; i++) {
        this.creatures.push(new orc(orc.name + '' + i, log));
        this.creatures.at(i)?.eat();
        this.creatures.at(i)?.roam();
      }

      await new threadServices().sleep(1000);
    } catch (e: unknown) {
      if (e instanceof Error) {
        log.getError(e.message);
      } else {
        log.getError('Unknown Error');
      }
    } finally {
      for (let i = 0; i < ActiveObjectComponent.NUM_CREATURES; i++) {
        this.creatures.at(i)?.kill(0);
      }
    }
  }
}
