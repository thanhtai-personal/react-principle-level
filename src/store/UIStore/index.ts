import { IUIConfig } from '@/interfaces/IUIConfig';
import { makeObservable } from 'mobx'; // import { makeObservable, action } from "mobx"

export class UIStore implements IUIConfig {
  public showHeader: boolean;
  public showFooter: boolean;
  public useLeftDrawer: boolean;
  public useRightDrawer: boolean;
  public fixedHeader: boolean;
  public fixedFooter: boolean;
  public isAnimationView: boolean;

  constructor() {
    this.showHeader = true;
    this.showFooter = true;
    this.useLeftDrawer = false;
    this.useRightDrawer = false;
    this.fixedHeader = true;
    this.fixedFooter = false;
    this.isAnimationView = true;
    makeObservable(this);
  }
}
