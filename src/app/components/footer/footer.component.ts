import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#050505] text-white pt-20 md:pt-32 pb-12 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- GRID PRINCIPALE -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-32">
          
          <!-- COLONNE 1 : LOGO & VISION -->
          <div class="col-span-1 sm:col-span-2 space-y-8 md:space-y-12">
            <div class="flex items-center gap-4 md:gap-6">
              <!-- Taille de logo adaptée -->
              <div class="w-16 h-16 md:w-20 md:h-20 bg-black rounded-full p-1 border border-[#C5A059]/30 shadow-2xl shrink-0">
                <img src="/logo-ddp.jpeg" alt="DDP Logo" class="w-full h-full object-contain rounded-full">
              </div>
              <div class="flex flex-col">
                <span class="font-black text-2xl md:text-3xl tracking-tighter uppercase leading-none">Dididenoble</span>
                <span class="text-[#C5A059] text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-black">Productions</span>
              </div>
            </div>
            <p class="text-gray-400 max-w-md font-light leading-relaxed text-base md:text-lg italic">
              "Porter l'art tchadien au sommet de son excellence et en faire un levier de changement mondial."
            </p>
            
            <!-- RÉSEAUX SOCIAUX -->
            <div class="flex flex-wrap gap-4 md:gap-6 pt-2">
              <a href="#" class="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">Facebook</a>
              <a href="#" class="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">Instagram</a>
              <a href="#" class="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">TikTok</a>
              <a href="#" class="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">Snapchat</a>
            </div>
          </div>

          <!-- COLONNE 2 : NAVIGATION (Cachée ou simplifiée sur très petit mobile si besoin, ici en grid) -->
          <div class="space-y-6 md:space-y-10">
            <h6 class="text-[#C5A059] font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Navigation</h6>
            <ul class="space-y-3 md:space-y-4 text-gray-500 text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
              <li><a href="#accueil" class="hover:text-white transition-colors">L'Agence</a></li>
              <li><a href="#equipe" class="hover:text-white transition-colors">L'Équipe</a></li>
              <li><a href="#projets" class="hover:text-white transition-colors">Réalisations</a></li>
              <li><a href="#actualites" class="hover:text-white transition-colors">Journal de Bord</a></li>
            </ul>
          </div>

          <!-- COLONNE 3 : CONTACT DIRECT -->
          <div class="space-y-6 md:space-y-10">
            <h6 class="text-[#C5A059] font-black uppercase tracking-[0.3em] text-[9px] md:text-[10px]">Contact Direct</h6>
            <div class="space-y-6 md:space-y-8">
              <div class="space-y-2">
                <p class="text-[9px] text-gray-500 uppercase font-black tracking-widest">Siège Social</p>
                <p class="text-white text-xs md:text-sm font-light leading-relaxed">
                  Habena, 7e Arrondissement<br>N'Djamena, Tchad
                </p>
              </div>
              
              <div class="space-y-4">
                <a href="mailto:denobledidi@gmail.com" class="block text-white hover:text-[#C5A059] transition-colors text-xs md:text-sm font-medium border-b border-white/10 pb-2 truncate">
                  denobledidi&#64;gmail.com
                </a>
                <div class="space-y-2">
                  <p class="text-white text-xs md:text-sm font-bold whitespace-nowrap">+33 7 80 74 16 85 <span class="text-[#C5A059] text-[7px] ml-1 uppercase">WA</span></p>
                  <p class="text-white text-xs md:text-sm font-bold whitespace-nowrap">+235 65 67 66 77 <span class="text-gray-500 text-[7px] ml-1 uppercase">TD</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- FOOTER BOTTOM -->
        <div class="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 md:gap-8 items-center text-center md:text-left">
          <div class="flex flex-col gap-1 md:gap-2">
            <p class="text-gray-600 text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.5em]">© 2026 Dididenoble Productions.</p>
            <p class="text-gray-600 text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.5em]">All rights reserved.</p>
          </div>
          
          <div class="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em]">
            <span class="text-gray-600">Suivre Didi De Noble :</span>
            <span class="text-[#C5A059]">&#64;dididenoble</span>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {}