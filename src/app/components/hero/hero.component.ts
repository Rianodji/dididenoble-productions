import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="accueil" class="relative pt-48 pb-24 md:pt-64 md:pb-40 overflow-hidden bg-white">
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div class="space-y-10 animate-fade-up">
          <div class="inline-flex items-center gap-3 px-4 py-2 border border-[#C5A059]/30 bg-[#C5A059]/5 text-[#C5A059] text-[10px] font-black uppercase tracking-widest rounded-full">
            <span class="w-2 h-2 bg-[#C5A059] rounded-full animate-ping"></span>
            Startup de Production | N'Djamena, Tchad
          </div>
          
          <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-gray-900 leading-[0.85] uppercase tracking-tighter">
            Bâtir <br> <span class="text-[#C5A059]">l'Héritage</span> <br> de demain.
          </h1>
          
          <p class="text-gray-500 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            DIDIDENOBLE PRODUCTIONS transforme l'identité culturelle tchadienne en standards d'excellence internationaux.
          </p>
          
          <div class="flex flex-wrap gap-6 pt-4">
            <a href="#agence" class="bg-black text-white px-10 py-5 font-bold uppercase text-xs tracking-widest hover:bg-[#C5A059] transition-all duration-500 shadow-2xl shadow-black/20 no-underline inline-block">
              Explorer nos services
            </a>
            
            <button (click)="openCatalogue()" class="group flex items-center gap-4 font-bold uppercase text-xs tracking-widest text-gray-900 cursor-pointer">
              <span>Le Catalogue</span>
              <span class="w-12 h-[2px] bg-black group-hover:w-20 group-hover:bg-[#C5A059] transition-all duration-500"></span>
            </button>
          </div>
        </div>

        <div class="relative flex justify-center items-center">
          <div class="absolute inset-0 bg-[#C5A059]/10 rounded-full blur-[120px] opacity-30"></div>
          
          <div class="w-80 h-80 md:w-[550px] md:h-[550px] rounded-full bg-white shadow-2xl border border-gray-50 flex items-center justify-center p-12 relative overflow-hidden group">
            
            <div class="absolute inset-0 border-[1.5px] border-dashed border-[#C5A059]/40 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            <div class="absolute inset-8 border-[1px] border-dashed border-gray-200 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

            <div class="w-full h-full rounded-full border-8 border-[#C5A059]/5 bg-gray-50 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-700">
              <div class="text-center">
                <h2 class="text-[#C5A059] font-serif text-6xl md:text-8xl mb-2 italic tracking-tighter">DDP</h2>
                <p class="text-[9px] md:text-[12px] text-gray-400 font-black uppercase tracking-[0.6em]">Est. 2025</p>
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
    // Logique pour ouvrir un PDF ou une autre page
    console.log('Ouverture du catalogue...');
    alert('Le catalogue sera disponible prochainement.');
  }
}