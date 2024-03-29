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
  private static NUM_CREATURES = 5;
  creatures: activeCreature[];

  constructor() {
    super(ActiveObjectComponent.name);
    this.creatures = [];
    this.main();
  }

  reloadLife(){
    this.creatures = [];
    this.main();
  }

  override async run(log: logger): Promise<void> {
    try {
      for (let i = 0; i < ActiveObjectComponent.NUM_CREATURES; i++) {
        this.creatures.push(new orc(orc.name + ' ' + (i + 1)));
      }
    } catch (e: unknown) {
      if (e instanceof Error) {
        log.getError(e.message);
      } else {
        log.getError('Unknown Error');
      }
    }
  }
}
