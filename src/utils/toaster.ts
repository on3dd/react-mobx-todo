import { toaster } from 'evergreen-ui';

export default class Toaster {
  private toaster: typeof toaster;

  constructor() {
    this.toaster = toaster;
  }

  info(message: string) {
    this.toaster.notify(message);
  }

  success(message: string) {
    this.toaster.success(message);
  }

  warning(message: string) {
    this.toaster.warning(message);
  }

  danger(message: string) {
    this.toaster.danger(message);
  }
}
