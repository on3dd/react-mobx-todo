import { toaster } from 'evergreen-ui';

export default class Store {
  private toaster = toaster;

  protected info(message: string) {
    this.toaster.notify(message);
  }

  protected success(message: string) {
    this.toaster.success(message);
  }

  protected warning(message: string) {
    this.toaster.warning(message);
  }

  protected danger(message: string) {
    this.toaster.danger(message);
  }
}
