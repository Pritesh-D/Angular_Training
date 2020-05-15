import { Component, Input, forwardRef, Renderer2, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { EventEmitter } from 'protractor';
import { SelectorListContext } from '@angular/compiler';

@Component({
    selector: 'app-select-directive',
    templateUrl: './select.directive.view.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectDirectiveComponent),
            multi: true
        }
    ]
})

export class SelectDirectiveComponent implements ControlValueAccessor {
    private _Data: Array<string>;
    SelectedValue: string;
    manageDropdown: boolean;
    OnChage: any

    // constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    constructor() {
        this._Data = new Array<string>();
        this.SelectedValue = ""
        this.manageDropdown = false;
    }

    writeValue(obj: any): void {
        if (obj != null)
            this.SelectedValue = obj;
        else
            this.SelectedValue = ""
    }
    registerOnChange(fn: any): void {
        this.OnChage = fn;
    }
    registerOnTouched(fn: any): void {
    }
    setDisabledState?(isDisabled: boolean): void {
    }

    @Input()
    set Data(value: Array<string>) { this._Data = value; }

    // @HostListener('click')
    // openDropDown(eventData: Event) {
    //     if (this.manageDropdown)
    //         this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    //     else
    //         this.renderer.addClass(this.elementRef.nativeElement, 'open');
    //     this.manageDropdown = !this.manageDropdown;
    // }

    get Data(): Array<string> {
        return this._Data;
    }

    onOptionSelectEvent(val: string) {
        this.SelectedValue = val;
        this.OnChage(this.SelectedValue);
    }
}