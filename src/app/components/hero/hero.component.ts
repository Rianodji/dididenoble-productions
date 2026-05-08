import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="accueil" class="relative pt-32 pb-16 md:pt-64 md:pb-40 overflow-hidden bg-white">
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        <!-- TEXTE CONTENT -->
        <div class="space-y-6 md:space-y-10 animate-fade-up z-10">
          <div class="inline-flex items-center gap-3 px-4 py-2 border border-[#C5A059]/30 bg-[#C5A059]/5 text-[#C5A059] text-[8px] md:text-[10px] font-black uppercase tracking-widest rounded-full">
            <span class="w-2 h-2 bg-[#C5A059] rounded-full animate-ping"></span>
            Startup de Production | N'Djamena, Tchad
          </div>
          
          <!-- Taille adaptée : text-5xl sur mobile, 9xl sur très grand écran -->
          <h1 class="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-[0.9] md:leading-[0.85] uppercase tracking-tighter">
            Bâtir <br> <span class="text-[#C5A059]">l'Héritage</span> <br> de demain.
          </h1>
          
          <p class="text-gray-500 text-base md:text-xl max-w-lg leading-relaxed font-light">
            DIDIDENOBLE PRODUCTIONS transforme l'identité culturelle tchadienne en standards d'excellence internationaux.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
            <a href="#agence" class="bg-black text-white text-center px-8 md:px-10 py-4 md:py-5 font-bold uppercase text-[10px] md:text-xs tracking-widest hover:bg-[#C5A059] transition-all duration-500 shadow-xl no-underline inline-block">
              Explorer nos services
            </a>
            
            <button (click)="openCatalogue()" class="group flex items-center justify-center sm:justify-start gap-4 font-bold uppercase text-[10px] md:text-xs tracking-widest text-gray-900 cursor-pointer">
              <span>Le Catalogue</span>
              <span class="w-8 h-[2px] bg-black group-hover:w-16 group-hover:bg-[#C5A059] transition-all duration-500"></span>
            </button>
          </div>
        </div>

        <!-- VISUEL DDP (CERCLE ANIMÉ) -->
        <div class="relative flex justify-center items-center mt-12 lg:mt-0">
          <div class="absolute inset-0 bg-[#C5A059]/10 rounded-full blur-[80px] md:blur-[120px] opacity-30"></div>
          
          <!-- Taille responsive du cercle : w-64 (256px) sur petit mobile, w-[550px] sur desktop -->
          <div class="w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] rounded-full bg-white shadow-2xl border border-gray-50 flex items-center justify-center p-6 md:p-12 relative overflow-hidden group">
            
            <!-- Cercles animés (Dashed lines) -->
            <div class="absolute inset-0 border-[1px] md:border-[1.5px] border-dashed border-[#C5A059]/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div class="absolute inset-4 md:inset-8 border-[1px] border-dashed border-gray-200 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

            <div class="w-full h-full rounded-full border-4 md:border-8 border-[#C5A059]/5 bg-gray-50 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-700">
              <div class="text-center">
                <!-- Taille du texte DDP adaptée -->
                <h2 class="text-[#C5A059] font-serif text-5xl md:text-7xl lg:text-8xl mb-1 md:mb-2 italic tracking-tighter leading-none">DDP</h2>
                <p class="text-[7px] md:text-[10px] lg:text-[12px] text-gray-400 font-black uppercase tracking-[0.4em] md:tracking-[0.6em]">Est. 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  openCatalogue() {
    alert('Le catalogue sera disponible prochainement.');
  }
}