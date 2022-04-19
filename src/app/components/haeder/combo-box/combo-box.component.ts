import {Component, ContentChild, HostListener, Input} from '@angular/core';
import {NgControl} from "@angular/forms";
import {Country} from "../../../interfaces/country.interface";

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})

export class ComboBoxComponent {

  private index = NaN
  selectedCountry!: Country
  modal: boolean = false;

  @Input()
  items!: Country[]

  @ContentChild(NgControl)
  private readonly control!: NgControl

  get open(): boolean {
    return !isNaN(this.index)
  }

  @HostListener('keydown.arrowDown.prevent', ['1'])
  @HostListener('keydown.arrowUp.prevent', ['-1'])
  onArrow(step: number) {
    this.index = this.open
      ? limit(this.clampedIndex + step, this.filteredItems.length - 1)
      : 0
  }

  @HostListener("keydown.enter.prevent")
  onEnter() {
    this.selectItem(this.open ? this.filteredItems[this.clampedIndex] : this.value)
    this.selectedCountry = this.filteredItems[0]
    if (this.selectedCountry) {
      this.modal = true
    }
  }

  @HostListener("keydown.esc")
  @HostListener("focusout")
  close() {
    this.index = NaN
  }

  @HostListener("input")
  onInput() {
    this.index = this.clampedIndex
  }

  onClick() {
    this.onEnter()
  }

  noop() {
  }

  toggle() {
    this.index = this.open ? NaN : 0
  }

  isActive(index: number): boolean {
    return index === this.clampedIndex
  }

  onMouseEnter(index: number) {
    this.index = index
  }

  get filteredItems(): any {
    return this.filter(this.items, this.value)
  }

  private get value(): string {
    return String(this.control.value)
  }

  private get clampedIndex(): number {
    return limit(this.index, this.filteredItems.length - 1)
  }

  private selectItem(item: Country) {
    this.control.control?.setValue(item.country)
    this.close()
  }

  private filter(items: Country[], value: string) {
    return items.filter(item => item.country.toLowerCase().includes(value.toLowerCase()))
  }
}

function limit(value: number, max: number): number {
  return Math.max(Math.min(value || 0, max), 0)
}
