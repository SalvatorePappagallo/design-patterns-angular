import { Component } from '@angular/core';
import { Runnable } from '../interfaces/IRunnable';

@Component({
  selector: 'app-active-object',
  templateUrl: './active-object.component.html',
  styleUrl: './active-object.component.css',
})
export class ActiveObjectComponent extends Runnable {
  private static NUM_CREATURES = 3;
  constructor(){
    super(ActiveObjectComponent.name);
  }

  override async run(log: logger): Promise<void> {
    let creatures: activeCreature [] = [];

    try{
      for (let i = 0; i < ActiveObjectComponent.NUM_CREATURES; i++) {
        creatures.push (new orc(orc.name + '' + i, log));
        creatures.at (i)?.eat();
        creatures.at (i)?.roam();
      }

      await new threadServices().sleep(1000);
    } catch(e: unknown) {
      if(e instanceof Error){
        log.getError(e.message);
      } else{
        log.getError('Unknown Error');
      }
    } finally {
      for(let i = 0; i < ActiveObjectComponent.NUM_CREATURES; i++){
        creatures.at(i)?.kill(0);
      }
    }
  }
}
