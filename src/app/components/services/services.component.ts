import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="agence" class="py-32 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-12 text-gray-900">
          <div class="max-w-2xl">
            <h2 class="text-[#C5A059] font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Expertise Dididenoble</h2>
            <h3 class="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">L'Excellence <br> sans compromis.</h3>
          </div>
          <div class="flex flex-col items-end">
            <p class="text-gray-400 text-sm max-w-xs pb-4 font-bold uppercase tracking-widest leading-loose text-right">
              De la conception à la distribution mondiale.
            </p>
            <div class="flex gap-2 text-[#C5A059] items-center">
              <span class="text-[9px] font-black uppercase tracking-widest">Scroll</span>
              <div class="w-12 h-px bg-[#C5A059]"></div>
            </div>
          </div>
        </div>

        <div class="flex overflow-x-auto gap-6 pb-12 snap-x snap-mandatory scrollbar-hide scroll-smooth">
          @for (s of services; track s.id) {
            <div class="min-w-[85vw] md:min-w-[400px] h-[600px] relative overflow-hidden group cursor-pointer bg-black snap-start">
              
              @if (s.video) {
                <video 
                  [src]="s.video" 
                  autoplay 
                  loop 
                  muted 
                  playsinline
                  class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-1000 grayscale group-hover:grayscale-0">
                </video>
              } @else {
                <img 
                  [src]="s.image" 
                  [alt]="s.title"
                  class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                >
              }

              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>

              <div class="absolute inset-0 p-10 flex flex-col justify-end z-10">
                
                @if (s.cat === 'DISTRIBUTION') {
                    <div class="absolute top-10 right-10 flex items-center justify-center">
                        <div class="w-2 h-2 bg-[#C5A059] rounded-full animate-ping absolute"></div>
                        <div class="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                    </div>
                }

                <span class="text-[#C5A059] font-black text-[10px] mb-4 block tracking-[0.4em]">
                  {{ s.id }} / {{ s.cat }}
                </span>
                <h4 class="text-4xl font-black uppercase mb-4 text-white leading-none">
                  {{ s.title }}
                </h4>
                
                <p class="text-gray-300 text-sm font-light leading-relaxed max-h-0 group-hover:max-h-32 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                  {{ s.desc }}
                </p>

                <div class="w-10 h-1 bg-[#C5A059] mt-6 group-hover:w-full transition-all duration-700"></div>
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
export class ServicesComponent {
  services = [
    { 
      id: '01', 
      cat: 'AUDIO', 
      title: 'Production Sonore', 
      desc: 'Enregistrement studio haut de gamme, mixage et mastering pour transformer vos idées en standards mondiaux.',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000'
    },
    { 
      id: '02', 
      cat: 'VISUEL', 
      title: 'Réalisation Vidéo', 
      desc: 'Cinématographie de pointe pour clips, documentaires et publicités. Une esthétique qui marque les esprits.',
      // Exemple de vidéo en ligne (stock footage). Remplace par ton fichier local dans /public
      video: '/videos/production-video.mp4',
      image: 'https://images.unsplash.com/photo-1492691523567-6170f0295dbd?q=80&w=1000' 
    },
    { 
      id: '03', 
      cat: 'STRATÉGIE', 
      title: 'Management & Conseil', 
      desc: 'Accompagnement de carrière, gestion des droits et stratégies de déploiement international pour les talents.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000'
    },
    { 
      id: '04', 
      cat: 'DISTRIBUTION', 
      title: 'Placement Digital', 
      desc: 'Mise en ligne sur toutes les plateformes de streaming (Spotify, Apple, YouTube) et optimisation de visibilité.',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000' // Image studio/micro avec vibe "on air"
    }
  ];
}