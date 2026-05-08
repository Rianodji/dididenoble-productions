import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projets" class="py-20 md:py-32 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        
        <div class="relative bg-black text-white shadow-2xl overflow-hidden group">
          <div class="flex flex-col lg:flex-row">
            
            <!-- CONTENU PRINCIPAL : Adaptatif pour iPhone -->
            <div class="lg:w-3/5 p-8 md:p-16 lg:p-24 space-y-8 md:space-y-12 relative z-20 bg-black/60 backdrop-blur-sm lg:bg-transparent">
              <div class="inline-block px-4 py-1 border border-[#C5A059] text-[#C5A059] text-[8px] md:text-[10px] font-black uppercase tracking-widest">
                Sortie 2026
              </div>
              
              <!-- Taille de texte dynamique pour éviter les coupures sur Android/iOS -->
              <h3 class="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.9] md:leading-[0.85] group-hover:translate-x-2 transition-transform duration-1000">
                "From Chad <br> to the World"
              </h3>
              
              <p class="text-gray-400 text-base md:text-xl font-light leading-relaxed max-w-xl">
                L'identité <span class="text-white font-black uppercase italic tracking-widest border-b border-[#C5A059]">BEWA</span> à la conquête du monde. 
                Une immersion dans la philosophie de <span class="text-[#C5A059] font-bold">Ndomich KGB</span>.
              </p>
              
              <button 
                (click)="toggleDetails()"
                class="w-full sm:w-auto px-10 py-5 bg-[#C5A059] text-black font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all duration-500 cursor-pointer">
                {{ showDetails() ? 'Fermer les détails' : 'Explorer le projet' }}
              </button>
            </div>

            <!-- VISUEL DE COUVERTURE : Hauteur réduite sur mobile -->
            <div class="lg:w-2/5 min-h-[300px] md:min-h-[500px] bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
              <img 
                src="/ndomich-cover.jpeg" 
                alt="Ndomich KGB BEWA Cover" 
                class="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              >
              
              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <!-- Badge flottant adapté -->
              <div class="relative z-10 w-32 h-32 md:w-48 md:h-48 border border-[#C5A059]/40 rounded-full flex flex-col items-center justify-center bg-black/40 backdrop-blur-md">
                 <span class="text-3xl md:text-5xl font-black text-[#C5A059] mb-1">07</span>
                 <span class="text-[7px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-white">Titres de Gloire</span>
              </div>
            </div>
          </div>

          <!-- SECTION DÉTAILS : Optimisée pour le scroll mobile -->
          <div 
            [class.max-h-[3000px]]="showDetails()" 
            [class.max-h-0]="!showDetails()"
            class="overflow-hidden transition-all duration-1000 ease-in-out bg-[#050505] border-t border-white/5"
          >
            <div class="p-8 md:p-16 lg:p-24 grid md:grid-cols-2 gap-12 md:gap-20">
              
              <!-- LA VISION -->
              <div class="space-y-8 md:space-y-10">
                <div>
                  <h4 class="text-[#C5A059] font-black uppercase tracking-widest text-[10px] mb-4">La Vision BEWA</h4>
                  <p class="text-xl md:text-2xl font-light text-white leading-relaxed">
                    "Récupérer l’identité pour conquérir le monde." Valoriser la dignité culturelle et la réussite sans renier ses racines.
                  </p>
                </div>

                <div class="grid gap-6 md:gap-8">
                  <div class="flex gap-4 md:gap-6">
                    <span class="text-[#C5A059] font-black">01</span>
                    <div>
                      <h5 class="font-bold uppercase text-xs md:text-sm mb-2">Linguistique</h5>
                      <p class="text-gray-400 text-xs md:text-sm font-light leading-relaxed">Utilisation de la langue Sarah pour valoriser le patrimoine oral local.</p>
                    </div>
                  </div>
                  <div class="flex gap-4 md:gap-6">
                    <span class="text-[#C5A059] font-black">02</span>
                    <div>
                      <h5 class="font-bold uppercase text-xs md:text-sm mb-2">Musicale</h5>
                      <p class="text-gray-400 text-xs md:text-sm font-light leading-relaxed">Fusion entre sonorités traditionnelles tchadiennes et énergie Hip-Hop.</p>
                    </div>
                  </div>
                  <div class="flex gap-4 md:gap-6">
                    <span class="text-[#C5A059] font-black">03</span>
                    <div>
                      <h5 class="font-bold uppercase text-xs md:text-sm mb-2">Philosophique</h5>
                      <p class="text-gray-400 text-xs md:text-sm font-light leading-relaxed">Modèle de réussite fondé sur l’identité et l’autonomie.</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- THÉMATIQUES -->
              <div class="space-y-6 md:space-y-8 bg-white/5 p-6 md:p-8 border border-white/5 rounded-sm">
                <h4 class="text-white font-black uppercase tracking-widest text-[10px]">Thématiques de l'EP</h4>
                
                <div class="space-y-5 md:space-y-6">
                  <div class="border-b border-white/5 pb-4">
                    <h5 class="text-[#C5A059] font-bold text-base md:text-lg italic">Médiocrité</h5>
                    <p class="text-gray-400 text-[10px] md:text-xs">Le plaidoyer pour l'excellence face à la superficialité du "buzz".</p>
                  </div>
                  <div class="border-b border-white/5 pb-4">
                    <h5 class="text-[#C5A059] font-bold text-base md:text-lg italic">Cris de détresse</h5>
                    <p class="text-gray-400 text-[10px] md:text-xs">Alerte sur le conflit agro-pastoral et coexistence pacifique.</p>
                  </div>
                  <div class="border-b border-white/5 pb-4">
                    <h5 class="text-[#C5A059] font-bold text-base md:text-lg italic">Jamais tard</h5>
                    <p class="text-gray-400 text-[10px] md:text-xs">Résilience et espoir : l'avenir se construit ici.</p>
                  </div>
                  <div>
                    <h5 class="text-[#C5A059] font-bold text-base md:text-lg italic">Cherchons l'argent</h5>
                    <p class="text-gray-400 text-[10px] md:text-xs">Entrepreneuriat, discipline et autonomie financière.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ProjectComponent {
  showDetails = signal(false);

  toggleDetails() {
    this.showDetails.update(v => !v);
  }
}