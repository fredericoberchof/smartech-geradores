import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { CoverComponent } from "./components/cover/cover.component";
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, CoverComponent, MainComponent, FooterComponent]
})
export class AppComponent {
  title = 'projeto-smartech';
}
