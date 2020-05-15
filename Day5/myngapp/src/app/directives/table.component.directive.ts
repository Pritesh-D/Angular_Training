import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Sort } from '../models/App.Sort';
import { DefaultSort } from '../models/app.constants';

@Component({
    selector: 'app-table-directive',
    templateUrl: './table.directive.view.html'
})

export class TableDirectiveComponent implements OnInit {

    private _DataSource: Array<any>;
    private _SortInfo: Sort
    private _Headers: Array<string>;

    SearchQuery: string;

    constructor() {
        this._DataSource = new Array<any>();
        this._Headers = new Array<string>();
        this._SortInfo = DefaultSort;
    }
    ngOnInit(): void {
    }

    @Input()
    set SortInfo(val: Sort) {
        this._SortInfo = val;
    }

    @Input()
    set DataSource(val: Array<any>) {
        if (val) {
            this._DataSource = val;
        }
    }

    @Input()
    set Headers(val: Array<string>) {
        if (val) {
            this._Headers = val;
        }
    }

    get DataSource(): Array<any> { return this._DataSource; }

    get SortInfo(): Sort { return this._SortInfo; }

    get Headers(): Array<string> { return this._Headers; }

    @Output()
    onRowSelected: EventEmitter<any> = new EventEmitter();

    @Output()
    onRowDelete: EventEmitter<any> = new EventEmitter();

    @Output()
    onColSort: EventEmitter<Sort> = new EventEmitter();

    @Output()
    onSearch: EventEmitter<string> = new EventEmitter();

    onRowSelectedEvent(row: any): void {
        this.onRowSelected.emit(row);
    }

    onSearchEvent(): void {
        this.onSearch.emit(this.SearchQuery);
    }

    onRowDeleteEvent(row: any): void {
        this.onRowDelete.emit(row);
    }

    onSortEvent(property: string, type: string): void {
        this._SortInfo = new Sort(property, type);
        this.onColSort.emit(this._SortInfo);
    }
}