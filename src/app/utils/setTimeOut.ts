export class TimeOUt {
  executeAfterDelay(err: any) {
    setTimeout(() => {
      err = null;
    }, 2000);
  }
}
