import { Component, OnInit, Input } from '@angular/core';
import { Media } from '../../../models/media.model';

@Component({
  selector: 'app-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: []
})
export class PhotoItemComponent implements OnInit {
  @Input() albumId: string;
  @Input() media: Media;

  constructor() { }

  ngOnInit() {
  }

}
