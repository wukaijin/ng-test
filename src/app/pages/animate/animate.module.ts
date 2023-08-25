import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimateRoutingModule } from './animate-routing.module';
import { AnimateComponent } from './animate.component';
import { TranslateXComponent } from './translate.x/translate.x.component';

@NgModule({
  declarations: [AnimateComponent, TranslateXComponent],
  imports: [CommonModule, AnimateRoutingModule],
})
export class AnimateModule {}
