import { Component, OnChanges, Input, EventEmitter, Output } from "../../../node_modules/@angular/core";

@Component
    ({
        selector: 'pm-star',
        templateUrl: './star.component.html',
        styleUrls: ['./star.component.css']
    })
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick() {
        this.ratingClicked.emit('The rating '+this.rating+' was clicked');
        console.log('The rating '+this.rating+' was clicked');
    }

}