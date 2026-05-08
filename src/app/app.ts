import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

// Imports des composants
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamComponent } from './components/team/team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent, 
    HeroComponent, 
    ServicesComponent, 
    ProjectComponent, 
    FooterComponent,
    TeamComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isMenuOpen = signal(false);
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu() {
    this.isMenuOpen.update(prev => !prev);
  }
}