import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#050505] text-white pt-32 pb-12 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-32">
          
          <!-- COLONNE 1 : LOGO & VISION -->
          <div class="col-span-1 lg:col-span-2 space-y-12">
            <div class="flex items-center gap-6">
              <div class="w-20 h-20 bg-black rounded-full p-1 border border-[#C5A059]/30 shadow-2xl">
                <img src="/logo-ddp.jpeg" alt="DDP Logo" class="w-full h-full object-contain rounded-full">
              </div>
              <div class="flex flex-col">
                <span class="font-black text-3xl tracking-tighter uppercase leading-none">Dididenoble</span>
                <span class="text-[#C5A059] text-[10px] uppercase tracking-[0.5em] font-black">Productions</span>
              </div>
            </div>
            <p class="text-gray-400 max-w-md font-light leading-relaxed text-lg italic">
              "Porter l'art tchadien au sommet de son excellence et en faire un levier de changement mondial."
            </p>
            
            <!-- RÉSEAUX SOCIAUX -->
            <div class="flex flex-wrap gap-6 pt-4">
              <a href="#" class="text-[10px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">Facebook</a>
              <a href="#" class="text-[10px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">Instagram</a>
              <a href="#" class="text-[10px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">TikTok</a>
              <a href="#" class="text-[10px] font-black uppercase tracking-widest text-[#C5A059] hover:text-white transition-colors">Snapchat</a>
            </div>
          </div>

          <!-- COLONNE 2 : NAVIGATION -->
          <div>
            <h6 class="text-[#C5A059] font-black uppercase tracking-[0.3em] text-[10px] mb-10">Navigation</h6>
            <ul class="space-y-4 text-gray-500 text-[11px] font-bold uppercase tracking-widest">
              <li><a href="#accueil" class="hover:text-white transition-colors">L'Agence</a></li>
              <li><a href="#equipe" class="hover:text-white transition-colors">L'Équipe</a></li>
              <li><a href="#projets" class="hover:text-white transition-colors">Réalisations</a></li>
              <li><a href="#actualites" class="hover:text-white transition-colors">Journal de Bord</a></li>
            </ul>
          </div>

          <!-- COLONNE 3 : CONTACT DIRECT -->
          <div>
            <h6 class="text-[#C5A059] font-black uppercase tracking-[0.3em] text-[10px] mb-10">Contact Direct</h6>
            <div class="space-y-8">
              <div class="space-y-2">
                <p class="text-[10px] text-gray-500 uppercase font-black tracking-widest">Siège Social</p>
                <p class="text-white text-sm font-light leading-relaxed">
                  Habena, 7e Arrondissement<br>N'Djamena, Tchad
                </p>
              </div>
              
              <div class="space-y-4">
                <a href="mailto:denobledidi@gmail.com" class="block text-white hover:text-[#C5A059] transition-colors text-sm font-medium border-b border-white/10 pb-2">
                  denobledidi&#64;gmail.com
                </a>
                <div class="space-y-1">
                  <p class="text-white text-sm font-bold">+33 7 80 74 16 85 <span class="text-[#C5A059] text-[8px] ml-2 uppercase">Mobile & WA</span></p>
                  <p class="text-white text-sm font-bold">+235 65 67 66 77 <span class="text-gray-500 text-[8px] ml-2 uppercase">Tchad</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- FOOTER BOTTOM -->
        <div class="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-8 items-center">
          <div class="flex flex-col gap-2">
            <p class="text-gray-600 text-[9px] uppercase tracking-[0.5em]">© 2026 Dididenoble Productions.</p>
            <p class="text-gray-600 text-[9px] uppercase tracking-[0.5em]">All rights reserved.</p>
          </div>
          
          <div class="flex items-center gap-4 text-[9px] font-black uppercase tracking-[0.2em]">
            <span class="text-gray-600">Suivre Didi De Noble :</span>
            <span class="text-[#C5A059]">&#64;dididenoble</span>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {}