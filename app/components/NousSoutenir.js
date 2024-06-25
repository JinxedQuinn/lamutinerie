import Link from 'next/link';
import Image from 'next/image';

export default function imagetexte() {
    return (
        <>
            <div className='h-full bg-white p-12 relative'>
                <div className='text-8xl font-bold absolute top-0 w-full text-red-500'>Soutenir</div>
                <Image
                    src="/FresqueMutinerie.png"
                    alt="Photo d'une banderole prise à la Mutinerie"
                    width={1920}
                    height={1080} />
                <p className='mt-8'>
                    La Mutinerie est un bar féministe autogéré parisien, par et pour les meufs, gouines, bi.e.s, queers et/ou les personnes trans. Le lieu accueille une programmation variée : concerts, conférences, DJ sets, performances, ateliers d'écriture, dragshows, projections, cours d'autodéfense, karaoké, scènes ouvertes...
                </p>
                <p className='mt-8'>
                    Autant qu’un espace festif communautaire, la Mutinerie est également un lieu de réflexion politique, qui s'engage pour des prix accessibles, la mise en place de bonnes conditions de travail, une entrée toujours gratuite, la possibilité de profiter du lieu sans consommer, la rémunération de tou.te.s les intervenant.e.s et le reversement d'une partie de notre chiffre d'affaires à des associations communautaires, tout en conservant une indépendance financière totale vis-à-vis des institutions.
                </p>
                <p className='mt-8'>
                    En dehors des horaires d'ouverture du bar, le local accueille des associations spécialisées dans les questions de santé, de prévention et de réduction des risques (santé sexuelle et MST, usager.es de drogue...), des actions de prévention, d'éducation et des groupe de parole pour les victimes de violences sexistes et sexuelles, d’homophobie, etc…
                </p>
                <p className='mt-8'>

                    Mais, il y a toujours un mais, La Mutinerie est un projet très fragile économiquement, pour toutes les raisons évoquées ci-dessus. Alors n'hésite pas à apporter ta pierre à l'édifice ! Chaque don compte, même minime, à hauteur de tes moyens ❤️
                </p>
            </div>
            <Link href='https://www.helloasso.com/associations/association-fmiqf/formulaires/1' className='flex items-center justify-center'>
                <Image
                    src="/fleche.gif"
                    alt="Photo d'une banderole prise à la Mutinerie"
                    width={40}
                    height={40} />
                <p>Nous soutenir</p>
            </Link>
        </>
    );
};