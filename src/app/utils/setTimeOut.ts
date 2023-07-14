export class TimeOut {
  executeAfterDelay(err: any) {
    setTimeout(() => {
      err = null;
    }, 2000);
  }
}
