import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className='min-h-screen bg-[#0a0a0a] selection:bg-white/30 selection:text-white'>
      <section className='relative w-full'>
        <ScrollyCanvas />
        <Overlay />
      </section>
      <Projects />
      <Skills />
      <footer className='bg-[#0a0a0a] border-t border-white/10 py-12 px-8 text-center text-gray-500 text-sm'>
        <div className='flex justify-center gap-8 mb-4'>
          <a href='https://github.com/developertutuorials' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors'>GitHub</a>
          <a href='https://www.linkedin.com/in/ayush-78a60829b/' target='_blank' rel='noopener noreferrer' className='hover:text-white transition-colors'>LinkedIn</a>
          <a href='mailto:ayushkum2005a@gmail.com' className='hover:text-white transition-colors'>Email</a>
        </div>
        <p>© {new Date().getFullYear()} Ayush. All rights reserved.</p>
      </footer>
    </main>
  );
}