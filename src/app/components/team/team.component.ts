import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipe',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="equipe" class="py-32 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        
        <!-- HEADER -->
        <div class="mb-20 animate-fade-up">
          <h2 class="text-[#C5A059] font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Leadership & Talents</h2>
          <div class="flex flex-col md:flex-row justify-between items-end gap-8">
            <h3 class="text-5xl md:text-7xl font-black uppercase tracking-tighter text-gray-900 leading-none">
              L'Esprit derrière <br> la vision.
            </h3>
            <div class="flex gap-4 text-[#C5A059] items-center mb-2">
              <span class="text-[9px] font-black uppercase tracking-widest opacity-60">Faites glisser</span>
              <div class="w-16 h-px bg-[#C5A059]"></div>
            </div>
          </div>
        </div>

        <!-- CONTENEUR DE SCROLL HORIZONTAL -->
        <div class="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth">
          @for (member of team; track member.name) {
            <!-- 
              Largeur fixe garantie : 
              - 85vw sur mobile (pour voir un bout de la suivante)
              - 380px sur desktop pour une grille élégante
            -->
            <div class="min-w-[85vw] md:min-w-[380px] group relative snap-start">
              
              <!-- 
                CADRE PHOTO STRICT : aspect-[3/4] force le ratio vertical 
                h-full + object-cover garantit que l'image remplit tout l'espace sans se déformer
              -->
              <div class="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 border border-gray-100 shadow-xl">
                <img 
                  [src]="member.photo" 
                  [alt]="member.name" 
                  class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                >
                
                <!-- OVERLAY AU SURVOL -->
                <div class="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex flex-col justify-center items-center text-center p-10">
                  <p class="text-white text-sm font-light mb-8 leading-relaxed italic">
                    "{{ member.quote }}"
                  </p>
                  
                  <div class="space-y-4">
                    @if (member.phone) {
                      <a [href]="'tel:' + member.phone" class="block text-[#C5A059] font-black text-[10px] uppercase tracking-[0.2em] hover:text-white transition-colors">
                        {{ member.phone }}
                      </a>
                    }
                    <a [href]="'mailto:' + member.email" class="block text-white font-black text-[10px] uppercase tracking-[0.2em] border-b border-[#C5A059]/50 pb-1 hover:border-[#C5A059] transition-all">
                      {{ member.email }}
                    </a>
                  </div>
                </div>
              </div>

              <!-- INFOS (Alignées car le cadre au-dessus est de taille fixe) -->
              <div class="mt-8">
                <h4 class="text-3xl font-black uppercase text-gray-900 tracking-tighter leading-none">
                  {{ member.name }}
                </h4>
                <p class="text-[#C5A059] font-black uppercase tracking-[0.4em] text-[10px] mt-3">
                  {{ member.role }}
                </p>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
  `]
})
export class TeamComponent {
  team = [
    {
      name: 'Didi De Noble',
      role: 'Président Fondateur',
      photo: '/didi-portrait.jpeg',
      quote: 'Innover pour l’excellence et bâtir un héritage culturel mondial.',
      phone: '+33 7 80 74 16 85',
      email: 'denobledidi@gmail.com'
    },
    {
      name: 'Ndomich KGB',
      role: 'Artiste Principal',
      photo: '/ndomich-portrait.jpeg',
      quote: 'Récupérer l’identité pour conquérir le monde via le concept BEWA.',
      phone: '',
      email: 'contact@dididenoble.com'
    }
  ];
}