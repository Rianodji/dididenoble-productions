import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [class.h-16]="isScrolled" [class.h-20]="!isScrolled"
         class="fixed top-0 z-[110] w-full bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-500">
      <div class="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        
        <!-- LOGO & NOM DU SITE (Optimisé pour Mobile) -->
        <div class="flex items-center gap-2 sm:gap-4 group cursor-pointer max-w-[70%] sm:max-w-none">
          <div class="relative transition-all duration-500 shrink-0" 
               [class.w-10]="isScrolled" [class.h-10]="isScrolled"
               [class.w-12]="!isScrolled" [class.h-12]="!isScrolled"
               class="md:w-16 md:h-16">
            <img 
              src="/logo-ddp.jpeg" 
              alt="Logo" 
              class="w-full h-full object-contain rounded-full shadow-md border border-[#C5A059]/20 group-hover:scale-110 transition-transform duration-500"
            >
          </div>
          <div class="flex flex-col text-gray-900 overflow-hidden">
            <!-- text-base sur iPhone, text-xl sur Desktop -->
            <span class="font-black text-base sm:text-lg md:text-xl tracking-tighter leading-none uppercase truncate">
              Dididenoble
            </span>
            <span class="text-[#C5A059] text-[7px] sm:text-[9px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black whitespace-nowrap">
              Productions
            </span>
          </div>
        </div>

        <!-- MENU DESKTOP -->
        <div class="hidden lg:flex items-center gap-8 font-bold text-[10px] uppercase tracking-[0.2em]">
          <a href="#accueil" class="hover:text-[#C5A059] transition-colors relative group text-gray-900">Accueil</a>
          <a href="#agence" class="text-gray-400 hover:text-black transition-colors relative group text-gray-900">L'Agence</a>
          <a href="#equipe" class="text-gray-400 hover:text-black transition-colors relative group text-gray-900">L'Équipe</a>
          <a href="#projets" class="text-gray-400 hover:text-black transition-colors relative group text-gray-900">Projets</a>
          <a href="#actualites" class="text-gray-400 hover:text-black transition-colors relative group text-gray-900">Actualités</a>
          <button class="ml-4 px-6 py-3 bg-black text-[#C5A059] border border-[#C5A059] hover:bg-[#C5A059] hover:text-white transition-all duration-500 font-black">
            Contact
          </button>
        </div>

        <!-- MOBILE MENU TOGGLE (Plus accessible) -->
        <button (click)="toggleMenu.emit()" class="lg:hidden flex flex-col gap-1.5 p-2 shrink-0 z-[120]" aria-label="Menu">
          <div class="w-7 h-0.5 bg-black transition-all" [class.rotate-45]="menuOpen" [class.translate-y-2]="menuOpen"></div>
          <div class="w-7 h-0.5 bg-[#C5A059] transition-all" [class.opacity-0]="menuOpen"></div>
          <div class="w-7 h-0.5 bg-black transition-all" [class.-rotate-45]="menuOpen" [class.-translate-y-2]="menuOpen"></div>
        </button>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  @Input() menuOpen = false;
  @Input() isScrolled = false;
  @Output() toggleMenu = new EventEmitter<void>();
}