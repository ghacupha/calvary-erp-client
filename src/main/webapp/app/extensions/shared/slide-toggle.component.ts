// slide-toggle.component.ts
import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Implement to substitute default check box implementation of jhipster-generated
 * code
 */
@Component({
  standalone: true,
  selector: 'jhi-slide-toggle',
  template: `
    <div class="slide-toggle">
      <!-- Replace this with library’s markup-->
      <input type="checkbox" [checked]="value" (change)="onToggle($event)" id="slideToggle" />
      <label for="slideToggle">
        <span class="slider"></span>
      </label>
    </div>
  `,
  styles: [
    `
      /* Sample placeholder style to replace with library’s styling */
      .slide-toggle {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 25px;
      }
      .slide-toggle input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: 0.4s;
        border-radius: 25px;
      }
      .slide-toggle input:checked + label .slider {
        background-color: #2196f3;
      }
      .slider:before {
        position: absolute;
        content: '';
        height: 21px;
        width: 21px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        transition: 0.4s;
        border-radius: 50%;
      }
      .slide-toggle input:checked + label .slider:before {
        transform: translateX(25px);
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SlideToggleComponent),
      multi: true,
    },
  ],
})
export class SlideToggleComponent implements ControlValueAccessor {
  value = false;

  // Default onChange callback.
  onChange: (value: boolean) => void = (value: boolean) => {
    // Default logic or simply a placeholder.
    // eslint-disable-next-line no-console
    console.log('Default onChange:', value);
  };
  onTouched: () => void = () => {
    // code to run on touch
  };

  writeValue(val: any): void {
    this.value = !!val;
  }

  registerOnChange(fn: any): void {
    // Wrap the provided fn so that we can add our custom logic.
    this.onChange = (value: boolean) => {
      // Custom logic: for example, logging or value transformation.
      // eslint-disable-next-line no-console
      console.log('SlideToggle changed, new value:', value);

      // You can add more logic here if needed, for example:
      // if (value) { ... }

      // Then, propagate the change to the parent.
      fn(value);
    };
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    // Optionally handle disable state
  }

  // This event handler is triggered when the input value changes.
  onToggle(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.checked;
    // Propagate the new value and mark the control as touched.
    this.onChange(this.value);
    this.onTouched();
  }
}
