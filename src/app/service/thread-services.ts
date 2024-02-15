export class threadServices {
  sleep(num: number){
    return new Promise(r => setTimeout(r, num));
  }
}
