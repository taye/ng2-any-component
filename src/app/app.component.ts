import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  SimpleChange,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div (click)="increaseWidth()">
    <h3>
      Bellow is an &lt;any-component [is]={{ wrapper.name }}/&gt;
    </h3>

    <any-component  [is]="wrapper" [props]="wrapperProps">
      This content is inside an &lt;any-component/&gt; which creates another
      component with dynamic poperties

      <button type="button">
        Click to increasee the border width
      </button>
    </any-component>

    <br>

    <border-component>
      Content inside a regular border-component
    </border-component>
  </div>
  `,
  styles: []
})
export class AppComponent {
  wrapper = BorderComponent;
  wrapperProps = {
    width: 10,
    color: 'green',
  };

  increaseWidth() {
    this.wrapperProps.width += 10;
    console.log(`props: ${JSON.stringify(this.wrapperProps)}`);
  }
}

@Component({
  selector: 'border-component',
  template: `
    <div [ngStyle]="{ border: 'solid ' + width + 'px' + (color || '') }">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class BorderComponent {
  @Input() width = 1;
}